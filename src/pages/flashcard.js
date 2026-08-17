import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getFlashcards, addFlashcard } from '../utils/db.js';
import { PHRASES, CATEGORIES, getLanguageFromCountry, getFlagFromLanguage } from '../data/phrases.js';
import { t, getLang } from '../utils/i18n.js';

let state = {
  activeLang: 'en',
  activeCategory: 'greeting',
  currentCardIndex: 0,
  flashcards: [],
  customCards: []
};

export default {
  render() {
    return `
      <div class="page flashcard-page">
        <header class="page-header">
          <button class="btn-back" id="btn-back">←</button>
          <h2 class="page-title">🗣️ ${t('flashcardTitle') || 'トラベル単語帳'}</h2>
        </header>

        <div class="flashcard-language-selector" id="fc-target-langs">
          <!-- Dynamically populated flag buttons -->
        </div>

        <div class="tabs" id="fc-categories" style="margin-bottom: var(--space-lg); overflow-x: auto; white-space: nowrap;">
          <!-- Dynamically populated category tabs -->
        </div>

        <div class="flashcard-container">
          <div class="flashcard-scene" id="fc-card-wrapper">
            <div class="flashcard" id="fc-card">
              <div class="flashcard-face flashcard-front">
                <h3 id="fc-front-text" class="flashcard-phrase"></h3>
                <div class="swipe-hint">タップで裏返す 👆</div>
              </div>
              <div class="flashcard-face flashcard-back">
                <h3 id="fc-back-text" class="flashcard-translation"></h3>
                <p id="fc-back-reading" class="flashcard-reading"></p>
                <div class="swipe-hint">タップで戻る 🔙</div>
              </div>
            </div>
          </div>
          
          <div class="flashcard-nav">
            <button id="fc-prev-btn" class="flashcard-nav-btn">◀</button>
            <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
              <span id="fc-counter" class="flashcard-counter">0 / 0</span>
              <div id="fc-fav-btn" class="flashcard-star">⭐</div>
            </div>
            <button id="fc-next-btn" class="flashcard-nav-btn">▶</button>
          </div>
        </div>

        <button class="fab" id="fc-add-btn">➕</button>

        <div id="fc-modal" class="modal-overlay">
          <div class="modal-content">
            <div class="modal-title">新しいフレーズを追加</div>
            <div class="form-group mt-md">
              <label class="form-label">調べたい言葉（あなたの言語）</label>
              <input type="text" id="fc-new-front" placeholder="例: こんにちは" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-label">現地での言い方</label>
              <input type="text" id="fc-new-back" placeholder="例: Hello" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-label">読み方メモ</label>
              <input type="text" id="fc-new-reading" placeholder="例: ハロー" class="form-input">
            </div>
            <button id="fc-modal-save" class="btn btn-primary w-full mt-lg">保存する</button>
            <button type="button" class="btn btn-secondary w-full mt-sm" id="fc-modal-close">キャンセル</button>
          </div>
        </div>
      </div>
    `;
  },

  init() {
    const store = getState();
    const trip = store.currentTrip;
    const userLang = getLang(); // 'ja', 'en', 'th'
    
    // PHRASES key logic: 'ja' is mapped to 'jp' in the phrases.js data model
    const userLangKey = userLang === 'ja' ? 'jp' : userLang;

    // Determine target languages based on trip destinations
    let targetLangs = ['en'];
    if (trip && trip.destinations) {
      const tripLangs = trip.destinations.map(d => getLanguageFromCountry(d.country)).filter(Boolean);
      if (tripLangs.length > 0) targetLangs = [...new Set(tripLangs)];
    }
    state.activeLang = targetLangs[0] || 'en';
    
    // Target Langs
    const targetLangsContainer = document.getElementById('fc-target-langs');
    if (targetLangs.length > 1) {
      targetLangsContainer.innerHTML = targetLangs.map(lang => 
        `<button class="flag-btn ${lang === state.activeLang ? 'active' : ''}" data-lang="${lang}">
          ${getFlagFromLanguage(lang)}
        </button>`
      ).join('');
    } else if (targetLangs.length === 1) {
       targetLangsContainer.innerHTML = `<div class="flag-btn active" style="pointer-events: none;">${getFlagFromLanguage(targetLangs[0])}</div>`;
    }

    // Categories
    const catContainer = document.getElementById('fc-categories');
    const catKeys = CATEGORIES ? CATEGORIES.map(c => c.id) : ['greeting'];
    if (catKeys.length > 0) {
      state.activeCategory = catKeys[0];
      catContainer.innerHTML = CATEGORIES.map(cat => 
        `<button class="tab ${cat.id === state.activeCategory ? 'active' : ''}" data-cat="${cat.id}">
          ${cat.emoji} ${cat.label}
        </button>`
      ).join('');
    }

    const updateDeck = () => {
      let deck = [];
      if (PHRASES && PHRASES[state.activeLang] && PHRASES[state.activeLang][state.activeCategory]) {
        deck = [...PHRASES[state.activeLang][state.activeCategory]];
      }
      const custom = state.customCards.filter(c => c.category === state.activeCategory && c.lang === state.activeLang);
      state.flashcards = [...deck, ...custom];
      state.currentCardIndex = 0;
      updateCardUI();
    };

    const updateCardUI = () => {
      const card = state.flashcards[state.currentCardIndex];
      const fcCard = document.getElementById('fc-card');
      
      if (!card) {
        document.getElementById('fc-front-text').textContent = 'カードがありません';
        document.getElementById('fc-back-text').textContent = '右下の➕から追加！';
        document.getElementById('fc-back-reading').textContent = '';
        document.getElementById('fc-counter').textContent = '0 / 0';
        fcCard.classList.remove('flipped');
        return;
      }
      
      // Determine what to show on the front (user's native language)
      // card[userLangKey] gives the predefined translation (e.g., card['jp'] = 'こんにちは')
      // Custom cards have userFront and targetBack.
      const frontText = card.userFront || card[userLangKey] || card.en || card.phrase;
      
      // Determine what to show on the back (target destination language)
      const backText = card.targetBack || card.phrase || '';
      const backReading = card.reading || '';
      
      document.getElementById('fc-front-text').textContent = frontText;
      document.getElementById('fc-back-text').textContent = backText;
      document.getElementById('fc-back-reading').textContent = backReading;
      
      document.getElementById('fc-counter').textContent = `${state.currentCardIndex + 1} / ${state.flashcards.length}`;
      fcCard.classList.remove('flipped');
      
      const favs = JSON.parse(localStorage.getItem('tabi_shiori_fav_cards') || '[]');
      const isFav = favs.includes(card.id || frontText);
      document.getElementById('fc-fav-btn').textContent = isFav ? '🌟' : '⭐';
      document.getElementById('fc-fav-btn').classList.toggle('active', isFav);
    };

    if (trip) {
      getFlashcards(trip.id).then(custom => {
        state.customCards = custom;
        updateDeck();
      });
    } else {
      updateDeck();
    }

    // Event Listeners
    document.getElementById('btn-back')?.addEventListener('click', () => navigate('/'));
    
    document.getElementById('fc-card-wrapper')?.addEventListener('click', () => {
      document.getElementById('fc-card').classList.toggle('flipped');
    });
    
    document.getElementById('fc-prev-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.currentCardIndex > 0) {
        state.currentCardIndex--;
        updateCardUI();
      }
    });
    
    document.getElementById('fc-next-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.currentCardIndex < state.flashcards.length - 1) {
        state.currentCardIndex++;
        updateCardUI();
      }
    });
    
    document.querySelectorAll('.flag-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.closest('.flag-btn');
        if (!target.classList.contains('active')) {
          document.querySelectorAll('.flag-btn').forEach(b => b.classList.remove('active'));
          target.classList.add('active');
          state.activeLang = target.dataset.lang;
          updateDeck();
        }
      });
    });
    
    document.getElementById('fc-categories')?.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab');
      if (tab && !tab.classList.contains('active')) {
        document.querySelectorAll('#fc-categories .tab').forEach(b => b.classList.remove('active'));
        tab.classList.add('active');
        state.activeCategory = tab.dataset.cat;
        updateDeck();
      }
    });
    
    document.getElementById('fc-fav-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = state.flashcards[state.currentCardIndex];
      if(!card) return;
      const frontText = card.userFront || card[userLangKey] || card.phrase;
      const key = card.id || frontText;
      let favs = JSON.parse(localStorage.getItem('tabi_shiori_fav_cards') || '[]');
      if(favs.includes(key)) {
        favs = favs.filter(k => k !== key);
      } else {
        favs.push(key);
      }
      localStorage.setItem('tabi_shiori_fav_cards', JSON.stringify(favs));
      updateCardUI();
    });

    const modal = document.getElementById('fc-modal');
    document.getElementById('fc-add-btn')?.addEventListener('click', () => {
      document.getElementById('fc-new-front').value = '';
      document.getElementById('fc-new-back').value = '';
      document.getElementById('fc-new-reading').value = '';
      modal.classList.add('active');
    });

    document.getElementById('fc-modal-close')?.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
    
    document.getElementById('fc-modal-save')?.addEventListener('click', async () => {
      const front = document.getElementById('fc-new-front').value.trim();
      const back = document.getElementById('fc-new-back').value.trim();
      const reading = document.getElementById('fc-new-reading').value.trim();
      
      if(!front || !back) return;
      
      if(trip && store.user) {
        const newCard = {
          userFront: front,
          targetBack: back,
          reading: reading,
          category: state.activeCategory,
          lang: state.activeLang
        };
        await addFlashcard(trip.id, newCard);
        state.customCards.push(newCard);
        updateDeck();
        modal.classList.remove('active');
      }
    });
  }
};
