import { getState, setState } from '../utils/store.js';
import { navigate, getCurrentPath } from '../utils/router.js';
import { createTrip, updateTrip, getTrips } from '../utils/db.js';

const EMOJIS = ['🐱','🐶','🐻','🐰','🦊','🐼','🐨','🦁','🐯','🐵','🐸','🦄','🌸','🌻','⭐','🌈','❤️','💎'];

export default {
  render() {
    const isEdit = getCurrentPath() === '/trip/edit';
    const { currentTrip } = getState();
    const trip = isEdit && currentTrip ? currentTrip : {
      title: '',
      startDate: '',
      endDate: '',
      destinations: [{ country: '', city: '' }],
      members: [{ icon: '🐱', name: '' }]
    };

    return `
      <div class="page">
        <div class="trip-form-header">
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="trip-form-mascot" />
          <h1 class="page-title">${isEdit ? '✏️ 旅行を編集' : '✨ 新しい旅行を作成'}</h1>
        </div>

        <form id="trip-form" class="trip-form">
          <div class="form-group">
            <label class="form-label">旅行タイトル</label>
            <input type="text" id="trip-title" placeholder="例: はじめての台湾旅行！" value="${trip.title}" required />
          </div>

          <div class="flex gap-md" style="flex-wrap: wrap;">
            <div class="form-group" style="flex:1; min-width: 140px;">
              <label class="form-label">出発日</label>
              <input type="date" id="start-date" value="${trip.startDate}" required />
            </div>
            <div class="form-group" style="flex:1; min-width: 140px;">
              <label class="form-label">帰国日</label>
              <input type="date" id="end-date" value="${trip.endDate}" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">✈️ 行き先</label>
            <div class="destination-list" id="destinations-container">
              ${trip.destinations.map(d => `
                <div class="destination-row">
                  <input type="text" class="dest-country" placeholder="国名（例: タイ）" value="${d.country}" required />
                  <input type="text" class="dest-city" placeholder="都市名（例: バンコク）" value="${d.city || ''}" />
                  <button type="button" class="destination-remove btn-remove-dest">✕</button>
                </div>
              `).join('')}
            </div>
            <button type="button" id="btn-add-dest" class="destination-add">＋ 行き先を追加</button>
          </div>

          <div class="form-group">
            <label class="form-label">👥 メンバー</label>
            <div class="member-list" id="members-container">
              ${trip.members.map(m => `
                <div class="member-row">
                  <button type="button" class="member-icon-selector btn-emoji-select">${m.icon || '🐱'}</button>
                  <input type="text" class="member-name" placeholder="ニックネーム" value="${m.name}" required />
                  <button type="button" class="destination-remove btn-remove-member">✕</button>
                </div>
              `).join('')}
            </div>
            <button type="button" id="btn-add-member" class="destination-add">＋ メンバーを追加</button>
          </div>

          <button type="submit" class="btn btn-primary w-full mt-lg" id="btn-save">
            💾 保存する
          </button>
        </form>

        <!-- Emoji Picker Modal -->
        <div class="modal-overlay" id="emoji-modal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-title">アイコンを選ぶ</div>
            <div class="emoji-picker-grid">
              ${EMOJIS.map(e => `<button type="button" class="emoji-option">${e}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  init() {
    const isEdit = getCurrentPath() === '/trip/edit';
    const { currentTrip, user } = getState();

    // Destinations
    const destContainer = document.getElementById('destinations-container');
    document.getElementById('btn-add-dest')?.addEventListener('click', () => {
      const row = document.createElement('div');
      row.className = 'destination-row';
      row.style.animation = 'slideUp 0.3s var(--ease-out)';
      row.innerHTML = `
        <input type="text" class="dest-country" placeholder="国名（例: タイ）" required />
        <input type="text" class="dest-city" placeholder="都市名（例: バンコク）" />
        <button type="button" class="destination-remove btn-remove-dest">✕</button>
      `;
      destContainer.appendChild(row);
    });

    destContainer?.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-remove-dest')) {
        const rows = destContainer.querySelectorAll('.destination-row');
        if (rows.length > 1) e.target.closest('.destination-row').remove();
      }
    });

    // Members
    const membersContainer = document.getElementById('members-container');
    document.getElementById('btn-add-member')?.addEventListener('click', () => {
      const row = document.createElement('div');
      row.className = 'member-row';
      row.style.animation = 'slideUp 0.3s var(--ease-out)';
      row.innerHTML = `
        <button type="button" class="member-icon-selector btn-emoji-select">🐱</button>
        <input type="text" class="member-name" placeholder="ニックネーム" required />
        <button type="button" class="destination-remove btn-remove-member">✕</button>
      `;
      membersContainer.appendChild(row);
    });

    membersContainer?.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-remove-member')) {
        const rows = membersContainer.querySelectorAll('.member-row');
        if (rows.length > 1) e.target.closest('.member-row').remove();
      }
    });

    // Emoji Picker
    const emojiModal = document.getElementById('emoji-modal');
    let currentEmojiBtn = null;

    membersContainer?.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-emoji-select')) {
        currentEmojiBtn = e.target;
        emojiModal.classList.add('active');
      }
    });

    emojiModal?.addEventListener('click', (e) => {
      if (e.target === emojiModal) emojiModal.classList.remove('active');
    });

    document.querySelectorAll('.emoji-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (currentEmojiBtn) currentEmojiBtn.textContent = btn.textContent;
        emojiModal.classList.remove('active');
      });
    });

    // Date Auto-Focus
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    if (startDateInput && endDateInput) {
      startDateInput.addEventListener('change', () => {
        if (!endDateInput.value) {
          endDateInput.focus();
          try { if (typeof endDateInput.showPicker === 'function') endDateInput.showPicker(); } catch(e) {}
        }
      });
    }

    // Form Submit
    document.getElementById('trip-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const saveBtn = document.getElementById('btn-save');
      saveBtn.textContent = '保存中...';
      saveBtn.disabled = true;

      const title = document.getElementById('trip-title').value;
      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value;

      const currentUser = getState().user;
      if (!currentUser || !currentUser.uid) {
        alert('ユーザー情報の読み込みに失敗しました。少し待ってから再度保存してください。');
        saveBtn.textContent = '❌ エラー';
        saveBtn.disabled = false;
        return;
      }

      const destinations = Array.from(destContainer.querySelectorAll('.destination-row')).map(row => ({
        country: row.querySelector('.dest-country').value,
        city: row.querySelector('.dest-city').value
      }));

      const members = Array.from(membersContainer.querySelectorAll('.member-row')).map(row => ({
        icon: row.querySelector('.btn-emoji-select').textContent,
        name: row.querySelector('.member-name').value
      }));

      const data = { title, startDate, endDate, destinations, members };

      try {
        // 安全装置: 10秒経っても画面遷移しない場合は強制的にトップへ戻る（オフライン時の待ちハング対策）
        const fallbackTimer = setTimeout(() => {
          if (document.getElementById('btn-save')?.disabled) {
            navigate('/');
          }
        }, 10000);

        if (isEdit && currentTrip) {
          await updateTrip(currentUser.uid, currentTrip.id, data);
        } else {
          await createTrip(currentUser.uid, data);
        }

        const trips = await getTrips(currentUser.uid);
        setState({ trips });

        const target = isEdit && currentTrip
          ? trips.find(t => t.id === currentTrip.id) || trips[0]
          : trips[0]; // getTrips は createdAt desc なので最新が先頭

        setState({ currentTrip: target, currentTripId: target?.id });
        if (target) localStorage.setItem('currentTripId', target.id);

        clearTimeout(fallbackTimer);
        navigate('/');
      } catch (err) {
        console.error('Error saving trip:', err);
        saveBtn.textContent = '❌ エラー。もう一度お試しください';
        saveBtn.disabled = false;
      }
    });
  }
};
