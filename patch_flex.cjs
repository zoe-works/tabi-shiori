const fs = require('fs');
let code = fs.readFileSync('src/pages/home.js', 'utf8');

const oldHtml = `            <button id="btn-create-trip" class="btn btn-primary">\${t('btnWelcomeCreate')}</button>
            <button id="btn-join-trip" class="btn btn-secondary mt-md" style="border:1px solid var(--color-pink-deep); background:#fff; color:var(--color-pink-deep); margin-top:16px;">\${t('btnWelcomeJoin')}</button>`;

const newHtml = `            <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
              <button id="btn-create-trip" class="btn btn-primary">\${t('btnWelcomeCreate')}</button>
              <button id="btn-join-trip" class="btn btn-secondary" style="border:1px solid var(--color-pink-deep); background:#fff; color:var(--color-pink-deep);">\${t('btnWelcomeJoin')}</button>
            </div>`;

code = code.replace(oldHtml, newHtml);
fs.writeFileSync('src/pages/home.js', code, 'utf8');
