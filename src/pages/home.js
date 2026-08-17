import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { loginWithGoogle, linkGoogleAccount } from '../firebase.js';
import { t } from '../utils/i18n.js';

export default {
  render() {
    const { currentTrip } = getState();
    
    if (!currentTrip) {
      return `
        <div class="page">
          <div class="welcome-section">
            <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="welcome-mascot" />
            <h1 class="welcome-title">${t('welcomeTitle')}</h1>
            <p class="welcome-text">${t('welcomeDesc')}</p>
            <button id="btn-create-trip" class="btn btn-primary">${t('btnWelcomeCreate')}</button>
            <button id="btn-welcome-google" class="btn btn-secondary mt-md" style="width:100%; border:1px solid #ccc; background:#fff; color:#333; margin-top:16px;">
              <span style="margin-right:8px">🌐</span>${t('btnWelcomeGoogle')}
            </button>
          </div>
          <div class="text-center" style="margin-top: 40px;">
            <span class="text-xs text-muted">Version 1.0.2</span>
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
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    };

    return `
      <div class="page fade-in">
        <div class="home-cover" style="background-image: url('${currentTrip.coverImage || import.meta.env.BASE_URL + 'images/mascot.jpg'}')">
          <div class="home-cover-overlay"></div>
          <h1 class="home-trip-title">${currentTrip.title || t('untitledTrip')}</h1>
          <p class="home-trip-dates">${formatDate(currentTrip.startDate)} 〜 ${formatDate(currentTrip.endDate)}</p>
        </div>

        <div class="home-content">
          <div class="countdown-card">
            ${countdownText}
          </div>

          <div class="destinations-chips">
            ${(currentTrip.destinations || []).map(d => `
              <span class="chip">📍 ${d.country || ''} ${d.city || ''}</span>
            `).join('')}
          </div>

          <div class="members-section">
            <h3>${t('members')}</h3>
            <div class="members-list">
              ${(currentTrip.members || []).map(m => `
                <div class="member-avatar" title="${m.name}">
                  <span class="member-emoji">${m.icon || '😊'}</span>
                  <span class="member-name">${m.name}</span>
                </div>
              `).join('')}
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
          <span class="text-xs text-muted">Version 1.0.2</span>
        </div>
      </div>
    `;
  },

  init() {
    document.getElementById('btn-create-trip')?.addEventListener('click', () => navigate('/trip/new'));
    document.getElementById('btn-edit-trip')?.addEventListener('click', () => navigate('/trip/edit'));
    
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
