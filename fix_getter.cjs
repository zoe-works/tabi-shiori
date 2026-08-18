const fs = require('fs');
let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

s = s.replace("const getCategories() = {", "const getCategories = () => ({");

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
