const fs = require('fs');

let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// The problematic snippet is:
// <input type="hidden" id="journalMood">
// </div>
// It is between <input type="hidden" id="journalItemId"> and <div class="mb-sm">

s = s.replace(
    /\s*<input type="hidden" id="journalMood">\s*<\/div>/,
    ''
);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
