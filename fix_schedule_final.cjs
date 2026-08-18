const fs = require('fs');
let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// 1. Remove duplicate star event listener
const regex = /document\.querySelectorAll\('\.star'\)\.forEach\(star => \{\s*star\.addEventListener\('click', \(e\) => \{\s*const rating = parseInt\(e\.target\.dataset\.rating\);\s*document\.getElementById\('journalRating'\)\.value = rating;\s*document\.querySelectorAll\('\.star'\)\.forEach\(s => \{\s*s\.style\.color = parseInt\(s\.dataset\.rating\) <= rating \? 'gold' : '#ccc';\s*\}\);\s*\}\);\s*\}\);\s*/;
s = s.replace(regex, '');

// 2. Fix timeline stars
s = s.replace(
  /const stars = ['"`].*?repeat\(item\.journalRating \|\| 0\).*?;\s*/,
  `const r = parseFloat(item.journalRating || 0);
            const fullStars = Math.floor(r);
            const hasHalf = r % 1 !== 0;
            const emptyStars = 5 - Math.ceil(r);
            const stars = '<span class="star full" style="font-size:1rem; cursor:default; transform:none;">★</span>'.repeat(fullStars) + 
                          (hasHalf ? '<span class="star half" style="font-size:1rem; cursor:default; transform:none;">★</span>' : '') + 
                          '<span class="star" style="font-size:1rem; cursor:default; transform:none; color:#E0E0E0;">★</span>'.repeat(emptyStars);\n`
);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
