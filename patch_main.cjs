const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

code = code.replace(/import \{ setState, getState, subscribe, setLanguage \} from '\.\/utils\/store\.js';/, "import { setState, getState, subscribe, setLanguage, setLoading } from './utils/store.js';");

code = code.replace(/var\(--color-primary\)/g, 'var(--color-text)');

const toReplace = `const btn = document.getElementById('btn-share');
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
      btn.innerHTML = originalText;`;

const replacer = `setLoading(true);
      try {
        shareId = await createShareLink(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, '');
        await updateTrip(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, { shareId });
        setState({ currentTrip: { ...state.currentTrip, shareId } });
      } catch(e) {
        console.error(e);
        setLoading(false);
        alert('共有コードの生成に失敗しました。');
        return;
      }
      setLoading(false);`;

code = code.replace(toReplace, replacer);

fs.writeFileSync('src/main.js', code, 'utf8');
