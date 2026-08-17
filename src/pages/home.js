import { getState, setLanguage } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { loginWithGoogle, linkGoogleAccount } from '../firebase.js';
import { t, getLang } from '../utils/i18n.js';
import { translateUserText } from '../utils/translate.js';
import { getLanguageFromCountry, getFlagFromLanguage, POPULAR_COUNTRIES } from '../data/phrases.js';

export default {
  async render() {
    const { currentTrip, trips, user } = getState();
    
    if (!currentTrip) {
      let tripsHtml = '';
      if (trips && trips.length > 0) {
        tripsHtml = `
          <div class="portal-trips" style="margin-top: 32px;">
            <h2 class="text-center mb-md" style="font-size: 1.2rem; color: var(--text-dark);">${t('yourTrips') || 'あなたの旅行'}</h2>
            <div class="trips-list" style="display: flex; flex-direction: column; gap: 12px; padding: 0 16px;">
              ${trips.map(trip => `
                <div class="card portal-trip-card" data-trip-id="${trip.id}" style="cursor: pointer; display: flex; align-items: center; padding: 16px;">
                  <span style="font-size: 24px; margin-right: 12px;">✈️</span>
                  <div style="flex: 1; min-width: 0;">
                    <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-dark); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${trip.title || t('untitledTrip')}</h3>
                    <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--text-muted);">${trip.startDate || ''} ${trip.endDate ? '〜 ' + trip.endDate : ''}</p>
                  </div>
                  <span style="color: var(--color-pink); font-weight: bold;">❯</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div class="page fade-in">
          <div class="welcome-section">
            <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="welcome-mascot" />
            <h1 class="welcome-title">${t('welcomeTitle')}</h1>
            <p class="welcome-text">${t('welcomeDesc')}</p>
            <button id="btn-create-trip" class="btn btn-primary">${t('btnWelcomeCreate')}</button>
            ${(!user || user.isAnonymous) ? `
            <button id="btn-welcome-google" class="btn btn-secondary mt-md" style="width:100%; border:1px solid #ccc; background:#fff; color:#333; margin-top:16px;">
              <span style="margin-right:8px">🌐</span>${t('btnWelcomeGoogle')}
            </button>
            ` : ''}
          </div>
          ${tripsHtml}
          <div class="text-center" style="margin-top: 40px; margin-bottom: 40px;">
            <span class="text-xs text-muted">Version 1.1.0</span>
          </div>
        </div>
      `;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(currentTrip.startDate);
    const end = new Date(currentTrip.endDate);
    
    let countdownText = '';
    if (today < start) {
      const diff = Math.ceil((start - today) / (1000*60*60*24));
      countdownText = `${t('countdownBefore')} <strong>${diff}</strong> ${t('countdownDays')}`;
    } else if (today >= start && today <= end) {
      const diff = Math.ceil((today - start) / (1000*60*60*24)) + 1;
      countdownText = `${t('countdownDuring')} <strong>${diff}</strong> ${t('countdownDuringDays')}`;
    } else {
      countdownText = t('countdownAfter');
    }

    const formatDate = (dateString) => {
      if (!dateString) return '';
      const d = new Date(dateString);
      const lang = getLang();
      if (lang === 'en') {
        return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      } else if (lang === 'th') {
        return d.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
      }
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    };

    const translatedTitle = await translateUserText(currentTrip.title) || t('untitledTrip');
    
    // 行き先のフラグ
    const destPromises = (currentTrip.destinations || []).map(async (d) => {
      const matched = POPULAR_COUNTRIES.find(c => c.code === d.country);
      let flag = '🏳️';
      if (matched) {
        flag = matched.flag;
      } else {
        const langCode = getLanguageFromCountry(d.country);
        flag = getFlagFromLanguage(langCode);
      }
      return `<span style="font-size: 2rem;">${flag}</span>`;
    });
    const destChips = await Promise.all(destPromises);

    // メンバー名の翻訳
    const memberPromises = (currentTrip.members || []).map(async (m) => {
      const name = await translateUserText(m.name) || '';
      return `
        <div class="member-avatar" title="${name}">
          <span class="member-icon">${m.icon || '😊'}</span>
          <span class="member-name">${name}</span>
        </div>
      `;
    });
    const memberHtml = await Promise.all(memberPromises);

    return `
      <div class="page fade-in">
        <div class="home-cover" style="background-image: url('${currentTrip.coverImage || import.meta.env.BASE_URL + 'images/mascot.jpg'}')">
          <div class="home-cover-overlay"></div>
          <h1 class="home-trip-title">${translatedTitle}</h1>
          <p class="home-trip-dates">${formatDate(currentTrip.startDate)} 〜 ${formatDate(currentTrip.endDate)}</p>
        </div>

        <div class="home-content">
          <div class="countdown-card">
            ${countdownText}
          </div>

          <div class="destinations-flags" style="display: flex; justify-content: center; gap: 12px; margin-bottom: 24px;">
            ${destChips.join('')}
          </div>

          <div class="members-section">
            <h3>${t('members')}</h3>
            <div class="members-row">
              ${memberHtml.join('')}
            </div>
          </div>
          
          <div class="features-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
            <div class="feature-card" data-route="/flashcard">
              <span class="feature-icon">🗣️</span>
              <span class="feature-label">${t('flashcardTitle')}</span>
            </div>
            <div class="feature-card" data-route="/checklist">
              <span class="feature-icon">🎒</span>
              <span class="feature-label">${t('checklistTitle')}</span>
            </div>
            <div class="feature-card" data-route="/schedule">
              <span class="feature-icon">📅</span>
              <span class="feature-label">${t('scheduleTitle')}</span>
            </div>
            <div class="feature-card" data-route="/research">
              <span class="feature-icon">🔍</span>
              <span class="feature-label">${t('researchTitle')}</span>
            </div>
            <div class="feature-card" data-route="/budget">
              <span class="feature-icon">💰</span>
              <span class="feature-label">${t('budgetTitle')}</span>
            </div>
            <div class="feature-card" data-route="/omiyage">
              <span class="feature-icon">🎁</span>
              <span class="feature-label">${t('omiyageTitle')}</span>
            </div>
          </div>

        <button id="btn-edit-trip" class="btn btn-secondary btn-small w-full mt-md" style="margin-bottom: 16px;">
          ${t('btnEditTrip')}
        </button>

        <div class="text-center mt-lg" style="margin-bottom: 24px;">
          <span class="text-xs text-muted">Version 1.1.0</span>
        </div>
      </div>
    `;
  },

  init() {
    document.getElementById('btn-create-trip')?.addEventListener('click', () => navigate('/trip/new'));
    document.getElementById('btn-edit-trip')?.addEventListener('click', () => navigate('/trip/edit'));
    
    // Portal trips
    document.querySelectorAll('.portal-trip-card').forEach(card => {
      card.addEventListener('click', () => {
        const tripId = card.getAttribute('data-trip-id');
        const { trips } = getState();
        const trip = trips.find(t => t.id === tripId);
        if (trip) {
          import('../utils/store.js').then(({ setState }) => {
            setState({ currentTripId: tripId, currentTrip: trip });
            localStorage.setItem('currentTripId', tripId);
            navigate('/', true, true);
          });
        }
      });
    });

    document.getElementById('btn-welcome-google')?.addEventListener('click', async () => {
      try {
        const { user } = getState();
        if (user && user.isAnonymous) {
          await linkGoogleAccount();
        } else {
          await loginWithGoogle();
        }
        window.location.reload(); // 再読み込みして状態をリセット
      } catch (e) {
        if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
          alert('ログインに失敗しました: ' + e.message);
        }
      }
    });

    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('click', () => {
        const route = card.getAttribute('data-route');
        if (route) navigate(route);
      });
    });
  }
};
