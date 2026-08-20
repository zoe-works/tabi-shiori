const fs = require('fs');
let code = fs.readFileSync('src/pages/schedule.js', 'utf8');

// Add ID to submit button
code = code.replace(/<button type="submit" class="btn btn-primary w-full mt-lg">/, '<button type="submit" id="btn-submit-schedule" class="btn btn-primary w-full mt-lg">');

// Update text in addScheduleBtn
code = code.replace(/document\.getElementById\('scheduleForm'\)\.reset\(\);\s*scheduleModal\.classList\.add\('active'\);/, `document.getElementById('scheduleForm').reset();
        document.getElementById('btn-submit-schedule').textContent = t('btnAdd') || '追加する';
        scheduleModal.classList.add('active');`);

// Update text in edit item
code = code.replace(/document\.getElementById\('itemMemo'\)\.value = item\.memo \|\| '';\s*document\.getElementById\('scheduleModal'\)\.classList\.add\('active'\);/, `document.getElementById('itemMemo').value = item.memo || '';
            document.getElementById('btn-submit-schedule').textContent = t('btnSave') || '保存する';
            document.getElementById('scheduleModal').classList.add('active');`);

fs.writeFileSync('src/pages/schedule.js', code, 'utf8');
