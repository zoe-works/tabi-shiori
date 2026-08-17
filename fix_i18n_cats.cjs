const fs = require('fs');

let content = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', 'utf8');

// Add to ja
content = content.replace('noItems: \'まだアイテムがありません\',', 'noItems: \'まだアイテムがありません\',\n    catDocuments: \'📄 書類\',\n    catElectronics: \'🔌 電子機器\',\n    catClothing: \'👕 衣類\',\n    catToiletries: \'🧴 洗面用品\',\n    catOtherList: \'📦 その他\',');

// Add to en
content = content.replace('noItems: \'No items yet\',', 'noItems: \'No items yet\',\n    catDocuments: \'📄 Documents\',\n    catElectronics: \'🔌 Electronics\',\n    catClothing: \'👕 Clothing\',\n    catToiletries: \'🧴 Toiletries\',\n    catOtherList: \'📦 Other\',');

// Add to th
content = content.replace('noItems: \'ยังไม่มีสิ่งของ\',', 'noItems: \'ยังไม่มีสิ่งของ\',\n    catDocuments: \'📄 เอกสาร\',\n    catElectronics: \'🔌 อุปกรณ์อิเล็กทรอนิกส์\',\n    catClothing: \'👕 เสื้อผ้า\',\n    catToiletries: \'🧴 ของใช้ส่วนตัว\',\n    catOtherList: \'📦 อื่นๆ\',');

fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', content, 'utf8');
console.log('Done cat fixes!');
