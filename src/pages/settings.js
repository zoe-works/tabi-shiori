import { getState } from '../utils/store.js';
import { getUserSettings, updateUserSettings } from '../utils/db.js';
import { t } from '../utils/i18n.js';

const DEFAULT_MASTER = [
  { category: 'documents', label: '📄 書類', items: ['パスポート', '航空券(予約確認書)', 'ホテル予約確認書', '海外旅行保険証', 'クレジットカード'] },
  { category: 'electronics', label: '🔌 電子機器', items: ['スマホ充電器', 'モバイルバッテリー', '変換プラグ', 'イヤホン', 'カメラ'] },
  { category: 'clothing', label: '👕 衣類', items: ['着替え', '下着', '靴下', 'パジャマ', '上着/羽織り'] },
  { category: 'toiletries', label: '🧴 洗面用品', items: ['歯ブラシ', '歯磨き粉', 'シャンプー', '日焼け止め', '常備薬'] },
  { category: 'other', label: '📦 その他', items: ['現金', 'エコバッグ', '雨具', 'ガイドブック'] }
];

let currentMaster = [];

export default {
  async render() {
    const { user } = getState();
    
    // 未ログイン時は編集不可
    if (!user || user.isAnonymous) {
      return `
        <div class="page fade-in">
          <header class="page-header">
            <button class="btn-icon btn-back" id="btn-back-settings">←</button>
            <h1 class="page-title">⚙️ ${t('settings') || '設定'}</h1>
          </header>
          <div class="empty-state">
            <div class="empty-state-icon">🔒</div>
            <p class="empty-state-text">${t('loginRequiredForSettings') || '設定を変更するにはログインが必要です。'}</p>
          </div>
        </div>
      `;
    }

    const settings = await getUserSettings(user.uid);
    if (settings && settings.checklistMaster) {
      currentMaster = settings.checklistMaster;
    } else {
      // Deep copy default master
      currentMaster = JSON.parse(JSON.stringify(DEFAULT_MASTER));
    }

    const categoriesHtml = currentMaster.map((cat, i) => `
      <div class="card mb-md">
        <label class="form-label">${cat.label}</label>
        <p class="text-xs text-muted mb-sm">${t('newlineSeparated') || '改行区切りでアイテムを入力してください。'}</p>
        <textarea class="form-input master-textarea" data-index="${i}" rows="5" style="resize: vertical;">${cat.items.join('\n')}</textarea>
      </div>
    `).join('');

    return `
      <div class="page fade-in">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-back-settings-main">←</button>
          <h1 class="page-title">⚙️ ${t('settings') || '設定'}</h1>
        </header>

        <div class="form-content fade-in" style="animation-delay: 0.1s;">
          <h2 class="mb-md text-lg">${t('checklistMasterTitle') || '🎒 持ち物チェック 初期マスタ設定'}</h2>
          <p class="text-sm text-muted mb-md">
            ${t('checklistMasterDesc') || '新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。'}
          </p>
          
          <div id="master-categories-container">
            ${categoriesHtml}
          </div>

          <button id="btn-save-settings" class="btn btn-primary w-full mt-md">${t('saveBtn') || '保存する'}</button>
        </div>
      </div>
    `;
  },

  init() {
    document.getElementById('btn-back-settings')?.addEventListener('click', () => navigate('/'));
    document.getElementById('btn-back-settings-main')?.addEventListener('click', () => navigate('/'));

    const btnSave = document.getElementById('btn-save-settings');
    if (!btnSave) return;

    btnSave.addEventListener('click', async () => {
      const { user } = getState();
      if (!user || user.isAnonymous) return;

      btnSave.disabled = true;
      btnSave.textContent = t('btnSaving') || '保存中...';

      const textareas = document.querySelectorAll('.master-textarea');
      textareas.forEach(textarea => {
        const index = textarea.getAttribute('data-index');
        const text = textarea.value;
        const items = text.split('\n').map(s => s.trim()).filter(s => s);
        currentMaster[index].items = items;
      });

      try {
        await updateUserSettings(user.uid, { checklistMaster: currentMaster });
        btnSave.textContent = t('savedExclamation') || '保存しました！';
        setTimeout(() => {
          btnSave.disabled = false;
          btnSave.textContent = t('saveBtn') || '保存する';
        }, 2000);
      } catch (e) {
        alert((t('saveFailed') || '保存に失敗しました: ') + e.message);
        btnSave.disabled = false;
        btnSave.textContent = t('saveBtn') || '保存する';
      }
    });
  }
};
