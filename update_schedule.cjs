const fs = require('fs');

// 1. Update i18n.js
let i18n = fs.readFileSync('src/utils/i18n.js', 'utf8');

const jaCat = `
    catSightseeing: '観光',
    catMeal: '食事',
    catTransport: '移動',
    catHotelSch: 'ホテル',
    catShopping: '買い物',
    catActivity: '体験',
    catOther: 'その他',`;

const enCat = `
    catSightseeing: 'Sightseeing',
    catMeal: 'Meal',
    catTransport: 'Transport',
    catHotelSch: 'Hotel',
    catShopping: 'Shopping',
    catActivity: 'Activity',
    catOther: 'Other',`;

const thCat = `
    catSightseeing: 'ท่องเที่ยว',
    catMeal: 'อาหาร',
    catTransport: 'เดินทาง',
    catHotelSch: 'โรงแรม',
    catShopping: 'ช้อปปิ้ง',
    catActivity: 'กิจกรรม',
    catOther: 'อื่นๆ',`;

i18n = i18n.replace(/emergencyTitle: '緊急連絡先',/, "emergencyTitle: '緊急連絡先'," + jaCat);
i18n = i18n.replace(/emergencyTitle: 'Emergency',/, "emergencyTitle: 'Emergency'," + enCat);
i18n = i18n.replace(/emergencyTitle: 'ติดต่อฉุกเฉิน',/, "emergencyTitle: 'ติดต่อฉุกเฉิน'," + thCat);

fs.writeFileSync('src/utils/i18n.js', i18n, 'utf8');

// 2. Update schedule.js
let schedule = fs.readFileSync('src/pages/schedule.js', 'utf8');

schedule = schedule.replace(
  /catHotel'\) \|\| 'ホテル'/g, 
  "catHotelSch') || 'ホテル'"
);

schedule = schedule.replace(
  /<div class=\"form-group mb-sm\">\s*<label class=\"form-label\" style=\"display:block; margin-bottom:4px; font-size:0.9rem; color:var\(--text-muted\);\">(.*?)<\/label>\s*<input type=\"time\" id=\"itemTime\" class=\"form-input\" style=\"width:100%; padding:12px; border-radius:8px; border:1px solid #ddd;\" required>\s*<\/div>/g,
  `<div class="form-group mb-sm" style="position:relative;">
                <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--text-muted); pointer-events:none;">$1</span>
                <input type="time" id="itemTime" class="form-input" style="width:100%; padding:12px 12px 12px 60px; border-radius:8px; border:1px solid #ddd;" required>
              </div>`
);

fs.writeFileSync('src/pages/schedule.js', schedule, 'utf8');
