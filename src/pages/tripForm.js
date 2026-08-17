import { getState, setState } from '../utils/store.js';
import { navigate, getCurrentPath } from '../utils/router.js';
import { createTrip, updateTrip, getTrips } from '../utils/db.js';

const EMOJIS = ['🐱','🐶','🐻','🐰','🦁E,'🐼','🐨','🦁E,'🐯','🐵','🐸','🦁E,'🌸','🌻','⭁E,'🌈','❤�E�E,'💎'];

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
<<<<<<< HEAD
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="trip-form-mascot" />
          <h1 class="page-title">${isEdit ? '✏️ 旅行を編集' : '✨ 新しい旅行を作成'}</h1>
=======
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="た�Eくま" class="trip-form-mascot" />
          <h1 class="page-title">${isEdit ? '✏︁E旁E��を編雁E : '✨ 新しい旁E��を作�E'}</h1>
>>>>>>> 13b653023e3840875458148d9393e811f3545363
        </div>

        <form id="trip-form" class="trip-form">
          <div class="form-group">
            <label class="form-label">旁E��タイトル</label>
            <input type="text" id="trip-title" placeholder="侁E はじめての台湾旁E��！E value="${trip.title}" required />
          </div>

          <div class="flex gap-md">
            <div class="form-group" style="flex:1">
              <label class="form-label">出発日</label>
              <input type="date" id="start-date" value="${trip.startDate}" required />
            </div>
            <div class="form-group" style="flex:1">
              <label class="form-label">帰国日</label>
              <input type="date" id="end-date" value="${trip.endDate}" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">✈︁E行き允E/label>
            <div class="destination-list" id="destinations-container">
              ${trip.destinations.map(d => `
                <div class="destination-row">
                  <input type="text" class="dest-country" placeholder="国名（侁E タイ�E�E value="${d.country}" required />
                  <input type="text" class="dest-city" placeholder="都市名�E�侁E バンコク�E�E value="${d.city || ''}" />
                  <button type="button" class="destination-remove btn-remove-dest">✁E/button>
                </div>
              `).join('')}
            </div>
            <button type="button" id="btn-add-dest" class="destination-add">�E�E行き先を追加</button>
          </div>

          <div class="form-group">
            <label class="form-label">👥 メンバ�E</label>
            <div class="member-list" id="members-container">
              ${trip.members.map(m => `
                <div class="member-row">
                  <button type="button" class="member-icon-selector btn-emoji-select">${m.icon || '🐱'}</button>
                  <input type="text" class="member-name" placeholder="ニックネ�Eム" value="${m.name}" required />
                  <button type="button" class="destination-remove btn-remove-member">✁E/button>
                </div>
              `).join('')}
            </div>
            <button type="button" id="btn-add-member" class="destination-add">�E�Eメンバ�Eを追加</button>
          </div>

          <button type="submit" class="btn btn-primary w-full mt-lg" id="btn-save">
            💾 保存すめE          </button>
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
        <input type="text" class="dest-country" placeholder="国名（侁E タイ�E�E required />
        <input type="text" class="dest-city" placeholder="都市名�E�侁E バンコク�E�E />
        <button type="button" class="destination-remove btn-remove-dest">✁E/button>
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
        <input type="text" class="member-name" placeholder="ニックネ�Eム" required />
        <button type="button" class="destination-remove btn-remove-member">✁E/button>
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

    // Form Submit
    document.getElementById('trip-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const saveBtn = document.getElementById('btn-save');
      saveBtn.textContent = '保存中...';
      saveBtn.disabled = true;

      const title = document.getElementById('trip-title').value;
      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value;

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
        if (isEdit && currentTrip) {
          await updateTrip(user.uid, currentTrip.id, data);
        } else {
          await createTrip(user.uid, data);
        }

        const trips = await getTrips(user.uid);
        setState({ trips });

        const target = isEdit && currentTrip
          ? trips.find(t => t.id === currentTrip.id) || trips[0]
          : trips[0]; // getTrips は createdAt desc なので最新が�E頭

        setState({ currentTrip: target, currentTripId: target?.id });
        if (target) localStorage.setItem('currentTripId', target.id);

        navigate('/');
      } catch (err) {
        console.error('Error saving trip:', err);
        saveBtn.textContent = '❁Eエラー。もぁE��度お試しください';
        saveBtn.disabled = false;
      }
    });
  }
};
