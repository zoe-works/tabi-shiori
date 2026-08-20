import { navigate } from '../utils/router.js';
import { verifySharePassword } from '../utils/db.js';
import { getUserId } from '../utils/db.js';
import { db } from '../firebase.js';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { t } from '../utils/i18n.js';

export default {
  async render() {
    return `
      <div class="page share-page">
        <header class="page-header">
          <button class="btn-back" id="share-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h2>${t('joinTrip') || '旅行に参加'}</h2>
        </header>

        <div class="form-container">
          <div class="card p-lg">
            <p class="text-sm mb-lg" style="color: var(--color-text-light);">
              ${t('enterSharePasswordHelp') || '共有パスワードを入力して、旅行予定に参加してください。'}
            </p>
            
            <form id="share-form">
              <div class="form-group">
                <label class="form-label">${t('sharePassword') || 'パスワード'}</label>
                <input type="password" id="share-pw" class="form-input" required />
              </div>
              
              <div id="share-error" class="text-sm mb-sm" style="color: var(--color-pink); display: none;"></div>
              
              <button type="submit" class="btn btn-primary w-full mt-lg">
                ${t('joinTripBtn') || '参加する'}
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
  },
  
  init() {
    const backBtn = document.getElementById('share-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => navigate('/'));
    }

    const form = document.getElementById('share-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const pw = document.getElementById('share-pw').value;
        const errEl = document.getElementById('share-error');
        
        // Extract shareId from URL
        const hash = window.location.hash;
        const match = hash.match(/\?id=([^&]+)/);
        let shareId = '';
        if (match) {
          shareId = match[1];
        } else {
          // If no query string, maybe it's in the path like /#/share/XYZ (though navigate strips it)
          const parts = hash.split('/');
          if (parts.length > 2) shareId = parts[2];
        }

        if (!shareId) {
          errEl.textContent = 'Invalid Share URL';
          errEl.style.display = 'block';
          return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        errEl.style.display = 'none';

        try {
          const tripInfo = await verifySharePassword(shareId, pw);
          if (!tripInfo) {
            errEl.textContent = t('invalidPassword') || 'パスワードが間違っています。';
            errEl.style.display = 'block';
            submitBtn.disabled = false;
            return;
          }

          // Join the trip
          const userId = getUserId();
          if (userId) {
            // Check if already joined
            const q = query(collection(db, 'users', userId, 'joinedTrips'), where('tripId', '==', tripInfo.tripId));
            const snap = await getDocs(q);
            if (snap.empty) {
              await addDoc(collection(db, 'users', userId, 'joinedTrips'), {
                ownerId: tripInfo.userId,
                tripId: tripInfo.tripId,
                joinedAt: serverTimestamp()
              });
            }
          }

          navigate('/');
        } catch (error) {
          console.error(error);
          errEl.textContent = 'エラーが発生しました';
          errEl.style.display = 'block';
          submitBtn.disabled = false;
        }
      });
    }
  }
};
