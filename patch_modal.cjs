const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

const newFn = `async function showShareModal() {
  const modal = document.getElementById('share-modal');
  const content = document.getElementById('share-modal-content');
  const state = getState();
  
  if (!state.currentTrip) return;
  modal.classList.add('active');

  let shareId = state.currentTrip.shareId;
  
  if (!shareId) {
    content.innerHTML = '<p>共有コードを生成中...</p>';
    try {
      shareId = await createShareLink(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, '');
      await updateTrip(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, { shareId });
      setState({ currentTrip: { ...state.currentTrip, shareId } });
    } catch(e) {
      content.innerHTML = '<p>エラーが発生しました。</p>';
      return;
    }
  }

  content.innerHTML = \`
    <div class="share-info text-center">
      <p class="text-sm mb-md" style="color: var(--color-text-light);">\${t('shareSetupText') || 'この共有コードを友だちに教えてください。'}</p>
      <div class="form-group" style="margin-bottom: 24px;">
        <input type="text" value="\${shareId}" readonly id="share-url-input" class="form-input" style="font-size: 1.5rem; text-align: center; letter-spacing: 4px; padding: 16px; border: 2px dashed var(--color-primary); background: var(--color-bg-light); border-radius: 12px;" />
      </div>
      <button class="btn btn-primary w-full" id="btn-copy-share" style="padding: 14px; font-size: 1.1rem; border-radius: 24px;">\${t('shareCopyBtn') || 'コードをコピー'}</button>
    </div>
  \`;
  
  document.getElementById('btn-copy-share')?.addEventListener('click', () => {
    navigator.clipboard.writeText(shareId);
    const btn = document.getElementById('btn-copy-share');
    btn.textContent = t('shareCopySuccess') || 'コピーしました！';
    btn.style.background = 'var(--color-secondary)';
    setTimeout(() => {
      btn.textContent = t('shareCopyBtn') || 'コードをコピー';
      btn.style.background = '';
    }, 2000);
  });
}`;

const splitParts = code.split('function showShareModal() {');
const before = splitParts[0];
let after = splitParts[1];
const endSplit = after.split('function updateAppShellVisibility() {');
const afterFunction = endSplit[1];

let finalCode = before + newFn + '\n\nfunction updateAppShellVisibility() {' + afterFunction;

if (!finalCode.includes('createShareLink')) {
  finalCode = finalCode.replace("import { getTrips } from './utils/db.js';", "import { getTrips, createShareLink, updateTrip } from './utils/db.js';");
}

fs.writeFileSync('src/main.js', finalCode, 'utf8');
