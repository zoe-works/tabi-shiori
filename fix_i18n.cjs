const fs = require('fs');

let content = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', 'utf8');

// 1. Remove emojis
content = content.replace(/🗣️ /g, '')
                 .replace(/🎒 /g, '')
                 .replace(/📅 /g, '')
                 .replace(/🔍 /g, '')
                 .replace(/💰 /g, '')
                 .replace(/ 💰/g, '')
                 .replace(/📞 /g, '')
                 .replace(/ 📞/g, '')
                 .replace(/🎁 /g, '')
                 .replace(/ 🎁/g, '');

// 2. Add translation keys for settings page
content = content.replace('// 追加', 'settings: \'設定\',\n    checklistMasterTitle: \'持ち物チェック 初期マスタ設定\',\n    checklistMasterDesc: \'新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。\',\n    loginRequiredForSettings: \'設定を変更するにはログインが必要です。\',\n    newlineSeparated: \'改行区切りでアイテムを入力してください。\',\n    saveBtn: \'保存する\',\n    savedExclamation: \'保存しました！\',\n    saveFailed: \'保存に失敗しました: \',\n\n    // 追加');

content = content.replace('// 追加\n    preparing: \'Preparing...\'', 'settings: \'Settings\',\n    checklistMasterTitle: \'Checklist Initial Master Settings\',\n    checklistMasterDesc: \'When you create a new trip, these items will be automatically added to your checklist.\',\n    loginRequiredForSettings: \'You must be logged in to change settings.\',\n    newlineSeparated: \'Enter items separated by newlines.\',\n    saveBtn: \'Save\',\n    savedExclamation: \'Saved!\',\n    saveFailed: \'Failed to save: \',\n\n    preparing: \'Preparing...\'');

content = content.replace('preparing: \'กำลังเตรียม...\'', 'settings: \'การตั้งค่า\',\n    checklistMasterTitle: \'ตั้งค่ารายการของเริ่มต้น\',\n    checklistMasterDesc: \'เมื่อสร้างทริปใหม่ สิ่งของเหล่านี้จะถูกเพิ่มเข้าไปในรายการของของคุณโดยอัตโนมัติ\',\n    loginRequiredForSettings: \'คุณต้องเข้าสู่ระบบเพื่อเปลี่ยนการตั้งค่า\',\n    newlineSeparated: \'ป้อนรายการโดยแยกด้วยการขึ้นบรรทัดใหม่\',\n    saveBtn: \'บันทึก\',\n    savedExclamation: \'บันทึกแล้ว!\',\n    saveFailed: \'บันทึกไม่สำเร็จ: \',\n\n    preparing: \'กำลังเตรียม...\'');

fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', content, 'utf8');
console.log('Done!');
