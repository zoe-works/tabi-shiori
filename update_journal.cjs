const fs = require('fs');

let schedule = fs.readFileSync('src/pages/schedule.js', 'utf8');

schedule = schedule.replace(
  /<button type="submit" class="btn primary w-full">\${t\('btnSave'\)}<\/button>/,
  `<button type="submit" class="btn btn-primary w-full mt-lg">\${t('btnSave')}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="journal-cancel">\${t('cancelBtn') || 'キャンセル'}</button>`
);

if (!schedule.includes("document.getElementById('journal-cancel')")) {
  schedule = schedule.replace(
    /document.getElementById\('journalForm'\).addEventListener\('submit', async \(e\) => {/,
    `document.getElementById('journal-cancel')?.addEventListener('click', () => {
        document.getElementById('journalModal').classList.remove('active');
        document.getElementById('journalForm').reset();
    });
    
    document.getElementById('journalForm').addEventListener('submit', async (e) => {`
  );
}

fs.writeFileSync('src/pages/schedule.js', schedule, 'utf8');
