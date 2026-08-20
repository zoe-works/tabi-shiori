const fs = require('fs');

// 1. Update i18n.js
let i18n = fs.readFileSync('src/utils/i18n.js', 'utf8');
i18n = i18n.replace(/noOmiyageList: '右下の＋ボタンからお土産リストを追加しよう！',/g, "noOmiyageList: '＋ボタンからお土産リストを追加しよう！',");
fs.writeFileSync('src/utils/i18n.js', i18n, 'utf8');

// 2. Update budget.js
let budget = fs.readFileSync('src/pages/budget.js', 'utf8');
budget = budget.replace(/await addBudgetItem\(newItem\);/g, "await addBudgetItem(tripId, newItem);");
fs.writeFileSync('src/pages/budget.js', budget, 'utf8');

// 3. Update omiyage.js
let omiyage = fs.readFileSync('src/pages/omiyage.js', 'utf8');
omiyage = omiyage.replace(/await updateOmiyageItem\(id,/g, "await updateOmiyageItem(tripId, id,");
omiyage = omiyage.replace(/await deleteOmiyageItem\(id\);/g, "await deleteOmiyageItem(tripId, id);");
omiyage = omiyage.replace(/await addOmiyageItem\(newItem\);/g, "await addOmiyageItem(tripId, newItem);");
fs.writeFileSync('src/pages/omiyage.js', omiyage, 'utf8');
