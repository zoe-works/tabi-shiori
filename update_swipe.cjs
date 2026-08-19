const fs = require('fs');

// 1. Update i18n.js
let code = fs.readFileSync('src/utils/i18n.js', 'utf8');
code = code.replace(/confirmDelete: '本当に削除しますか？',/g, "confirmDelete: '本当に削除しますか？',\n    deleteAction: '削除',");
code = code.replace(/confirmDelete: 'Are you sure you want to delete\?',/g, "confirmDelete: 'Are you sure you want to delete?',\n    deleteAction: 'Delete',");
code = code.replace(/confirmDelete: 'คุณแน่ใจหรือไม่ว่าต้องการลบ\?',/g, "confirmDelete: 'คุณแน่ใจหรือไม่ว่าต้องการลบ?',\n    deleteAction: 'ลบ',");
fs.writeFileSync('src/utils/i18n.js', code, 'utf8');

// 2. Update schedule.js
let schedule = fs.readFileSync('src/pages/schedule.js', 'utf8');

// replace the hardcoded "削除" text with i18n
schedule = schedule.replace(
  `              削除\n            </div>`,
  `              \${t('deleteAction') || '削除'}\n            </div>`
);

// update transition speed to 0.8s
schedule = schedule.replace(
  `wrapper.style.transition = 'transform 0.4s ease-out';`,
  `wrapper.style.transition = 'transform 0.8s ease-out';`
);

// update transition duration inline css for swipe bg if we want
schedule = schedule.replace(
  `transition: opacity 0.2s;"`,
  `transition: opacity 0.4s;"`
);

fs.writeFileSync('src/pages/schedule.js', schedule, 'utf8');
