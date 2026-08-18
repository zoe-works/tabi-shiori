const fs = require('fs');
let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// Find "const getCategories = () => ({"
// The end of the object should be "});"
// Right now it is:
//   other: { icon: '✨', label: t('catOther') || 'その他' }
// };

s = s.replace(
  "  other: { icon: '✨', label: t('catOther') || 'その他' }\n};",
  "  other: { icon: '✨', label: t('catOther') || 'その他' }\n});"
);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
