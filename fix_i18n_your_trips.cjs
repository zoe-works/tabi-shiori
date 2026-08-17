const fs = require('fs');

let content = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', 'utf8');

// Add to ja
content = content.replace("welcomeDesc: '旅行の計画から記録まで、<br>みんなで楽しく作る旅のしおり 🌴',", "welcomeDesc: '旅行の計画から記録まで、<br>みんなで楽しく作る旅のしおり 🌴',\n    yourTrips: 'あなたの旅行',");

// Add to en
content = content.replace("welcomeDesc: 'Plan and record your trips<br>together with everyone! 🌴',", "welcomeDesc: 'Plan and record your trips<br>together with everyone! 🌴',\n    yourTrips: 'Your Trips',");

// Add to th
content = content.replace("welcomeDesc: 'วางแผนและบันทึกการเดินทาง<br>ไปพร้อมกันทุกคน! 🌴',", "welcomeDesc: 'วางแผนและบันทึกการเดินทาง<br>ไปพร้อมกันทุกคน! 🌴',\n    yourTrips: 'ทริปของคุณ',");

fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', content, 'utf8');
console.log('Fixed yourTrips!');
