const fs = require('fs');
let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

const target = "};";
const index = s.indexOf(target, s.indexOf('const getCategories'));
if (index !== -1) {
  s = s.substring(0, index) + "});" + s.substring(index + 2);
  fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
}
