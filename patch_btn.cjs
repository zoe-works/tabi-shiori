const fs = require('fs');

// Patch i18n.js
let i18n = fs.readFileSync('src/utils/i18n.js', 'utf8');
i18n = i18n.replace(/btnWelcomeCreate: '✨ 新しい旅行を作成',/, "btnWelcomeCreate: '✨ 新しい旅行を作成',\n      btnWelcomeJoin: '🤝 既存の旅行に参加',");
i18n = i18n.replace(/btnWelcomeCreate: '✨ Create New Trip',/, "btnWelcomeCreate: '✨ Create New Trip',\n      btnWelcomeJoin: '🤝 Join Existing Trip',");
i18n = i18n.replace(/btnWelcomeCreate: '✨ สร้างทริปใหม่',/, "btnWelcomeCreate: '✨ สร้างทริปใหม่',\n      btnWelcomeJoin: '🤝 เข้าร่วมทริปที่มีอยู่',");
fs.writeFileSync('src/utils/i18n.js', i18n, 'utf8');

// Patch home.js
let home = fs.readFileSync('src/pages/home.js', 'utf8');
home = home.replace(/class="btn btn-primary w-full"/, 'class="btn btn-primary"');
home = home.replace(/class="btn btn-secondary mt-md w-full"/g, 'class="btn btn-secondary mt-md"');
home = home.replace(/>既存の旅行に参加</, '>${t(\'btnWelcomeJoin\')}<');
fs.writeFileSync('src/pages/home.js', home, 'utf8');
