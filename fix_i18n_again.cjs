const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.js', 'utf8');

code = code.replace(/catFood:\s*'食費',\s*catTransport:\s*'交通費'/g, "catFood: '食費',\n    catBudgetTransport: '交通費'");
code = code.replace(/catFood:\s*'Food',\s*catTransport:\s*'Transport'/g, "catFood: 'Food',\n    catBudgetTransport: 'Transport'");
code = code.replace(/catFood:\s*'ค่าอาหาร',\s*catTransport:\s*'ค่าเดินทาง'/g, "catFood: 'ค่าอาหาร',\n    catBudgetTransport: 'ค่าเดินทาง'");

fs.writeFileSync('src/utils/i18n.js', code, 'utf8');
