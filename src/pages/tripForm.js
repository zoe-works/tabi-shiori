import { getState, setState } from '../utils/store.js';
import { navigate, getCurrentPath } from '../utils/router.js';
import { t, getLang } from '../utils/i18n.js';
import { createTrip, updateTrip, getTrips, deleteTrip } from '../utils/db.js';
import { POPULAR_COUNTRIES } from '../data/phrases.js';

const EMOJIS = ['🐱','🐶','🐻','🐰','🦊','🐼','🐨','🦁','🐯','🐵','🐸','🦄','🌸','🌻','⭐','🌈','❤️','💎'];

function generateDestRow(d = {}, placeholders = {}) {
  const countryValue = d.country || '';
  let isOther = countryValue !== '' && !POPULAR_COUNTRIES.some(c => c.code === countryValue || Object.values(c.name).includes(countryValue));
  let selectedCode = isOther ? 'OTHER' : countryValue;
  
  const currentLang = typeof getLang === 'function' ? getLang() : (getState().language || 'ja');
  
  if (!isOther && countryValue) {
    const matched = POPULAR_COUNTRIES.find(c => 
      c.code === countryValue || 
      Object.values(c.name).includes(countryValue)
    );
    if (matched) selectedCode = matched.code;
  }
  
  const optionsHtml = POPULAR_COUNTRIES.map(c => {
    const displayName = c.name[currentLang] || c.name.ja;
    return `<option value="${c.code}" ${c.code === selectedCode ? 'selected' : ''}>${c.flag} ${displayName}</option>`;
  }).join('');

  return `
    <div class="form-row destination-item mb-sm" style="display: flex; align-items: center; gap: 4px; flex-wrap: nowrap;">
      <select class="form-input flex-1 dest-country-select" style="min-width: 0; padding: 12px 4px; margin-bottom: 0;">
        <option value="" disabled ${!selectedCode ? 'selected' : ''}>${placeholders.country || '国を選択'}</option>
        ${optionsHtml}
      </select>
      <input type="text" class="form-input flex-1 dest-country-other" placeholder="${t('countryPlaceholder') || '国名を入力'}" value="${isOther ? countryValue : ''}" style="min-width: 0; padding: 12px 4px; margin-bottom: 0; ${isOther ? '' : 'display:none;'}" />
      <input type="text" class="form-input flex-1 dest-city" placeholder="${placeholders.city || '都市'}" value="${d.city || ''}" style="min-width: 0; padding: 12px 4px; margin-bottom: 0;" />
      <button type="button" class="btn-icon btn-remove" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
    </div>
  `;
}

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
      <div class="page fade-in">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-form-back">←</button>
          <h1 class="page-title">${isEdit ? t('tripFormEditTitle') : t('tripFormNewTitle')}</h1>
        </header>

        <div class="form-content fade-in" style="animation-delay: 0.1s;">
          <div class="card mb-md">
            <input type="text" id="trip-title" class="form-input text-lg fw-bold" placeholder="${t('tripTitlePlaceholder')}" value="${trip.title}" />
          </div>

          <div class="card mb-md">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div class="form-group" style="min-width: 0;">
                <label class="form-label">${t('startDate')}</label>
                <input type="date" id="trip-start" class="form-input" value="${trip.startDate}" style="width: 100%; box-sizing: border-box;" />
              </div>
              <div class="form-group" style="min-width: 0;">
                <label class="form-label">${t('endDate')}</label>
                <input type="date" id="trip-end" class="form-input" value="${trip.endDate}" style="width: 100%; box-sizing: border-box;" />
              </div>
            </div>
          </div>

          <div class="card mb-md" id="destinations-container">
            <label class="form-label">${t('destinations')}</label>
            <div id="destinations-list">
              ${trip.destinations.map(d => generateDestRow(d, { country: t('countryPlaceholder'), city: t('cityPlaceholder') })).join('')}
            </div>
            <button class="btn btn-secondary btn-small w-full mt-sm" id="btn-add-dest">${t('addDestination')}</button>
          </div>

          <div class="card mb-md" id="members-container">
            <label class="form-label">${t('membersLabel')}</label>
            <div id="members-list">
              ${trip.members.map((m, i) => `
                <div class="form-row member-item mb-sm" style="display: flex; align-items: center; gap: 4px; flex-wrap: nowrap;">
                  <button class="btn-emoji-picker" data-index="${i}" style="flex-shrink: 0; padding: 8px 12px;">${m.icon || '😊'}</button>
                  <input type="text" class="form-input flex-1 member-name" placeholder="${t('memberNamePlaceholder')}" value="${m.name || ''}" style="min-width: 0; margin-bottom: 0; padding: 12px 4px;" />
                  <button class="btn-icon btn-remove-member" data-index="${i}" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
                </div>
              `).join('')}
            </div>
            <button class="btn btn-secondary btn-small w-full mt-sm" id="btn-add-member">${t('addMember')}</button>
          </div>
        </div>

        <div class="bottom-actions">
          <button class="btn btn-primary w-full text-lg mb-sm" id="btn-save-trip">${t('btnSave')}</button>
          ${isEdit ? `<button class="btn btn-secondary w-full" id="btn-delete-trip" style="color: var(--error);">🗑️ ${t('deleteTrip') || 'この旅行を削除'}</button>` : ''}
        </div>

        <!-- Emoji Picker Modal -->
        <div class="modal-overlay" id="emoji-modal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-title">${t('chooseIcon') || 'アイコンを選ぶ'}</div>
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
    const { currentTrip } = getState();

    // Destinations
    const destList = document.getElementById('destinations-list');
    document.getElementById('btn-add-dest')?.addEventListener('click', () => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = generateDestRow({}, { country: t('countryPlaceholder'), city: t('cityPlaceholder') });
      destList.appendChild(wrapper.firstElementChild);
    });

    destList?.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-remove')) {
        const rows = destList.querySelectorAll('.destination-item');
        if (rows.length > 1) e.target.closest('.destination-item').remove();
      }
    });

    destList?.addEventListener('change', (e) => {
      if (e.target.classList.contains('dest-country-select')) {
        const item = e.target.closest('.destination-item');
        const otherInput = item.querySelector('.dest-country-other');
        if (e.target.value === 'OTHER') {
          otherInput.style.display = 'block';
          otherInput.focus();
        } else {
          otherInput.style.display = 'none';
          otherInput.value = '';
        }
      }
    });

    // Members
    const membersList = document.getElementById('members-list');
    document.getElementById('btn-add-member')?.addEventListener('click', () => {
      const row = document.createElement('div');
      row.className = 'form-row member-item mb-sm';
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '4px';
      row.style.flexWrap = 'nowrap';
      row.innerHTML = `
        <button class="btn-emoji-picker" style="flex-shrink: 0; padding: 8px 12px;">😊</button>
        <input type="text" class="form-input flex-1 member-name" placeholder="${t('memberNamePlaceholder')}" style="min-width: 0; margin-bottom: 0; padding: 12px 4px;" />
        <button class="btn-icon btn-remove-member" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
      `;
      membersList.appendChild(row);
    });

    membersList?.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-remove-member')) {
        const rows = membersList.querySelectorAll('.member-item');
        if (rows.length > 1) e.target.closest('.member-item').remove();
      }
    });

    // Emoji Picker
    const emojiModal = document.getElementById('emoji-modal');
    let currentEmojiBtn = null;

    membersList?.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-emoji-picker')) {
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

    document.getElementById('btn-form-back')?.addEventListener('click', () => navigate('/'));

    // Form Submit
    document.getElementById('btn-save-trip')?.addEventListener('click', async (e) => {
      const btn = e.target;
      btn.disabled = true;
      btn.textContent = t('btnSaving');
      
      const title = document.getElementById('trip-title').value;
      const startDate = document.getElementById('trip-start').value;
      const endDate = document.getElementById('trip-end').value;

      const { user: currentUser } = getState();
      if (!currentUser || !currentUser.uid) {
        alert(t('authError'));
        btn.disabled = false;
        btn.textContent = t('btnSave');
        return;
      }

      const destinations = Array.from(destList.querySelectorAll('.destination-item')).map(row => {
        const select = row.querySelector('.dest-country-select');
        const other = row.querySelector('.dest-country-other');
        const country = select.value === 'OTHER' ? other.value : select.value;
        return {
          country: country,
          city: row.querySelector('.dest-city').value
        };
      });

      const members = Array.from(membersList.querySelectorAll('.member-item')).map(row => ({
        icon: row.querySelector('.btn-emoji-picker').textContent,
        name: row.querySelector('.member-name').value
      }));

      const data = { title, startDate, endDate, destinations, members };

      try {
        // 安全装置: 10秒経っても画面遷移しない場合は強制的にトップへ戻る（オフライン時の待ちハング対策）
        const fallbackTimer = setTimeout(() => {
          if (document.getElementById('btn-save-trip')?.disabled) {
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
        btn.textContent = t('errorTryAgain') || '❌ エラー。もう一度お試しください';
        btn.disabled = false;
      }
    });

    if (isEdit) {
      document.getElementById('btn-delete-trip')?.addEventListener('click', async () => {
        if (confirm(t('confirmDeleteTrip') || '本当にこの旅行を削除しますか？\n削除すると、すべてのデータ（単語帳、チェックリストなど）が消去され元に戻せません。')) {
          const { user: currentUser } = getState();
          try {
            await deleteTrip(currentUser.uid, currentTrip.id);
            const trips = await getTrips(currentUser.uid);
            setState({ trips, currentTrip: trips[0] || null, currentTripId: trips[0]?.id || null });
            if (trips.length > 0) {
              localStorage.setItem('currentTripId', trips[0].id);
            } else {
              localStorage.removeItem('currentTripId');
            }
            navigate('/');
          } catch (err) {
            console.error('Error deleting trip:', err);
            alert(t('deleteFailed') || '削除に失敗しました。');
          }
        }
      });
    }
  }
};
