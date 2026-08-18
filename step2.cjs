const fs = require('fs');

let schedule = fs.readFileSync('src/pages/schedule.js', 'utf8');

// --- 1. Fix Journal Edit Stars in render() ---
schedule = schedule.replace(
  /\$\{\[1,2,3,4,5\]\.map\(s => `<span class="star" data-rating="\$\{s\}">⭐<\/span>`\)\.join\(''\)\}/g,
  "${[1,2,3,4,5].map(s => `<span class=\"star\" data-rating=\"${s}\">★</span>`).join('')}"
);

// --- 2. Fix timeline stars render in renderTimeline() ---
schedule = schedule.replace(
  /const stars = '⭐'\.repeat\(item\.journalRating \|\| 0\) \+ '⭐'\.repeat\(5 - \(item\.journalRating \|\| 0\)\);/,
  `const r = parseFloat(item.journalRating || 0);
            const fullStars = Math.floor(r);
            const hasHalf = r % 1 !== 0;
            const emptyStars = 5 - Math.ceil(r);
            const stars = '<span style="color:gold;">★</span>'.repeat(fullStars) + 
                          (hasHalf ? '<span style="background: linear-gradient(to right, gold 50%, #ccc 50%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">★</span>' : '') + 
                          '<span style="color:#ccc;">★</span>'.repeat(emptyStars);`
);

// --- 3. Fix Journal Form Rating Event Listener ---
if (!schedule.includes("star.addEventListener('click', (e) => {")) {
  schedule = schedule.replace(
    /\/\/ 気分スタンプと星評価のUI\s*document\.querySelectorAll\('\.mood-option'\)\.forEach\(opt => \{/,
    `// 気分スタンプと星評価のUI
    document.querySelectorAll('.star').forEach(star => {
      star.addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const isHalf = x < rect.width / 2;
        const rating = parseInt(e.target.dataset.rating) - (isHalf ? 0.5 : 0);
        document.getElementById('journalRating').value = rating;
        
        document.querySelectorAll('.star').forEach(s => {
          const sRating = parseInt(s.dataset.rating);
          s.classList.remove('full', 'half');
          if (sRating <= rating) {
            s.classList.add('full');
          } else if (sRating - 0.5 === rating) {
            s.classList.add('half');
          }
        });
      });
    });

    document.querySelectorAll('.mood-option').forEach(opt => {`
  );
}

// --- 4. Fix UI reset in edit journal ---
schedule = schedule.replace(
  /document\.querySelectorAll\('\.star'\)\.forEach\(s => \{\s*s\.style\.color = parseInt\(s\.dataset\.rating\) <= \(item\.journalRating \|\| 0\) \? 'gold' : '#ccc';\s*\}\);/,
  `const r = parseFloat(item.journalRating || 0);
            document.querySelectorAll('.star').forEach(s => {
              const sRating = parseInt(s.dataset.rating);
              s.classList.remove('full', 'half');
              s.style.color = '';
              if (sRating <= r) {
                s.classList.add('full');
              } else if (sRating - 0.5 === r) {
                s.classList.add('half');
              }
            });`
);

// --- 5. Fix form reset on cancel ---
schedule = schedule.replace(
  /document\.getElementById\('scheduleModal'\)\.classList\.remove\('active'\);\s*document\.getElementById\('scheduleForm'\)\.reset\(\);/,
  `document.getElementById('scheduleModal').classList.remove('active');
        document.getElementById('scheduleForm').reset();
        document.getElementById('scheduleItemId').value = '';`
);

// --- 6. Schedule tap to edit ---
if (!schedule.includes("wrapper.addEventListener('click', (e) => {")) {
  schedule = schedule.replace(
    /wrapper\.addEventListener\('touchend', async \(e\) => \{/,
    `wrapper.addEventListener('click', (e) => {
        if (currentMode !== 'plan') return;
        if (Math.abs(currentX) > 10) return; // It was a swipe
        const item = schedules.find(s => s.id === itemId);
        if (item) {
          document.getElementById('scheduleItemId').value = item.id;
          document.getElementById('itemTime').value = item.time;
          document.getElementById('itemTitle').value = item.title;
          document.getElementById('itemCategory').value = item.category;
          document.getElementById('itemTransport').value = item.transport || '';
          document.getElementById('itemMemo').value = item.memo || '';
          document.getElementById('scheduleModal').classList.add('active');
        }
      });
      
      wrapper.addEventListener('touchend', async (e) => {`
  );
}

// --- 7. Schedule add button resets form ---
schedule = schedule.replace(
  /document\.getElementById\('addScheduleBtn'\)\.addEventListener\('click', \(\) => \{\s*scheduleModal\.classList\.add\('active'\);\s*\}\);/,
  `document.getElementById('addScheduleBtn').addEventListener('click', () => {
      document.getElementById('scheduleItemId').value = '';
      document.getElementById('scheduleForm').reset();
      scheduleModal.classList.add('active');
    });`
);

// --- 8. Schedule form submit logic ---
schedule = schedule.replace(
  /await addScheduleItem\(trip\.id, newItem\);\s*scheduleModal\.classList\.remove\('active'\);\s*e\.target\.reset\(\);\s*this\.loadSchedules\(trip\.id\);/,
  `const editId = document.getElementById('scheduleItemId').value;
      if (editId) {
        await updateScheduleItem(trip.id, editId, newItem);
      } else {
        await addScheduleItem(trip.id, newItem);
      }
      scheduleModal.classList.remove('active');
      e.target.reset();
      document.getElementById('scheduleItemId').value = '';
      this.loadSchedules(trip.id);`
);

fs.writeFileSync('src/pages/schedule.js', schedule, 'utf8');
