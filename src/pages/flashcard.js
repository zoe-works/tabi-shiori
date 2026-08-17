import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getFlashcards, addFlashcard } from '../utils/db.js';
import { PHRASES, CATEGORIES, COUNTRY_TO_LANGUAGE, COUNTRY_FLAGS } from '../data/phrases.js';

let state = {
  activeLang: 'en',
  activeUserLang: 'jp',
  activeCategory: 'greeting',
  currentCardIndex: 0,
  flashcards: [],
  customCards: []
};

export default {
  render() {
    return `
      <div class="page">
        <header class="page-header">
          <button class="btn-icon" id="btn-back">◀</button>
          <h1 class="page-title">🗣️ トラベル単語帳</h1>
          <div style="width: 44px"></div>
        </header>

        <div class="flashcard-language-selector" id="fc-target-langs">
          <!-- Dynamically populated flag buttons -->
        </div>

        <div class="user-lang-selector">
          <button class="user-lang-btn active" data-lang="jp">日本語</button>
          <button class="user-lang-btn" data-lang="th">タイ語</button>
          <button class="user-lang-btn" data-lang="en">English</button>
        </div>

        <div class="tabs" id="fc-categories" style="margin-bottom: var(--space-lg); overflow-x: auto; white-space: nowrap;">
          <!-- Dynamically populated category tabs -->
        </div>

        <div class="flashcard-container">
          <div class="flashcard-scene" id="fc-card-wrapper">
            <div class="flashcard" id="fc-card">
              <div class="flashcard-face flashcard-front">
                <h3 id="fc-front-text" class="flashcard-phrase"></h3>
                <p id="fc-front-reading" class="flashcard-reading"></p>
                <div class="swipe-hint">タップで裏返す</div>
              </div>
              <div class="flashcard-face flashcard-back">
                <h3 id="fc-back-text" class="flashcard-translation"></h3>
                <div class="swipe-hint">タップで戻る</div>
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

        <button class="fab" id="fc-add-btn">
          <span class="fab-icon">➕</span>
        </button>

        <div id="fc-modal" class="modal-overlay">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-title">新しいフレーズを追加</div>
            <div class="form-group mt-md">
              <label class="form-label">フレーズ（現地語）</label>
              <input type="text" id="fc-new-phrase" placeholder="例: 안녕하세요">
            </div>
            <div class="form-group">
              <label class="form-label">読み方（カタカナ）</label>
              <input type="text" id="fc-new-reading" placeholder="例: アンニョンハセヨ">
            </div>
            <div class="form-group">
              <label class="form-label">翻訳（母国語）</label>
              <input type="text" id="fc-new-translation" placeholder="例: こんにちは">
            </div>
            <button id="fc-modal-save" class="btn btn-primary w-full mt-lg">保存する</button>
          </div>
        </div>
      </div>
    `;
  },

  init() {
    const store = getState();
    const trip = store.currentTrip;
    
    // Determine languages based on trip destinations
    let langs = ['en'];
    if (trip && trip.destinations) {
      const tripLangs = trip.destinations.map(d => COUNTRY_TO_LANGUAGE[d.country] || COUNTRY_TO_LANGUAGE['US']).filter(Boolean);
      if (tripLangs.length > 0) langs = [...new Set(tripLangs)];
    }
    state.activeLang = langs[0] || 'en';
    
    // Target Langs
    const targetLangsContainer = document.getElementById('fc-target-langs');
    if (langs.length > 1) {
      targetLangsContainer.innerHTML = langs.map(lang => 
        `<button class="flag-btn ${lang === state.activeLang ? 'active' : ''}" data-lang="${lang}">
          ${COUNTRY_FLAGS[lang.toUpperCase()] || '🏳️'}
        </button>`
      ).join('');
    } else {
      targetLangsContainer.style.display = 'none';
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
        document.getElementById('fc-front-reading').textContent = '';
        document.getElementById('fc-back-text').textContent = '右下の＋から追加！';
        document.getElementById('fc-counter').textContent = '0 / 0';
        fcCard.classList.remove('flipped');
        return;
      }
      
      document.getElementById('fc-front-text').textContent = card.phrase || '';
      document.getElementById('fc-front-reading').textContent = card.reading || '';
      // custom translations format vs predefined
      document.getElementById('fc-back-text').textContent = card[state.activeUserLang] || (card.translations && card.translations[state.activeUserLang]) || card.jp || '';
      
      document.getElementById('fc-counter').textContent = `${state.currentCardIndex + 1} / ${state.flashcards.length}`;
      fcCard.classList.remove('flipped');
      
      const favs = JSON.parse(localStorage.getItem('tabi_shiori_fav_cards') || '[]');
      const isFav = favs.includes(card.id || card.phrase);
      document.getElementById('fc-fav-btn').textContent = isFav ? '🌟' : '⭐';
      document.getElementById('fc-fav-btn').classList.toggle('active', isFav);
    };

    if (trip) {
      getFlashcards(store.user.uid, trip.id).then(custom => {
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
    
    document.querySelectorAll('.user-lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.user-lang-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        state.activeUserLang = e.target.dataset.lang;
        updateCardUI();
      });
    });
    
    document.querySelectorAll('.flag-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.flag-btn').forEach(b => b.classList.remove('active'));
        const target = e.target.closest('.flag-btn');
        target.classList.add('active');
        state.activeLang = target.dataset.lang;
        updateDeck();
      });
    });
    
    document.getElementById('fc-categories')?.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab');
      if (tab) {
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
      const key = card.id || card.phrase;
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
    document.getElementById('fc-add-btn')?.addEventListener('click', () => modal.classList.add('active'));
    modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
    
    document.getElementById('fc-modal-save')?.addEventListener('click', async () => {
      const phrase = document.getElementById('fc-new-phrase').value;
      const reading = document.getElementById('fc-new-reading').value;
      const translation = document.getElementById('fc-new-translation').value;
      
      if(!phrase || !translation) return;
      
      if(trip && store.user) {
        const newCard = {
          phrase,
          reading,
          translations: { [state.activeUserLang]: translation },
          category: state.activeCategory,
          lang: state.activeLang
        };
        await addFlashcard(store.user.uid, trip.id, newCard);
        state.customCards.push(newCard);
        updateDeck();
        modal.classList.remove('active');
        document.getElementById('fc-new-phrase').value = '';
        document.getElementById('fc-new-reading').value = '';
        document.getElementById('fc-new-translation').value = '';
      }
    });
  }
};
