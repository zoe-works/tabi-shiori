const fs = require('fs');
let s = fs.readFileSync('src/pages/emergency.js', 'utf8');

const target = "};";
const index = s.indexOf(target, s.indexOf('const getCategories'));
if (index !== -1) {
  s = s.substring(0, index) + "});" + s.substring(index + 2);
  fs.writeFileSync('src/pages/emergency.js', s, 'utf8');
}
