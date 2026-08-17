const fs = require('fs');

let content = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', 'utf8');

const ja_rq = `    rq1: '首都・人口・面積・公用語・・・',\n    rq2: '現地通貨は？',\n    rq3: '現地の人の性格は？',\n    rq4: '食文化・・・',\n    rq5: 'コンビニなどの便利なお店は？',\n    rq6: '移動手段はどう違う？',\n    rq7: '家やトイレはどんな感じ？',\n    rq8: '実際に行きたい場所3つ',\n    rq9: '食べたいもの3つ',`;
const en_rq = `    rq1: 'Capital, Population, Area, Official Language...',\n    rq2: 'Local Currency?',\n    rq3: 'Local Personality?',\n    rq4: 'Food Culture...',\n    rq5: 'Convenience Stores?',\n    rq6: 'Transportation Differences?',\n    rq7: 'Houses and Toilets?',\n    rq8: '3 Places I want to go',\n    rq9: '3 Foods I want to eat',`;
const th_rq = `    rq1: 'เมืองหลวง ประชากร พื้นที่ ภาษา...',\n    rq2: 'สกุลเงินท้องถิ่น?',\n    rq3: 'นิสัยคนท้องถิ่น?',\n    rq4: 'วัฒนธรรมอาหาร...',\n    rq5: 'ร้านสะดวกซื้อ?',\n    rq6: 'การเดินทางต่างกันอย่างไร?',\n    rq7: 'บ้านและห้องน้ำ?',\n    rq8: '3 สถานที่ที่อยากไป',\n    rq9: '3 อาหารที่อยากกิน',`;

// Add to ja
content = content.replace('catOtherList: \'📦 その他\',', 'catOtherList: \'📦 その他\',\n' + ja_rq);

// Add to en
content = content.replace('catOtherList: \'📦 Other\',', 'catOtherList: \'📦 Other\',\n' + en_rq);

// Add to th
content = content.replace('catOtherList: \'📦 อื่นๆ\',', 'catOtherList: \'📦 อื่นๆ\',\n' + th_rq);

fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', content, 'utf8');
console.log('Done rq fixes!');
