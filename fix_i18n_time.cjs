const fs = require('fs');

let content = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', 'utf8');

content = content.replace("addScheduleModalTitle: '予定を追加',", "addScheduleModalTitle: '予定を追加',\n    timeLabel: '時間',");
content = content.replace("addScheduleModalTitle: 'Add Schedule',", "addScheduleModalTitle: 'Add Schedule',\n    timeLabel: 'Time',");
content = content.replace("addScheduleModalTitle: 'เพิ่มกำหนดการ',", "addScheduleModalTitle: 'เพิ่มกำหนดการ',\n    timeLabel: 'เวลา',");

fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', content, 'utf8');
console.log('Fixed timeLabel!');
