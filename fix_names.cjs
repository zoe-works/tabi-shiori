const fs = require('fs');

// 1. home.js
let home = fs.readFileSync('src/pages/home.js', 'utf8');
home = home.replace(
  "const name = await translateUserText(m.name) || '';",
  "const name = m.name || '';"
);
fs.writeFileSync('src/pages/home.js', home, 'utf8');

// 2. omiyage.js
let omiyage = fs.readFileSync('src/pages/omiyage.js', 'utf8');
omiyage = omiyage.replace(
  /const translatedRecipient = await translateUserText\(item\.recipientName\) \|\| item\.recipientName;/,
  "const translatedRecipient = item.recipientName;"
);
fs.writeFileSync('src/pages/omiyage.js', omiyage, 'utf8');
