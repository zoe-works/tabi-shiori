import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getChecklist, addChecklistItem, updateChecklistItem, deleteChecklistItem, getUserSettings } from '../utils/db.js';
import { t } from '../utils/i18n.js';
import { translateUserText } from '../utils/translate.js';

const DEFAULT_ITEMS = [
  { category: 'documents', items: ['パスポート', '航空券(予約確認書)', 'ホテル予約確認書', '海外旅行保険証', 'クレジットカード'] },
  { category: 'electronics', items: ['スマホ充電器', 'モバイルバッテリー', '変換プラグ', 'イヤホン', 'カメラ'] },
  { category: 'clothing', items: ['着替え', '下着', '靴下', 'パジャマ', '上着/羽織り'] },
  { category: 'toiletries', items: ['歯ブラシ', '歯磨き粉', 'シャンプー', '日焼け止め', '常備薬'] },
  { category: 'other', items: ['現金', 'エコバッグ', '雨具', 'ガイドブック'] },
];

const CATEGORIES = {
  documents: { label: t('catDocuments') || '📄 書類', color: 'var(--color-yellow)' },
  electronics: { label: t('catElectronics') || '🔌 電子機器', color: 'var(--color-blue)' },
  clothing: { label: t('catClothing') || '👕 衣類', color: 'var(--color-pink)' },
  toiletries: { label: t('catToiletries') || '🧴 洗面用品', color: 'var(--color-mint)' },
  other: { label: t('catOtherList') || '📦 その他', color: '#e0c3fc' }, // approx lavender
};

const IMPORTANT_ITEMS = ['パスポート', '航空券', '航空券(予約確認書)'];

let checklistItems = [];

async function render() {
  return `
    <div class="page checklist-page">
      <header class="page-header">
        <button class="back-btn" id="cl-back-btn">←</button>
        <h2>${t('checklistTitle')}</h2>
      </header>

      <div class="progress-container">
        <div class="progress-text" id="cl-progress-text">0/0 ${t('preparing')}</div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" id="cl-progress-fill"></div>
        </div>
      </div>

      <div class="checklist-container" id="cl-container">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `;
}

async function init() {
  const store = getState();
  const trip = store.currentTrip;

  if (!trip) {
    document.getElementById('cl-container').innerHTML = `<p class="empty-state">${t('noTripSelected')}</p>`;
    return;
  }

  setupEventListeners();
  await loadChecklist();
}

async function loadChecklist() {
  const store = getState();
  const trip = store.currentTrip;
  
  checklistItems = await getChecklist(trip.id);
  
  if (checklistItems.length === 0) {
    let masterToUse = DEFAULT_ITEMS;
    if (store.user) {
      const settings = await getUserSettings(store.user.uid);
      if (settings && settings.checklistMaster) {
        masterToUse = settings.checklistMaster;
      }
    }

    // Generate default items
    for (const cat of masterToUse) {
      for (const itemName of cat.items) {
        const newItem = {
          name: itemName,
          category: cat.category,
          checked: false,
          important: IMPORTANT_ITEMS.includes(itemName),
          assignee: null
        };
        await addChecklistItem(trip.id, newItem);
      }
    }
    checklistItems = await getChecklist(trip.id);
  }
  
  renderChecklist(true);
  renderChecklist(false);
}

async function renderChecklist(useCacheOnly = false) {
  const container = document.getElementById('cl-container');
  container.innerHTML = '';
  
  let checkedCount = 0;
  
  for (const catKey of Object.keys(CATEGORIES)) {
    const catConfig = CATEGORIES[catKey];
    const itemsInCat = checklistItems.filter(item => item.category === catKey);
    
    if(itemsInCat.length === 0) continue;
    
    const catSection = document.createElement('div');
    catSection.className = 'checklist-section';
    
    const header = document.createElement('div');
    header.className = 'checklist-header';
    header.style.backgroundColor = catConfig.color;
    header.innerHTML = `<h3>${catConfig.label}</h3><span class="toggle-icon">▼</span>`;
    header.addEventListener('click', () => {
      const list = catSection.querySelector('.checklist-items');
      list.classList.toggle('hidden');
      header.querySelector('.toggle-icon').textContent = list.classList.contains('hidden') ? '▶' : '▼';
    });
    catSection.appendChild(header);
    
    const itemList = document.createElement('div');
    itemList.className = 'checklist-items';
    
    for (const item of itemsInCat) {
      if(item.checked) checkedCount++;
      
      const itemEl = document.createElement('div');
      itemEl.className = `checklist-item ${item.checked ? 'checked' : ''}`;
      
      const translatedName = await translateUserText(item.name, useCacheOnly) || item.name;
      
      itemEl.innerHTML = `
        <div class="checkbox-custom" data-id="${item.id}"></div>
        <div class="item-name">
          ${item.important ? '<span class="important-mark">❗</span>' : ''}
          ${translatedName}
        </div>
      `;
      
      itemEl.querySelector('.checkbox-custom').addEventListener('click', (e) => {
        // Optimistic update
        item.checked = !item.checked;
        if (item.checked) {
          itemEl.classList.add('checked');
        } else {
          itemEl.classList.remove('checked');
        }
        updateProgressBar();

        // Background update
        const store = getState();
        updateChecklistItem(store.currentTrip.id, item.id, { checked: item.checked }).catch(err => {
          console.error("Failed to update checklist item:", err);
          // Revert on failure
          item.checked = !item.checked;
          itemEl.classList.toggle('checked');
          updateProgressBar();
        });
      });
      
      itemList.appendChild(itemEl);
    }
    
    // Add inline input
    const addContainer = document.createElement('div');
    addContainer.className = 'add-item-container';
    addContainer.innerHTML = `
      <input type="text" class="add-item-input" placeholder="${t('addItemPlaceholder') || '+ アイテムを追加'}">
    `;
    
    addContainer.querySelector('.add-item-input').addEventListener('keypress', async (e) => {
       if(e.key !== 'Enter') return;
       const input = e.target;
       if(input.value.trim()) {
         const store = getState();
         await addChecklistItem(store.currentTrip.id, {
           name: input.value.trim(),
           category: catKey,
           checked: false,
           important: false,
           assignee: null
         });
         await loadChecklist();
       }
    });
    
    itemList.appendChild(addContainer);
    catSection.appendChild(itemList);
    container.appendChild(catSection);
  }
  
  updateProgressBar();
}

function updateProgressBar() {
  const total = checklistItems.length;
  const checkedCount = checklistItems.filter(item => item.checked).length;
  const progressText = document.getElementById('cl-progress-text');
  const progressFill = document.getElementById('cl-progress-fill');
  
  if(total > 0 && progressText && progressFill) {
    const percent = Math.round((checkedCount / total) * 100);
    progressFill.style.width = `${percent}%`;
    if(checkedCount === total) {
      progressText.textContent = `${checkedCount}/${total} ${t('perfect') || '完璧！🎉'}`;
      progressFill.style.backgroundColor = 'var(--color-mint)';
    } else {
      progressText.textContent = `${checkedCount}/${total} ${t('preparing') || '準備中...'}`;
      progressFill.style.backgroundColor = 'var(--color-pink-deep)'; // Use existing token
    }
  }
}

function setupEventListeners() {
  document.getElementById('cl-back-btn')?.addEventListener('click', () => navigate('/'));
}

export default { render, init };
