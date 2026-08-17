import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getSchedules, addScheduleItem, updateScheduleItem, deleteScheduleItem } from '../utils/db.js';
import { uploadPhoto, compressImage } from '../utils/storage.js';
import { t } from '../utils/i18n.js';
import { translateUserText } from '../utils/translate.js';

let currentDay = 1;
let currentMode = 'plan'; // 'plan' or 'journal'
let schedules = [];

const categories = {
  sightseeing: { icon: '🏛️', label: t('catSightseeing') || '観光' },
  meal: { icon: '🍽️', label: t('catMeal') || '食事' },
  transport: { icon: '🚌', label: t('catTransport') || '移動' },
  hotel: { icon: '🏨', label: t('catHotel') || 'ホテル' },
  shopping: { icon: '🛒', label: t('catShopping') || '買い物' },
  activity: { icon: '🎭', label: t('catActivity') || '体験' },
  other: { icon: '✨', label: t('catOther') || 'その他' }
};

export default {
  render() {
    return `
      <div class="page schedule-page">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-back-schedule">←</button>
          <h2>${t('scheduleTitle')}</h2>
        </header>

        <div class="mode-toggle">
          <button class="mode-btn ${currentMode === 'plan' ? 'active' : ''}" data-mode="plan">${t('planMode')}</button>
          <button class="mode-btn ${currentMode === 'journal' ? 'active' : ''}" data-mode="journal">${t('journalMode')}</button>
        </div>

        <div class="day-tabs" id="dayTabs">
          <!-- タブがここに生成されます -->
        </div>

        <div class="timeline" id="timelineContainer">
          <!-- タイムラインがここに生成されます -->
        </div>

        <button class="fab" id="addScheduleBtn">+</button>

        <!-- 予定追加モーダル -->
        <div class="modal-overlay" id="scheduleModal">
          <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${t('addScheduleModalTitle')}</h3>
            <form id="scheduleForm">
              <div class="form-group mb-sm">
                <label class="form-label" style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${t('timeLabel') || '時間'}</label>
                <input type="time" id="itemTime" class="form-input" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd;" required>
              </div>
              <input type="text" id="itemTitle" class="form-input" placeholder="${t('itemTitlePlaceholder')}" required style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
              <select id="itemCategory" class="form-input" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
                ${Object.entries(categories).map(([key, val]) => `<option value="${key}">${val.icon} ${val.label}</option>`).join('')}
              </select>
              <input type="text" id="itemTransport" class="form-input" placeholder="${t('itemTransportPlaceholder')}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
              <textarea id="itemMemo" class="form-input" placeholder="${t('itemMemoPlaceholder')}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px; min-height:80px;"></textarea>
              <button type="submit" class="btn primary w-full">${t('btnAdd')}</button>
            </form>
          </div>
        </div>

        <!-- ジャーナル記録モーダル -->
        <div class="modal-overlay" id="journalModal">
          <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${t('addJournalModalTitle')}</h3>
            <form id="journalForm">
              <input type="hidden" id="journalItemId">
              
              <div class="mood-selector mb-sm">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${t('journalMood')}</label>
                <div class="mood-options">
                  ${['😆','😊','😴','🤩','😢','🤔'].map(m => `<span class="mood-option" data-mood="${m}">${m}</span>`).join('')}
                </div>
                <input type="hidden" id="journalMood">
              </div>

              <div class="star-rating mb-sm">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${t('journalRating')}</label>
                <div class="stars">
                  ${[1,2,3,4,5].map(s => `<span class="star" data-rating="${s}">★</span>`).join('')}
                </div>
                <input type="hidden" id="journalRating" value="0">
              </div>

              <textarea id="journalText" class="form-input" placeholder="${t('journalTextPlaceholder')}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px; min-height:100px;"></textarea>
              
              <div class="photo-upload mb-md">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${t('journalAddPhoto')}</label>
                <input type="file" id="journalPhotos" accept="image/*" capture="environment" multiple>
              </div>

              <button type="submit" class="btn primary w-full">${t('btnSave')}</button>
            </form>
          </div>
        </div>
      </div>
    `;
  },
  
  async init() {
    document.getElementById('btn-back-schedule')?.addEventListener('click', () => navigate('/'));

    const state = getState();
    const trip = state.currentTrip;
    
    if (!trip) {
      alert(t('noTripSelected') || '旅行が選択されていません。');
      navigate('/');
      return;
    }

    // 日数計算とタブ生成
    const start = new Date(trip.startDate);
    const end = new Date(trip.endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    
    const dayTabs = document.getElementById('dayTabs');
    let tabsHtml = '';
    for (let i = 1; i <= days; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + (i - 1));
      const dateStr = `${d.getMonth()+1}/${d.getDate()}`;
      tabsHtml += `<button class="day-tab ${i === currentDay ? 'active' : ''}" data-day="${i}">Day ${i} (${dateStr})</button>`;
    }
    dayTabs.innerHTML = tabsHtml;

    // イベントリスナー設定
    dayTabs.querySelectorAll('.day-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentDay = parseInt(e.target.dataset.day);
        this.loadSchedules(trip.id);
      });
    });

    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentMode = e.target.dataset.mode;
        this.renderTimeline();
      });
    });

    // モーダル処理
    const scheduleModal = document.getElementById('scheduleModal');
    const journalModal = document.getElementById('journalModal');
    
    document.getElementById('addScheduleBtn').addEventListener('click', () => {
      scheduleModal.classList.add('active');
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        scheduleModal.classList.remove('active');
        journalModal.classList.remove('active');
      });
    });

    document.getElementById('scheduleForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const newItem = {
        tripId: trip.id,
        day: currentDay,
        time: document.getElementById('itemTime').value,
        title: document.getElementById('itemTitle').value,
        category: document.getElementById('itemCategory').value,
        transport: document.getElementById('itemTransport').value,
        memo: document.getElementById('itemMemo').value,
        order: schedules.length
      };
      
      await addScheduleItem(trip.id, newItem);
      scheduleModal.classList.remove('active');
      e.target.reset();
      this.loadSchedules(trip.id);
    });
    
    // 気分スタンプと星評価のUI
    document.querySelectorAll('.mood-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        document.querySelectorAll('.mood-option').forEach(o => o.classList.remove('selected'));
        e.target.classList.add('selected');
        document.getElementById('journalMood').value = e.target.dataset.mood;
      });
    });

    document.querySelectorAll('.star').forEach(star => {
      star.addEventListener('click', (e) => {
        const rating = parseInt(e.target.dataset.rating);
        document.getElementById('journalRating').value = rating;
        document.querySelectorAll('.star').forEach(s => {
          s.style.color = parseInt(s.dataset.rating) <= rating ? 'gold' : '#ccc';
        });
      });
    });

    document.getElementById('journalForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const itemId = document.getElementById('journalItemId').value;
      const mood = document.getElementById('journalMood').value;
      const rating = document.getElementById('journalRating').value;
      const text = document.getElementById('journalText').value;
      const photosInput = document.getElementById('journalPhotos');
      
      const item = schedules.find(s => s.id === itemId);
      let photos = item.journalPhotos || [];
      
      if (photosInput.files.length > 0) {
        for (let file of photosInput.files) {
           const compressed = await compressImage(file);
           const url = await uploadPhoto(compressed, `journal/${trip.id}/${itemId}/${Date.now()}`);
           photos.push(url);
        }
      }
      
      await updateScheduleItem(itemId, {
        journalText: text,
        journalMood: mood,
        journalRating: parseInt(rating),
        journalPhotos: photos
      });
      
      journalModal.classList.remove('show');
      this.loadSchedules(trip.id);
    });

    // 初回ロード
    this.loadSchedules(trip.id);
  },

  async loadSchedules(tripId) {
    const allSchedules = await getSchedules(tripId);
    schedules = allSchedules.filter(s => s.day === currentDay);
    schedules.sort((a, b) => a.time.localeCompare(b.time));
    await this.renderTimeline();
  },

  async renderTimeline() {
    const container = document.getElementById('timelineContainer');
    
    if (schedules.length === 0) {
      container.innerHTML = `<p class="empty-state">${currentMode === 'plan' ? (t('noScheduleHelp') || '予定がありません。追加してみましょう！') : (t('noJournalHelp') || '記録がありません。思い出を追加しよう！')}</p>`;
      return;
    }

    const itemsHtmlPromises = schedules.map(async item => {
      const cat = categories[item.category] || categories.other;
      const translatedTitle = await translateUserText(item.title) || item.title;
      const translatedMemo = item.memo ? (await translateUserText(item.memo) || item.memo) : '';
      let journalHtml = '';
      
      if (currentMode === 'journal') {
        const hasJournal = item.journalText || item.journalMood || (item.journalPhotos && item.journalPhotos.length > 0);
        
        if (hasJournal) {
          const photos = item.journalPhotos ? item.journalPhotos.map(url => `<img src="${url}" class="journal-photo">`).join('') : '';
          const stars = '★'.repeat(item.journalRating || 0) + '☆'.repeat(5 - (item.journalRating || 0));
          journalHtml = `
            <div class="journal-entry">
              ${item.journalMood ? `<span class="journal-mood">${item.journalMood}</span>` : ''}
              ${item.journalRating ? `<span class="journal-rating">${stars}</span>` : ''}
              ${item.journalText ? `<p class="journal-text">${item.journalText}</p>` : ''}
              ${photos ? `<div class="journal-photos">${photos}</div>` : ''}
              <button class="btn small edit-journal-btn" data-id="${item.id}">編集</button>
            </div>
          `;
        } else {
          journalHtml = `<button class="btn small journal-add-btn" data-id="${item.id}">記録を追加</button>`;
        }
      }

      return `
        <div class="timeline-item" data-id="${item.id}" style="position: relative; overflow: hidden; margin-bottom: 24px;">
          <!-- Delete Background -->
          <div class="swipe-delete-bg" style="position: absolute; top: 0; left: 0; bottom: 0; width: 100%; background: #ff3b30; color: white; display: flex; align-items: center; padding-left: 20px; font-weight: bold; z-index: 1; border-radius: 8px;">
            🗑️ 削除
          </div>
          <!-- Foreground Content -->
          <div class="timeline-content-wrapper" style="position: relative; z-index: 2; background: var(--color-background); display: flex; width: 100%; transition: transform 0.2s ease-out; gap: 16px;">
            <div class="timeline-time">${item.time}</div>
            <div class="timeline-dot" data-category="${item.category}">${cat.icon}</div>
            <div class="timeline-card" style="flex: 1; margin: 0;">
              <h4>${translatedTitle}</h4>
              ${item.transport ? `<p class="transport">🚌 ${item.transport}</p>` : ''}
              ${translatedMemo ? `<p class="memo">${translatedMemo}</p>` : ''}
              ${journalHtml}
            </div>
          </div>
        </div>
      `;
    });

    const itemsHtml = await Promise.all(itemsHtmlPromises);
    container.innerHTML = itemsHtml.join('');

    // Swipe to delete logic
    const store = getState();
    const trip = store.currentTrip;
    
    container.querySelectorAll('.timeline-item').forEach(itemEl => {
      const wrapper = itemEl.querySelector('.timeline-content-wrapper');
      const itemId = itemEl.dataset.id;
      let startX = 0;
      let currentX = 0;
      
      wrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        wrapper.style.transition = 'none';
      }, {passive: true});
      
      wrapper.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX - startX;
        // Only allow swiping right
        if (currentX > 0) {
          wrapper.style.transform = `translateX(${currentX}px)`;
        }
      }, {passive: true});
      
      wrapper.addEventListener('touchend', async (e) => {
        wrapper.style.transition = 'transform 0.2s ease-out';
        if (currentX > 100) { // Threshold to delete
          wrapper.style.transform = `translateX(100vw)`;
          if (confirm(t('confirmDelete') || '本当に削除しますか？')) {
            await deleteScheduleItem(trip.id, itemId);
            this.loadSchedules(trip.id);
          } else {
            wrapper.style.transform = `translateX(0)`;
          }
        } else {
          wrapper.style.transform = `translateX(0)`;
        }
        currentX = 0;
      });
    });

    if (currentMode === 'journal') {
      container.querySelectorAll('.journal-add-btn, .edit-journal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.target.dataset.id;
          const item = schedules.find(s => s.id === id);
          document.getElementById('journalItemId').value = id;
          document.getElementById('journalText').value = item.journalText || '';
          document.getElementById('journalMood').value = item.journalMood || '';
          document.getElementById('journalRating').value = item.journalRating || 0;
          
          // UI reset
          document.querySelectorAll('.mood-option').forEach(o => {
            o.classList.toggle('selected', o.dataset.mood === item.journalMood);
          });
          document.querySelectorAll('.star').forEach(s => {
            s.style.color = parseInt(s.dataset.rating) <= (item.journalRating || 0) ? 'gold' : '#ccc';
          });
          
          document.getElementById('journalModal').classList.add('active');
        });
      });
    }
  }
};
