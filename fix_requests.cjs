const fs = require('fs');

// 1. Budget.js updates
let budget = fs.readFileSync('src/pages/budget.js', 'utf8');
budget = budget.replace(/t\('addBtn'\) \|\| '追加する ✨'/g, "t('saveBtn') || '保存する ✨'");
fs.writeFileSync('src/pages/budget.js', budget, 'utf8');

// 2. Omiyage.js updates
let omiyage = fs.readFileSync('src/pages/omiyage.js', 'utf8');
omiyage = omiyage.replace(/t\('addBtn'\) \|\| '追加する ✨'/g, "t('saveBtn') || '保存する ✨'");
fs.writeFileSync('src/pages/omiyage.js', omiyage, 'utf8');

// 3. CSS fab-center updates
let css = fs.readFileSync('src/styles/index.css', 'utf8');
if (!css.includes('right: auto !important;')) {
    css = css.replace('.fab-center {\n  left: 50% !important;', '.fab-center {\n  left: 50% !important;\n  right: auto !important;');
    fs.writeFileSync('src/styles/index.css', css, 'utf8');
}

// 4. i18n.js updates
let i18n = fs.readFileSync('src/utils/i18n.js', 'utf8');

const keys = {
    tapToFlip: { ja: 'タップで裏返す 👆', en: 'Tap to flip 👆', th: 'แตะเพื่อพลิก 👆' },
    tapToReturn: { ja: 'タップで戻る 🔙', en: 'Tap to return 🔙', th: 'แตะเพื่อกลับ 🔙' },
    addNewPhrase: { ja: '新しいフレーズを追加 ✏️', en: 'Add New Phrase ✏️', th: 'เพิ่มวลีใหม่ ✏️' },
    wordToSearch: { ja: '調べたい言葉（あなたの言語）', en: 'Word (Your Language)', th: 'คำศัพท์ (ภาษาของคุณ)' },
    wordPlaceholder: { ja: '例: こんにちは', en: 'e.g. Hello', th: 'เช่น สวัสดี' },
    localSaying: { ja: '現地での言い方', en: 'Local Phrase', th: 'วลีท้องถิ่น' },
    localPlaceholder: { ja: '例: สวัสดี', en: 'e.g. Sawadee', th: 'เช่น Hello' },
    readingMemo: { ja: '読み方メモ', en: 'Pronunciation', th: 'การออกเสียง' },
    readingPlaceholder: { ja: '例: サワディー', en: 'e.g. Sa-wa-dee', th: 'เช่น ฮัลโหล' }
};

// Insert into ja
for (const [key, val] of Object.entries(keys)) {
    if (!i18n.includes(`${key}: `)) {
        i18n = i18n.replace(/ja: \{/, `ja: {\n    ${key}: '${val.ja}',`);
        i18n = i18n.replace(/en: \{/, `en: {\n    ${key}: '${val.en}',`);
        i18n = i18n.replace(/th: \{/, `th: {\n    ${key}: '${val.th}',`);
    }
}
// also remove the key return behavior
i18n = i18n.replace('return translations[lang]?.[key] || key;', 'return translations[lang]?.[key];');

fs.writeFileSync('src/utils/i18n.js', i18n, 'utf8');
