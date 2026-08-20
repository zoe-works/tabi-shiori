const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

const overlayRegex = /\s*<!-- Share Modal -->[\s\S]*?<div id="share-content"><\/div>\s*<\/div>\s*<\/div>/;
code = code.replace(overlayRegex, '');

code = code.replace("const shareOverlay = document.getElementById('share-overlay');", '');
code = code.replace("[drawerOverlay, shareOverlay]", "[drawerOverlay]");

const newClickLogic = `document.getElementById('btn-share').addEventListener('click', async () => {
    const state = getState();
    if (!state.currentTrip) return;
    
    let shareId = state.currentTrip.shareId;
    if (!shareId) {
      const btn = document.getElementById('btn-share');
      const originalText = btn.innerHTML;
      btn.innerHTML = '⏳';
      try {
        shareId = await createShareLink(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, '');
        await updateTrip(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, { shareId });
        setState({ currentTrip: { ...state.currentTrip, shareId } });
      } catch(e) {
        alert('共有コードの生成に失敗しました。');
        btn.innerHTML = originalText;
        return;
      }
      btn.innerHTML = originalText;
    }

    navigator.clipboard.writeText(shareId).then(() => {
      // Show toast
      let toast = document.getElementById('share-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'share-toast';
        toast.style.position = 'fixed';
        toast.style.bottom = '80px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = 'var(--color-primary)';
        toast.style.color = 'white';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '24px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.zIndex = '9999';
        toast.style.transition = 'opacity 0.3s ease';
        toast.style.fontWeight = 'bold';
        document.body.appendChild(toast);
      }
      toast.textContent = '共有コードをコピーしました！';
      toast.style.opacity = '1';
      
      setTimeout(() => {
        toast.style.opacity = '0';
      }, 3000);
    }).catch(() => {
      alert('共有コード: ' + shareId);
    });
  });`;

code = code.replace(/document\.getElementById\('btn-share'\)\.addEventListener\('click', \(\) => {[\s\S]*?}\);/, newClickLogic);

const oldShowModalRegex = /async function showShareModal\(\) \{[\s\S]*?}\n/;
code = code.replace(oldShowModalRegex, '');

fs.writeFileSync('src/main.js', code, 'utf8');
