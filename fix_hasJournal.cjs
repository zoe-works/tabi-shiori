const fs = require('fs');
let s = fs.readFileSync('src/pages/schedule.js', 'utf8');
s = s.replace(/item\.journalMood \|\|/g, 'item.journalRating ||');
fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
