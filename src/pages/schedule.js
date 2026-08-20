import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getSchedules, addScheduleItem, updateScheduleItem, deleteScheduleItem } from '../utils/db.js';
import { compressImageAsBase64 } from '../utils/storage.js';
import { t } from '../utils/i18n.js';
import { translateUserText } from '../utils/translate.js';

let currentDay = 1;
let currentMode = 'plan'; // 'plan' or 'journal'
let schedules = [];

const getCategories = () => ({
  sightseeing: { icon: '🏛️', label: t('catSightseeing') || '観光' },
  meal: { icon: '🍽️', label: t('catMeal') || '食事' },
  transport: { icon: '🚌', label: t('catTransport') || '移動' },
  flight: { icon: '✈️', label: t('catFlight') || 'フライト' },
  hotel: { icon: '🏨', label: t('catHotelSch') || 'ホテル' },
  shopping: { icon: '🛒', label: t('catShopping') || '買い物' },
  activity: { icon: '🎭', label: t('catActivity') || '体験' },
  other: { icon: '✨', label: t('catOther') || 'その他' }
});

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
            <div class="modal-handle"></div>
            <span class="close-modal">&times;</span>
            <h3>${t('addScheduleModalTitle')}</h3>
            <form id="scheduleForm">
              <input type="hidden" id="scheduleItemId">
              <div class="form-group mb-sm" style="position:relative;">
                <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--text-muted); pointer-events:none;">${t('timeLabel') || '時間'}</span>
                <input type="time" id="itemTime" class="form-input" style="width:100%; padding:12px 12px 12px 60px; border-radius:8px; border:1px solid #ddd;" required>
              </div>
              <input type="text" id="itemTitle" class="form-input" placeholder="${t('itemTitlePlaceholder')}" required style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
              <select id="itemCategory" class="form-input" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
                ${Object.entries(getCategories()).map(([key, val]) => `<option value="${key}">${val.icon} ${val.label}</option>`).join('')}
              </select>
              <input type="text" id="itemTransport" class="form-input" placeholder="${t('itemTransportPlaceholder')}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
              <textarea id="itemMemo" class="form-input" placeholder="${t('itemMemoPlaceholder')}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px; min-height:80px;"></textarea>
              <button type="submit" class="btn btn-primary w-full mt-lg">${t('btnAdd')}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="schedule-cancel">${t('cancelBtn') || 'キャンセル'}</button>
            </form>
          </div>
        </div>

        <!-- ジャーナル記録モーダル -->
        <div class="modal-overlay" id="journalModal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <span class="close-modal">&times;</span>
            <h3>${t('addJournalModalTitle')}</h3>
            <form id="journalForm">
              <input type="hidden" id="journalItemId">

              <div class="mb-sm">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${t('journalRating')}</label>
                <div class="stars">
                  ${[1,2,3,4,5].map(s => `<span class="star" data-rating="${s}">★</span>`).join('')}
                </div>
                <input type="hidden" id="journalRating" value="0">
              </div>

              <textarea id="journalText" class="form-input" placeholder="${t('journalTextPlaceholder')}" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ddd; margin-bottom:8px; min-height:60px;"></textarea>
              
              <div class="photo-upload mb-sm">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${t('journalAddPhoto')}</label>
                <input type="file" id="journalPhotos" accept="image/*" multiple style="font-size:0.9rem;">
              </div>

              <button type="submit" class="btn btn-primary w-full mt-md">${t('btnSave')}</button>
              <button type="button" class="btn btn-secondary w-full mt-sm" id="journal-cancel">${t('cancelBtn') || 'キャンセル'}</button>
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
        this.renderTimeline(true); this.renderTimeline(false);
      });
    });

    // モーダル処理
    const scheduleModal = document.getElementById('scheduleModal');
    const journalModal = document.getElementById('journalModal');
    
    scheduleModal.addEventListener('click', (e) => {
      if (e.target === scheduleModal) {
        scheduleModal.classList.remove('active');
        document.getElementById('scheduleForm').reset();
        document.getElementById('scheduleItemId').value = '';
      }
    });

    journalModal.addEventListener('click', (e) => {
      if (e.target === journalModal) {
        journalModal.classList.remove('active');
        document.getElementById('journalForm').reset();
      }
    });

    document.getElementById('addScheduleBtn').addEventListener('click', () => {
      document.getElementById('scheduleItemId').value = '';
      document.getElementById('scheduleForm').reset();
      scheduleModal.classList.add('active');
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        scheduleModal.classList.remove('active');
        journalModal.classList.remove('active');
        document.getElementById('scheduleForm').reset();
        document.getElementById('journalForm').reset();
      });
    });

    document.getElementById('schedule-cancel')?.addEventListener('click', () => {
        document.getElementById('scheduleModal').classList.remove('active');
        document.getElementById('scheduleForm').reset();
        document.getElementById('scheduleItemId').value = '';
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
      
      const editId = document.getElementById('scheduleItemId').value;
      if (editId) {
        await updateScheduleItem(trip.id, editId, newItem);
      } else {
        await addScheduleItem(trip.id, newItem);
      }
      scheduleModal.classList.remove('active');
      e.target.reset();
      document.getElementById('scheduleItemId').value = '';
      this.loadSchedules(trip.id);
    });
    
    // 気分スタンプと星評価のUI
    document.querySelectorAll('.star').forEach(star => {
      star.addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const isHalf = x < rect.width / 2;
        const rating = parseInt(e.target.dataset.rating) - (isHalf ? 0.5 : 0);
        document.getElementById('journalRating').value = rating;
        
        document.querySelectorAll('.star').forEach(s => {
          const sRating = parseInt(s.dataset.rating);
          s.classList.remove('full', 'half');
          if (sRating <= rating) {
            s.classList.add('full');
          } else if (sRating - 0.5 === rating) {
            s.classList.add('half');
          }
        });
      });
    });

    

    document.getElementById('journal-cancel')?.addEventListener('click', () => {
        document.getElementById('journalModal').classList.remove('active');
        document.getElementById('journalForm').reset();
    });
    
    document.getElementById('journalForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const itemId = document.getElementById('journalItemId').value;
      const rating = document.getElementById('journalRating').value;
      const text = document.getElementById('journalText').value;
      const photosInput = document.getElementById('journalPhotos');
      
      const item = schedules.find(s => s.id === itemId);
      let photos = item.journalPhotos || [];
      
      if (photosInput.files.length > 0) {
        try {
          for (let file of photosInput.files) {
             const dataUrl = await compressImageAsBase64(file);
             photos.push(dataUrl);
          }
        } catch (e) {
          console.error(e);
          alert('画像の処理に失敗しました。ファイルサイズが大きすぎる可能性があります。');
        }
      }
      
      try {
        await updateScheduleItem(trip.id, itemId, {
          journalText: text,
          journalRating: parseFloat(rating),
          journalPhotos: photos
        });
        
        journalModal.classList.remove('active');
        document.getElementById('journalForm').reset();
        this.loadSchedules(trip.id);
      } catch (e) {
        console.error(e);
        alert('保存に失敗しました。写真のサイズや枚数が多すぎる可能性があります。写真を減らして再度お試しください。');
      }
    });

    // 初回ロード
    this.loadSchedules(trip.id);
  },

  async loadSchedules(tripId) {
    const allSchedules = await getSchedules(tripId);
    schedules = allSchedules.filter(s => s.day === currentDay);
    schedules.sort((a, b) => a.time.localeCompare(b.time));
    await this.renderTimeline(true);
    this.renderTimeline(false);
  },

  async renderTimeline(useCacheOnly = false) {
    const container = document.getElementById('timelineContainer');
    
    if (schedules.length === 0) {
      container.innerHTML = `<p class="empty-state">${currentMode === 'plan' ? (t('noScheduleHelp') || '予定がありません。追加してみましょう！') : (t('noJournalHelp') || '記録がありません。思い出を追加しよう！')}</p>`;
      return;
    }

    const itemsHtmlPromises = schedules.map(async item => {
      const cat = getCategories()[item.category] || getCategories().other;
      const translatedTitle = await translateUserText(item.title, useCacheOnly) || item.title;
      const translatedMemo = item.memo ? (await translateUserText(item.memo, useCacheOnly) || item.memo) : '';
      let journalHtml = '';
      
      if (currentMode === 'journal') {
        const hasJournal = item.journalText || item.journalRating || (item.journalPhotos && item.journalPhotos.length > 0);
        
        if (hasJournal) {
          const photos = item.journalPhotos ? item.journalPhotos.map((url, i) => `
              <div style="position:relative; display:inline-block; margin-right:8px; margin-bottom:8px;">
                <img src="${url}" class="journal-photo" style="width:70px; height:70px; object-fit:cover; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                <button class="delete-photo-btn" data-id="${item.id}" data-index="${i}" style="position:absolute; top:-6px; right:-6px; background:white; border:1px solid #ddd; border-radius:50%; width:22px; height:22px; font-size:14px; line-height:1; cursor:pointer; color:red; display:flex; align-items:center; justify-content:center; box-shadow:0 1px 3px rgba(0,0,0,0.2); padding:0; z-index:10;">&times;</button>
              </div>
            `).join('') : '';
          const r = parseFloat(item.journalRating || 0);
            const fullStars = Math.floor(r);
            const hasHalf = r % 1 !== 0;
            const emptyStars = 5 - Math.ceil(r);
            const stars = '<span class="star full" style="font-size:1rem; cursor:default; transform:none;">★</span>'.repeat(fullStars) + 
                          (hasHalf ? '<span class="star half" style="font-size:1rem; cursor:default; transform:none;">★</span>' : '') + 
                          '<span class="star" style="font-size:1rem; cursor:default; transform:none; color:#E0E0E0;">★</span>'.repeat(emptyStars);
          journalHtml = `
            <div class="journal-entry">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                <div style="flex:1;">
                  ${item.journalRating ? `<div class="journal-rating">${stars}</div>` : ''}
                  ${item.journalText ? `<p class="journal-text" style="margin-top:4px;">${item.journalText}</p>` : ''}
                </div>
                ${photos ? `<div class="journal-photos" style="display:flex; flex-wrap:wrap; gap:4px; max-width:180px; justify-content:flex-end; margin-top:0;">${photos}</div>` : ''}
              </div>
              <button class="btn small journal-add-btn edit-journal-btn" data-id="${item.id}" style="margin-top:8px; display:inline-flex;">記録を編集</button>
            </div>
          `;
        } else {
          journalHtml = `<button class="btn small journal-add-btn" data-id="${item.id}">記録を追加</button>`;
        }
      }

        return `
          <div class="timeline-item" data-id="${item.id}" style="position: relative; margin-bottom: 24px;">
            <!-- Delete Background -->
            <div class="swipe-delete-bg" style="position: absolute; top: 0; left: 0; bottom: 0; width: 100%; background: #ff3b30; color: white; display: flex; align-items: center; padding-left: 20px; font-weight: bold; z-index: 1; border-radius: 8px; opacity: 0; transition: opacity 0.4s;">
              ${t('deleteAction') || '削除'}
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
        if (currentMode !== 'plan') return;
        startX = e.touches[0].clientX;
        wrapper.style.transition = 'none';
      }, {passive: true});
      
      wrapper.addEventListener('touchmove', (e) => {
          if (currentMode !== 'plan') return;
          currentX = e.touches[0].clientX - startX;
          // Only allow swiping right
          if (currentX > 0) {
            // Apply a little resistance so it doesn't feel too fast/slippery
            const moveX = currentX * 0.8;
            wrapper.style.transform = `translateX(${moveX}px)`;
            if (moveX > 20) {
              itemEl.querySelector('.swipe-delete-bg').style.opacity = '1';
            }
          }
        }, {passive: true});
      
      wrapper.addEventListener('click', (e) => {
        if (currentMode !== 'plan') return;
        if (Math.abs(currentX) > 10) return; // swipe detected
        const item = schedules.find(s => s.id === itemId);
        if (item) {
          document.getElementById('scheduleItemId').value = item.id;
          document.getElementById('itemTime').value = item.time;
          document.getElementById('itemTitle').value = item.title;
          document.getElementById('itemCategory').value = item.category;
          document.getElementById('itemTransport').value = item.transport || '';
          document.getElementById('itemMemo').value = item.memo || '';
          document.getElementById('scheduleModal').classList.add('active');
        }
      });
      
      wrapper.addEventListener('touchend', async (e) => {
          if (currentMode !== 'plan') return;
          wrapper.style.transition = 'transform 0.8s ease-out';
          if (currentX > 100) { // Threshold to delete
            wrapper.style.transform = `translateX(100vw)`;
            
            // Allow animation to start before blocking with confirm
            setTimeout(async () => {
              if (confirm(t('confirmDelete') || '本当に削除しますか？')) {
                itemEl.style.opacity = '0';
                itemEl.style.height = '0';
                itemEl.style.margin = '0';
                itemEl.style.overflow = 'hidden';
                itemEl.style.transition = 'all 0.3s ease-out';
                
                await deleteScheduleItem(trip.id, itemId);
                this.loadSchedules(trip.id);
              } else {
                wrapper.style.transform = `translateX(0)`;
                itemEl.querySelector('.swipe-delete-bg').style.opacity = '0';
              }
            }, 100);
          } else {
            wrapper.style.transform = `translateX(0)`;
            itemEl.querySelector('.swipe-delete-bg').style.opacity = '0';
          }
          currentX = 0;
        });
    });

    if (currentMode === 'journal') {
        container.querySelectorAll('.delete-photo-btn').forEach(btn => {
          btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (confirm(t('confirmDeletePhoto') || '写真を削除しますか？')) {
              const id = btn.dataset.id;
              const index = parseInt(btn.dataset.index);
              const trip = getState().currentTrip;
              const item = schedules.find(s => s.id === id);
              if (item && item.journalPhotos) {
                item.journalPhotos.splice(index, 1);
                try {
                  await updateScheduleItem(trip.id, id, { journalPhotos: item.journalPhotos });
                  this.loadSchedules(trip.id);
                } catch(err) {
                  console.error(err);
                  alert('削除に失敗しました。');
                }
              }
            }
          });
        });

        container.querySelectorAll('.journal-add-btn, .edit-journal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.target.dataset.id;
          const item = schedules.find(s => s.id === id);
          document.getElementById('journalItemId').value = id;
          document.getElementById('journalText').value = item.journalText || '';
          document.getElementById('journalPhotos').value = '';
          
          document.getElementById('journalRating').value = item.journalRating || 0;
          
          
          const r = parseFloat(item.journalRating || 0);
          document.querySelectorAll('#journalForm .star').forEach(s => {
              const sRating = parseInt(s.dataset.rating);
              s.classList.remove('full', 'half');
              s.style.color = '';
            if (sRating <= r) {
              s.classList.add('full');
            } else if (sRating - 0.5 === r) {
              s.classList.add('half');
            }
          });
          
          document.getElementById('journalModal').classList.add('active');
        });
      });
    }
  }
};
