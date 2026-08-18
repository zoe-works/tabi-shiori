const fs = require('fs');

// 1. Fix emergency.js
let emergency = fs.readFileSync('src/pages/emergency.js', 'utf8');
emergency = emergency.replace(
  /const CATEGORIES = {[\s\S]*?};\n/,
  `const getCategories = () => ({
    police: { icon: '🚨', label: t('catPolice') || '警察・消防・救急' },
    hotel: { icon: '🏨', label: t('catHotel') || 'ホテルの連絡先' },
    embassy: { icon: '🏛️', label: t('catEmbassy') || '大使館の連絡先' },
    insurance: { icon: '🛡️', label: t('catInsurance') || '海外旅行保険' }
});\n`
);
emergency = emergency.replace(/CATEGORIES/g, 'getCategories()');

// Also add background click to close modal in emergency.js
if (!emergency.includes("emModal.addEventListener('click', (e) => {")) {
  emergency = emergency.replace(
    /document\.querySelectorAll\('\.close-modal'\)\.forEach\(btn => {/,
    `emModal.addEventListener('click', (e) => {
        if (e.target === emModal) emModal.classList.remove('active');
    });
    
    document.querySelectorAll('.close-modal').forEach(btn => {`
  );
}

fs.writeFileSync('src/pages/emergency.js', emergency, 'utf8');

// 2. Fix schedule.js
let schedule = fs.readFileSync('src/pages/schedule.js', 'utf8');

schedule = schedule.replace(
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
schedule = schedule.replace(/categories/g, 'getCategories()');

// Fix the hidden input for schedule edits
if (!schedule.includes('<input type="hidden" id="scheduleItemId">')) {
  schedule = schedule.replace(
    /<form id="scheduleForm">/,
    `<form id="scheduleForm">\n              <input type="hidden" id="scheduleItemId">`
  );
}

fs.writeFileSync('src/pages/schedule.js', schedule, 'utf8');
console.log("Translation fixes applied.");
