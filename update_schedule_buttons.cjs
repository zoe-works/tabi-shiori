const fs = require('fs');
let schedule = fs.readFileSync('src/pages/schedule.js', 'utf8');

schedule = schedule.replace(
  /<button type="submit" class="btn primary w-full">\${t\('btnAdd'\)}<\/button>/,
  `<button type="submit" class="btn btn-primary w-full mt-lg">\${t('btnAdd')}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="schedule-cancel">\${t('cancelBtn') || 'キャンセル'}</button>`
);

if (!schedule.includes("document.getElementById('schedule-cancel')")) {
  schedule = schedule.replace(
    /document.getElementById\('scheduleForm'\).addEventListener\('submit', async \(e\) => {/,
    `document.getElementById('schedule-cancel')?.addEventListener('click', () => {
        document.getElementById('scheduleModal').classList.remove('active');
        document.getElementById('scheduleForm').reset();
    });
    
    document.getElementById('scheduleForm').addEventListener('submit', async (e) => {`
  );
}

fs.writeFileSync('src/pages/schedule.js', schedule, 'utf8');
