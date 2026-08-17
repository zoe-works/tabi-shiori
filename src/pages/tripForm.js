import { getState, setState } from '../utils/store.js';
import { navigate, getCurrentPath } from '../utils/router.js';
import { createTrip, updateTrip, getTrips } from '../utils/db.js';

const EMOJIS = ['棲','生','製','晴','ｦ・,'西','勢','ｦ・,'星','牲','精','ｦ・,'減','現','箝・,'決','笶､・・,'虫'];

export default {
  render() {
    const isEdit = getCurrentPath() === '/trip/edit';
    const { currentTrip } = getState();
    const trip = isEdit && currentTrip ? currentTrip : {
      title: '',
      startDate: '',
      endDate: '',
      destinations: [{ country: '', city: '' }],
      members: [{ icon: '棲', name: '' }]
    };

    return `
      <div class="page">
        <div class="trip-form-header">
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="縺溘・縺上∪" class="trip-form-mascot" />
          <h1 class="page-title">${isEdit ? '笨擾ｸ・譌・｡後ｒ邱ｨ髮・ : '笨ｨ 譁ｰ縺励＞譌・｡後ｒ菴懈・'}</h1>
        </div>

        <form id="trip-form" class="trip-form">
          <div class="form-group">
            <label class="form-label">譌・｡後ち繧､繝医Ν</label>
            <input type="text" id="trip-title" placeholder="萓・ 縺ｯ縺倥ａ縺ｦ縺ｮ蜿ｰ貉ｾ譌・｡鯉ｼ・ value="${trip.title}" required />
          </div>

          <div class="flex gap-md">
            <div class="form-group" style="flex:1">
              <label class="form-label">蜃ｺ逋ｺ譌･</label>
              <input type="date" id="start-date" value="${trip.startDate}" required />
            </div>
            <div class="form-group" style="flex:1">
              <label class="form-label">蟶ｰ蝗ｽ譌･</label>
              <input type="date" id="end-date" value="${trip.endDate}" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">笨茨ｸ・陦後″蜈・/label>
            <div class="destination-list" id="destinations-container">
              ${trip.destinations.map(d => `
                <div class="destination-row">
                  <input type="text" class="dest-country" placeholder="蝗ｽ蜷搾ｼ井ｾ・ 繧ｿ繧､・・ value="${d.country}" required />
                  <input type="text" class="dest-city" placeholder="驛ｽ蟶ょ錐・井ｾ・ 繝舌Φ繧ｳ繧ｯ・・ value="${d.city || ''}" />
                  <button type="button" class="destination-remove btn-remove-dest">笨・/button>
                </div>
              `).join('')}
            </div>
            <button type="button" id="btn-add-dest" class="destination-add">・・陦後″蜈医ｒ霑ｽ蜉</button>
          </div>

          <div class="form-group">
            <label class="form-label">則 繝｡繝ｳ繝舌・</label>
            <div class="member-list" id="members-container">
              ${trip.members.map(m => `
                <div class="member-row">
                  <button type="button" class="member-icon-selector btn-emoji-select">${m.icon || '棲'}</button>
                  <input type="text" class="member-name" placeholder="繝九ャ繧ｯ繝阪・繝" value="${m.name}" required />
                  <button type="button" class="destination-remove btn-remove-member">笨・/button>
                </div>
              `).join('')}
            </div>
            <button type="button" id="btn-add-member" class="destination-add">・・繝｡繝ｳ繝舌・繧定ｿｽ蜉</button>
          </div>

          <button type="submit" class="btn btn-primary w-full mt-lg" id="btn-save">
            沈 菫晏ｭ倥☆繧・          </button>
        </form>

        <!-- Emoji Picker Modal -->
        <div class="modal-overlay" id="emoji-modal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-title">繧｢繧､繧ｳ繝ｳ繧帝∈縺ｶ</div>
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
        <input type="text" class="dest-country" placeholder="蝗ｽ蜷搾ｼ井ｾ・ 繧ｿ繧､・・ required />
        <input type="text" class="dest-city" placeholder="驛ｽ蟶ょ錐・井ｾ・ 繝舌Φ繧ｳ繧ｯ・・ />
        <button type="button" class="destination-remove btn-remove-dest">笨・/button>
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
        <button type="button" class="member-icon-selector btn-emoji-select">棲</button>
        <input type="text" class="member-name" placeholder="繝九ャ繧ｯ繝阪・繝" required />
        <button type="button" class="destination-remove btn-remove-member">笨・/button>
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
      saveBtn.textContent = '菫晏ｭ倅ｸｭ...';
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
          : trips[0]; // getTrips 縺ｯ createdAt desc 縺ｪ縺ｮ縺ｧ譛譁ｰ縺悟・鬆ｭ

        setState({ currentTrip: target, currentTripId: target?.id });
        if (target) localStorage.setItem('currentTripId', target.id);

        navigate('/');
      } catch (err) {
        console.error('Error saving trip:', err);
        saveBtn.textContent = '笶・繧ｨ繝ｩ繝ｼ縲ゅｂ縺・ｸ蠎ｦ縺願ｩｦ縺励￥縺縺輔＞';
        saveBtn.disabled = false;
      }
    });
  }
};
