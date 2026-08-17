import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getResearchNotes, addResearchNote } from '../utils/db.js';

let notes = [];
let currentFilter = 'all';

export default {
  render() {
    return `
      <div class="page research-page">
        <header class="page-header">
          <h2>リサーチノート</h2>
        </header>

        <div class="filter-tabs">
          <span class="chip active" data-filter="all">全て</span>
          <span class="chip" data-filter="sightseeing">観光</span>
          <span class="chip" data-filter="food">グルメ</span>
          <span class="chip" data-filter="souvenir">お土産</span>
          <span class="chip" data-filter="experience">体験</span>
        </div>

        <div class="research-grid" id="researchGrid">
          <!-- スポットカード一覧がここに生成されます -->
        </div>

        <button class="fab" id="addResearchBtn">+</button>

        <!-- スポット追加モーダル -->
        <div class="modal" id="researchModal">
          <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>スポットを追加</h3>
            <form id="researchForm">
              <input type="text" id="noteName" placeholder="場所名*" required>
              <input type="text" id="noteAddress" placeholder="住所">
              <input type="text" id="noteHours" placeholder="営業時間">
              <input type="text" id="notePrice" placeholder="料金">
              <textarea id="noteMemo" placeholder="メモ"></textarea>
              <input type="url" id="noteUrl" placeholder="参考URL">
              
              <div class="priority-selector">
                <label>お気に入り度:</label>
                <select id="notePriority">
                  <option value="3">❤️❤️❤️ 絶対行きたい</option>
                  <option value="2">🧡🧡 時間があれば</option>
                  <option value="1">🤍 候補</option>
                </select>
              </div>
              
              <div class="tags-input">
                <label>タグ:</label>
                <select id="noteTags" multiple>
                  <option value="sightseeing">観光</option>
                  <option value="food">グルメ</option>
                  <option value="souvenir">お土産</option>
                  <option value="experience">体験</option>
                </select>
              </div>

              <button type="submit" class="btn primary">追加する</button>
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

    // フィルターのイベントリスナー
    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        this.renderNotes();
      });
    });

    // モーダル処理
    const modal = document.getElementById('researchModal');
    
    document.getElementById('addResearchBtn').addEventListener('click', () => {
      modal.classList.add('show');
    });

    modal.querySelector('.close-modal').addEventListener('click', () => {
      modal.classList.remove('show');
    });

    document.getElementById('researchForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const tagsSelect = document.getElementById('noteTags');
      const selectedTags = Array.from(tagsSelect.selectedOptions).map(opt => opt.value);

      const newNote = {
        tripId: trip.id,
        name: document.getElementById('noteName').value,
        address: document.getElementById('noteAddress').value,
        hours: document.getElementById('noteHours').value,
        price: document.getElementById('notePrice').value,
        memo: document.getElementById('noteMemo').value,
        url: document.getElementById('noteUrl').value,
        priority: parseInt(document.getElementById('notePriority').value),
        tags: selectedTags,
        imageUrl: '' // To be implemented with storage if needed
      };
      
      await addResearchNote(newNote);
      modal.classList.remove('show');
      e.target.reset();
      this.loadNotes(trip.id);
    });

    this.loadNotes(trip.id);
  },

  async loadNotes(tripId) {
    notes = await getResearchNotes(tripId);
    this.renderNotes();
  },

  renderNotes() {
    const grid = document.getElementById('researchGrid');
    
    let filtered = notes;
    if (currentFilter !== 'all') {
      filtered = notes.filter(n => n.tags && n.tags.includes(currentFilter));
    }

    // 優先度でソート
    filtered.sort((a, b) => b.priority - a.priority);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <p>行きたい場所を調べて追加しよう！</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(note => {
      const priorityHearts = '❤️'.repeat(note.priority) + '🤍'.repeat(3 - note.priority);
      return `
        <div class="spot-card">
          <div class="spot-header">
            <h3>${note.name}</h3>
            <div class="spot-priority">${priorityHearts}</div>
          </div>
          <div class="spot-details">
            ${note.address ? `<p>📍 ${note.address}</p>` : ''}
            ${note.hours ? `<p>🕒 ${note.hours}</p>` : ''}
            ${note.price ? `<p>💰 ${note.price}</p>` : ''}
          </div>
          ${note.memo ? `<div class="spot-memo">${note.memo}</div>` : ''}
          ${note.tags && note.tags.length > 0 ? `
            <div class="spot-tags">
              ${note.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          ` : ''}
          ${note.url ? `<a href="${note.url}" target="_blank" class="spot-link">参考URLを開く 🔗</a>` : ''}
          <div class="spot-actions">
            <button class="btn small" data-id="${note.id}">スケジュールに追加</button>
          </div>
        </div>
      `;
    }).join('');
  }
};
