const fs = require('fs');
let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// 1. categories getter
s = s.replace(
  /const categories = {[\s\S]*?};\n/,
  `const getCategories = () => ({
  sightseeing: { icon: '🏛️', label: t('catSightseeing') || '観光' },
  meal: { icon: '🍽️', label: t('catMeal') || '食事' },
  transport: { icon: '🚌', label: t('catTransport') || '移動' },
  hotel: { icon: '🏨', label: t('catHotelSch') || 'ホテル' },
  shopping: { icon: '🛒', label: t('catShopping') || '買い物' },
  activity: { icon: '🎭', label: t('catActivity') || '体験' },
  other: { icon: '✨', label: t('catOther') || 'その他' }
});\n`
);
s = s.replace(/categories/g, 'getCategories()');

// 2. hidden scheduleItemId
if (!s.includes('<input type="hidden" id="scheduleItemId">')) {
  s = s.replace(
    /<form id="scheduleForm">/,
    `<form id="scheduleForm">\n              <input type="hidden" id="scheduleItemId">`
  );
}

// 3. star rating emojis to chars
s = s.replace(
  /\$\{\[1,2,3,4,5\]\.map\(s => `<span class="star" data-rating="\$\{s\}">⭐<\/span>`\)\.join\(''\)\}/g,
  "${[1,2,3,4,5].map(s => `<span class=\"star\" data-rating=\"${s}\">★</span>`).join('')}"
);

// 4. timeline stars
s = s.replace(
  /const stars = '⭐'\.repeat\(item\.journalRating \|\| 0\) \+ '⭐'\.repeat\(5 - \(item\.journalRating \|\| 0\)\);/,
  `const r = parseFloat(item.journalRating || 0);
            const fullStars = Math.floor(r);
            const hasHalf = r % 1 !== 0;
            const emptyStars = 5 - Math.ceil(r);
            const stars = '<span style="color:gold;">★</span>'.repeat(fullStars) + 
                          (hasHalf ? '<span style="background: linear-gradient(to right, gold 50%, #ccc 50%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">★</span>' : '') + 
                          '<span style="color:#ccc;">★</span>'.repeat(emptyStars);`
);

// 5. Star click logic
s = s.replace(
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

// 6. UI reset edit journal
s = s.replace(
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

// 7. Form cancel reset
s = s.replace(
  /document\.getElementById\('scheduleModal'\)\.classList\.remove\('active'\);\s*document\.getElementById\('scheduleForm'\)\.reset\(\);/,
  `document.getElementById('scheduleModal').classList.remove('active');
        document.getElementById('scheduleForm').reset();
        document.getElementById('scheduleItemId').value = '';`
);

// 8. Tap to edit
if (!s.includes("wrapper.addEventListener('click', (e) => {")) {
  s = s.replace(
    /wrapper\.addEventListener\('touchend', async \(e\) => \{/,
    `wrapper.addEventListener('click', (e) => {
        if (currentMode !== 'plan') return;
        if (Math.abs(currentX) > 10) return; // swipe detected
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

// 9. Add button reset
s = s.replace(
  /document\.getElementById\('addScheduleBtn'\)\.addEventListener\('click', \(\) => \{\s*scheduleModal\.classList\.add\('active'\);\s*\}\);/,
  `document.getElementById('addScheduleBtn').addEventListener('click', () => {
      document.getElementById('scheduleItemId').value = '';
      document.getElementById('scheduleForm').reset();
      scheduleModal.classList.add('active');
    });`
);

// 10. Form submit
s = s.replace(
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

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');

let e = fs.readFileSync('src/pages/emergency.js', 'utf8');
if (!e.includes('getCategories = () =>')) {
  e = e.replace(
    /const CATEGORIES = {[\s\S]*?};\n/,
    `const getCategories = () => ({
    police: { icon: '🚨', label: t('catPolice') || '警察・消防・救急' },
    hotel: { icon: '🏨', label: t('catHotel') || 'ホテルの連絡先' },
    embassy: { icon: '🏛️', label: t('catEmbassy') || '大使館の連絡先' },
    insurance: { icon: '🛡️', label: t('catInsurance') || '海外旅行保険' }
});\n`
  );
  e = e.replace(/CATEGORIES/g, 'getCategories()');
}

if (!e.includes("emModal.addEventListener('click', (e) => {")) {
  e = e.replace(
    /document\.querySelectorAll\('\.close-modal'\)\.forEach\(btn => {/,
    `emModal.addEventListener('click', (e) => {
        if (e.target === emModal) emModal.classList.remove('active');
    });
    
    document.querySelectorAll('.close-modal').forEach(btn => {`
  );
}
fs.writeFileSync('src/pages/emergency.js', e, 'utf8');
