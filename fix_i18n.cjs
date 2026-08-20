const fs = require('fs');
let code = fs.readFileSync('src/utils/i18n.js', 'utf8');

// JA
code = code.replace(
  "catFood: '食費',\n    catTransport: '交通費',\n    catShopping: '買い物',",
  "catFood: '食費',\n    catBudgetTransport: '交通費',\n    catShopping: '買い物',"
);
code = code.replace(
  "catOther: 'その他',",
  "catOther: 'その他',\n    catFlight: 'フライト',"
);

// EN
code = code.replace(
  "catFood: 'Food',\n    catTransport: 'Transport',\n    catShopping: 'Shopping',",
  "catFood: 'Food',\n    catBudgetTransport: 'Transport',\n    catShopping: 'Shopping',"
);
code = code.replace(
  "catOther: 'Other',",
  "catOther: 'Other',\n    catFlight: 'Flight',"
);

// TH
code = code.replace(
  "catFood: 'ค่าอาหาร',\n    catTransport: 'ค่าเดินทาง',\n    catShopping: 'ช้อปปิ้ง',",
  "catFood: 'ค่าอาหาร',\n    catBudgetTransport: 'ค่าเดินทาง',\n    catShopping: 'ช้อปปิ้ง',"
);
code = code.replace(
  "catOther: 'อื่นๆ',",
  "catOther: 'อื่นๆ',\n    catFlight: 'เที่ยวบิน',"
);

fs.writeFileSync('src/utils/i18n.js', code, 'utf8');
