const fs = require('fs');

// 1. Update index.css for modal overlay
let css = fs.readFileSync('src/styles/index.css', 'utf8');
css = css.replace(
  /.modal-overlay {([\s\S]*?)visibility: hidden;\n  }/,
  `.modal-overlay {$1visibility: hidden;\n    padding-bottom: calc(var(--nav-height) + 16px);\n  }`
);
fs.writeFileSync('src/styles/index.css', css, 'utf8');

// 2. Update budget.js
let budget = fs.readFileSync('src/pages/budget.js', 'utf8');
budget = budget.replace(
  /<div class="modal-actions">\s*<button type="button" class="btn-cancel" id="budget-cancel">\${t\('cancelBtn'\) \|\| 'キャンセル'}<\/button>\s*<button type="submit" class="btn-fancy">\${t\('addBtn'\) \|\| '追加する ✨'}<\/button>\s*<\/div>/,
  `<button type="submit" class="btn btn-primary w-full mt-lg">\${t('addBtn') || '追加する ✨'}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="budget-cancel">\${t('cancelBtn') || 'キャンセル'}</button>`
);
fs.writeFileSync('src/pages/budget.js', budget, 'utf8');

// 3. Update omiyage.js
let omiyage = fs.readFileSync('src/pages/omiyage.js', 'utf8');
omiyage = omiyage.replace(
  /<div class="modal-actions">\s*<button type="button" class="btn-cancel" id="omi-cancel">\${t\('cancelBtn'\) \|\| 'キャンセル'}<\/button>\s*<button type="submit" class="btn-fancy">\${t\('addBtn'\) \|\| '追加する ✨'}<\/button>\s*<\/div>/,
  `<button type="submit" class="btn btn-primary w-full mt-lg">\${t('addBtn') || '追加する ✨'}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="omi-cancel">\${t('cancelBtn') || 'キャンセル'}</button>`
);
fs.writeFileSync('src/pages/omiyage.js', omiyage, 'utf8');

// 4. Update schedule.js
let schedule = fs.readFileSync('src/pages/schedule.js', 'utf8');
schedule = schedule.replace(
  /<button type="submit" class="btn primary w-full">\${t\('btnAdd'\)}<\/button>/,
  `<button type="submit" class="btn btn-primary w-full mt-lg">\${t('btnAdd')}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="schedule-cancel">\${t('cancelBtn') || 'キャンセル'}</button>`
);
// Schedule needs an event listener for cancel
if (!schedule.includes("document.getElementById('schedule-cancel')")) {
  schedule = schedule.replace(
    /document.getElementById\('scheduleForm'\).addEventListener\('submit', async \(e\) => {/,
    `document.getElementById('schedule-cancel')?.addEventListener('click', () => {
        scheduleModal.classList.remove('show');
        document.getElementById('scheduleForm').reset();
    });
    
    document.getElementById('scheduleForm').addEventListener('submit', async (e) => {`
  );
}
fs.writeFileSync('src/pages/schedule.js', schedule, 'utf8');

// 5. Update emergency.js
let emergency = fs.readFileSync('src/pages/emergency.js', 'utf8');
emergency = emergency.replace(
  /<div class="modal-actions">\s*<button type="button" class="btn-cancel" id="em-cancel">\${t\('cancelBtn'\) \|\| 'キャンセル'}<\/button>\s*<button type="submit" class="btn-primary">\${t\('saveBtn'\) \|\| '保存する ✨'}<\/button>\s*<\/div>/,
  `<button type="submit" class="btn btn-primary w-full mt-lg">\${t('saveBtn') || '保存する ✨'}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="em-cancel">\${t('cancelBtn') || 'キャンセル'}</button>`
);
fs.writeFileSync('src/pages/emergency.js', emergency, 'utf8');

console.log("Done");
