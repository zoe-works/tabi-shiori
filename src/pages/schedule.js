import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getSchedules, addScheduleItem, updateScheduleItem, deleteScheduleItem } from '../utils/db.js';
import { uploadPhoto, compressImage } from '../utils/storage.js';

let currentDay = 1;
let currentMode = 'plan'; // 'plan' or 'journal'
let schedules = [];

const categories = {
  sightseeing: { icon: '🏛️', label: '観光' },
  meal: { icon: '🍽️', label: '食事' },
  transport: { icon: '🚌', label: '移動' },
  hotel: { icon: '🏨', label: 'ホテル' },
  shopping: { icon: '🛒', label: '買い物' },
  activity: { icon: '🎭', label: '体験' },
  other: { icon: '✨', label: 'その他' }
};

export default {
  render() {
    return `
      <div class="page schedule-page">
        <header class="page-header">
          <h2>スケジュール & ジャーナル</h2>
        </header>

        <div class="mode-toggle">
          <button class="mode-btn ${currentMode === 'plan' ? 'active' : ''}" data-mode="plan">📝 プラン</button>
          <button class="mode-btn ${currentMode === 'journal' ? 'active' : ''}" data-mode="journal">📖 ジャーナル</button>
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
            <h3>予定を追加</h3>
            <form id="scheduleForm">
              <input type="time" id="itemTime" required>
              <input type="text" id="itemTitle" placeholder="場所・予定名" required>
              <select id="itemCategory">
                ${Object.entries(categories).map(([key, val]) => `<option value="${key}">${val.icon} ${val.label}</option>`).join('')}
              </select>
              <input type="text" id="itemTransport" placeholder="移動手段 (例: タクシー)">
              <textarea id="itemMemo" placeholder="メモ"></textarea>
              <button type="submit" class="btn primary">追加する</button>
            </form>
          </div>
        </div>

        <!-- ジャーナル記録モーダル -->
        <div class="modal-overlay" id="journalModal">
          <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>記録を追加</h3>
            <form id="journalForm">
              <input type="hidden" id="journalItemId">
              
              <div class="mood-selector">
                <label>気分:</label>
                <div class="mood-options">
                  ${['😆','😊','😴','🤩','😢','🤔'].map(m => `<span class="mood-option" data-mood="${m}">${m}</span>`).join('')}
                </div>
                <input type="hidden" id="journalMood">
              </div>

              <div class="star-rating">
                <label>評価:</label>
                <div class="stars">
                  ${[1,2,3,4,5].map(s => `<span class="star" data-rating="${s}">★</span>`).join('')}
                </div>
                <input type="hidden" id="journalRating" value="0">
              </div>

              <textarea id="journalText" placeholder="感想を書いてね"></textarea>
              
              <div class="photo-upload">
                <label>写真を追加:</label>
                <input type="file" id="journalPhotos" accept="image/*" capture="environment" multiple>
              </div>

              <button type="submit" class="btn primary">保存する</button>
            </form>
          </div>
        </div>
      </div>
    `;
  },
  
  async init() {
    const state = getState();
    const trip = state.currentTrip;
    
    if (!trip) {
      alert('旅行が選択されていません。');
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
      
      await addScheduleItem(state.user.uid, trip.id, newItem);
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
    schedules = await getSchedules(tripId, currentDay);
    schedules.sort((a, b) => a.time.localeCompare(b.time));
    this.renderTimeline();
  },

  renderTimeline() {
    const container = document.getElementById('timelineContainer');
    
    if (schedules.length === 0) {
      container.innerHTML = '<p class="empty-state">予定がありません。追加してみましょう！</p>';
      return;
    }

    container.innerHTML = schedules.map(item => {
      const cat = categories[item.category] || categories.other;
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
        <div class="timeline-item">
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-dot" data-category="${item.category}">${cat.icon}</div>
          <div class="timeline-card">
            <h4>${item.title}</h4>
            ${item.transport ? `<p class="transport">🚌 ${item.transport}</p>` : ''}
            ${item.memo ? `<p class="memo">${item.memo}</p>` : ''}
            ${journalHtml}
          </div>
        </div>
      `;
    }).join('');

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
