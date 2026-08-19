import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getResearchNotes, addResearchNote, updateResearchNote, deleteResearchNote } from '../utils/db.js';
import { t } from '../utils/i18n.js';
import { getLanguageFromCountry, getFlagFromLanguage, POPULAR_COUNTRIES } from '../data/phrases.js';
import { translateUserText } from '../utils/translate.js';

let activeCountry = '';
let notes = [];

const DEFAULT_QUESTIONS = [
  t('rq3') || "現地の人の性格は？",
  t('rq4') || "食文化は？",
  t('rq5') || "コンビニなどの便利なお店は？",
  t('rq6') || "移動手段はどういう？",
  t('rq7') || "家やトイレはどんな感じ？",
  t('rq8') || "実際に行きたい場所3つ",
  t('rq9') || "食べたいもの3つ"
];

export default {
  render() {
    return `
      <div class="page research-page">
        <header class="page-header">
          <button class="btn-icon btn-back" id="rs-back-btn">←</button>
          <h2 class="page-title">${t('researchTitle')}</h2>
        </header>

        <div class="country-tabs" id="rs-country-tabs">
          <!-- Dynamically populated country tabs -->
        </div>

        <div class="research-list" id="rs-list">
          <div class="loading">${t('loading') || 'よみこみ中... 🧸'}</div>
        </div>

        <button class="fab" id="rs-add-btn">➕</button>

        <!-- 質問追加・編集モーダル -->
        <div class="modal-overlay" id="rs-modal">
          <div class="modal-content">
            <div class="modal-title" id="rs-modal-title">${t('addNote') || '項目の追加'}</div>
            <form id="rs-form">
              <input type="hidden" id="rs-note-id">
              <div class="form-group mt-md">
                <label class="form-label">${t('researchItem') || '調べる項目（質問）'}</label>
                <input type="text" id="rs-question" class="form-input" placeholder="${t('researchItemPlaceholder') || '例: おすすめのカフェは？'}" required>
              </div>
              <button type="submit" class="btn btn-primary w-full mt-lg">${t('saveBtn') || '保存する'}</button>
              <button type="button" class="btn btn-secondary w-full mt-sm" id="rs-modal-close">${t('cancelBtn') || 'キャンセル'}</button>
            </form>
          </div>
        </div>
      </div>
    `;
  },
  
  async init() {
    const store = getState();
    const trip = store.currentTrip;
    
    if (!trip) {
      document.getElementById('rs-list').innerHTML = `<p class="empty-state">${t('noTripSelected') || '旅行が選択されていません。'}</p>`;
      return;
    }

    const destinations = trip.destinations || [];
    const countries = [...new Set(destinations.map(d => d.country).filter(Boolean))];
    
    if (countries.length === 0) {
      document.getElementById('rs-list').innerHTML = `<p class="empty-state">${t('noDestinationsSet') || '行き先が設定されていません。<br>旅行の編集から行き先を追加してください。'}</p>`;
      return;
    }

    activeCountry = countries[0];

    const tabsContainer = document.getElementById('rs-country-tabs');
    tabsContainer.style.display = 'flex';
    tabsContainer.style.justifyContent = 'center';
    tabsContainer.style.gap = '16px';
    tabsContainer.style.marginBottom = '16px';
    tabsContainer.innerHTML = countries.map(c => {
      const matched = POPULAR_COUNTRIES.find(pop => pop.code === c);
      let flag = '🏳️';
      if (matched) {
        flag = matched.flag;
      } else {
        const langCode = getLanguageFromCountry(c);
        flag = getFlagFromLanguage(langCode);
      }
      return `<span class="tab flag-tab" data-country="${c}" style="font-size: 2.5rem; cursor: pointer; transition: opacity 0.2s; opacity: ${c === activeCountry ? '1' : '0.4'};">${flag}</span>`;
    }).join('');

    tabsContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab');
      if (tab) {
        document.querySelectorAll('#rs-country-tabs .tab').forEach(t => {
          t.style.opacity = '0.4';
          t.classList.remove('active');
        });
        tab.style.opacity = '1';
        tab.classList.add('active');
        activeCountry = tab.dataset.country;
        this.loadNotes(trip.id);
      }
    });

    // Add / Edit Modal
    const modal = document.getElementById('rs-modal');
    document.getElementById('rs-add-btn').addEventListener('click', () => {
      document.getElementById('rs-modal-title').textContent = t('addNote') || '項目の追加';
      document.getElementById('rs-note-id').value = '';
      document.getElementById('rs-question').value = '';
      modal.classList.add('active');
    });

    document.getElementById('rs-modal-close').addEventListener('click', () => {
      modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
      if(e.target === modal) modal.classList.remove('active');
    });

    document.getElementById('rs-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const question = document.getElementById('rs-question').value.trim();
      const noteId = document.getElementById('rs-note-id').value;
      if (!question) return;

      if (noteId) {
        await updateResearchNote(trip.id, noteId, { question });
      } else {
        await addResearchNote(trip.id, {
          country: activeCountry,
          question: question,
          answer: '',
          order: notes.length
        });
      }
      
      modal.classList.remove('active');
      await this.loadNotes(trip.id);
    });

    document.getElementById('rs-back-btn')?.addEventListener('click', () => navigate('/'));

    await this.loadNotes(trip.id);
  },

  async loadNotes(tripId) {
    let allNotes = await getResearchNotes(tripId);
    
    notes = allNotes.filter(n => n.country === activeCountry);

    // If first time visiting this country and no notes, generate defaults
    if (notes.length === 0) {
      for (let i = 0; i < DEFAULT_QUESTIONS.length; i++) {
        await addResearchNote(tripId, {
          country: activeCountry,
          question: DEFAULT_QUESTIONS[i],
          answer: '',
          order: i
        });
      }
      // Re-fetch
      allNotes = await getResearchNotes(tripId);
      notes = allNotes.filter(n => n.country === activeCountry);
    }
    
    // Cleanup extra questions that we accidentally added earlier if they are empty
    const badQuestions = ["首都・人口・面積・公用語など", "首都・人口・面積・公用語は？", "現地通貨は？"];
    const notesToDelete = notes.filter(n => badQuestions.includes(n.question) && !n.answer);
    if (notesToDelete.length > 0) {
      for (const n of notesToDelete) {
        await deleteResearchNote(tripId, n.id);
      }
      allNotes = await getResearchNotes(tripId);
      notes = allNotes.filter(n => n.country === activeCountry);
    }

    notes.sort((a, b) => (a.order || 0) - (b.order || 0));
    await this.renderNotes(tripId);
  },

  async renderNotes(tripId) {
    const container = document.getElementById('rs-list');
    
    if (notes.length === 0) {
      container.innerHTML = `<p class="empty-state">${t('noResearch') || '項目がありません。'}</p>`;
      return;
    }

    const htmlPromises = notes.map(async (note) => {
      let qText = note.question;
      if (qText && qText.match(/^rq[1-9]$/)) {
        qText = t(qText);
      }
      const translatedQuestion = await translateUserText(qText) || qText;
      const translatedAnswer = note.answer ? (await translateUserText(note.answer) || note.answer) : '';
      
      return `
        <div class="rs-card" data-id="${note.id}">
          <div class="rs-card-header">
            <h3 class="rs-question">${translatedQuestion}</h3>
            <div class="rs-actions">
              <button class="btn-icon rs-edit-q" data-id="${note.id}">✏️</button>
              <button class="btn-icon rs-delete-q" data-id="${note.id}">✖</button>
            </div>
          </div>
          <div class="rs-card-body">
            <textarea class="rs-answer-input" data-id="${note.id}" placeholder="${t('researchAnswer') || '調べてわかったこと...'}">${note.answer || ''}</textarea>
            ${translatedAnswer !== (note.answer || '') && translatedAnswer ? `<div class="rs-answer-translated">💡 ${t('translationLabel') || '翻訳'}: ${translatedAnswer}</div>` : ''}
          </div>
        </div>
      `;
    });

    const htmlArray = await Promise.all(htmlPromises);
    container.innerHTML = htmlArray.join('');

    // Bind events for delete, edit question, and auto-save answer
    container.querySelectorAll('.rs-edit-q').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.closest('.rs-edit-q').dataset.id;
        const note = notes.find(n => n.id === id);
        if (note) {
          document.getElementById('rs-modal-title').textContent = t('editNote') || '項目の編集';
          document.getElementById('rs-note-id').value = note.id;
          document.getElementById('rs-question').value = note.question;
          document.getElementById('rs-modal').classList.add('active');
        }
      });
    });

    container.querySelectorAll('.rs-delete-q').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.closest('.rs-delete-q').dataset.id;
        if (confirm(t('confirmDelete') || 'この項目を削除しますか？')) {
          await deleteResearchNote(tripId, id);
          await this.loadNotes(tripId);
        }
      });
    });

    let typingTimer;
    container.querySelectorAll('.rs-answer-input').forEach(textarea => {
      textarea.addEventListener('input', (e) => {
        clearTimeout(typingTimer);
        const id = e.target.dataset.id;
        const answer = e.target.value;
        typingTimer = setTimeout(async () => {
          await updateResearchNote(tripId, id, { answer });
        }, 1000);
      });
    });
  }
};
