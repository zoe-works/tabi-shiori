const fs = require('fs');

let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// 1. Remove mood HTML
s = s.replace(
  /<div class="mood-selector mb-sm">[\s\S]*?<\/div>/,
  ''
);

// 2. Remove mood JS logic
s = s.replace(
  /document\.querySelectorAll\('\.mood-option'\)\.forEach\(opt => \{[\s\S]*?\}\);\s*\}\);/,
  ''
);

// 3. Remove mood from renderTimeline
s = s.replace(
  /\$\{item\.journalMood \? `<span class="journal-mood">\$\{item\.journalMood\}<\/span>` : ''\}/,
  ''
);

// 4. Fix journal form submit logic (trip.id missing, mood removed, parseFloat for rating, 'active' class)
s = s.replace(
  /const mood = document\.getElementById\('journalMood'\)\.value;\s*const rating = document\.getElementById\('journalRating'\)\.value;/,
  "const rating = document.getElementById('journalRating').value;"
);
s = s.replace(
  /await updateScheduleItem\(itemId, \{\s*journalText: text,\s*journalMood: mood,\s*journalRating: parseInt\(rating\),\s*journalPhotos: photos\s*\}\);/,
  `await updateScheduleItem(trip.id, itemId, {
        journalText: text,
        journalRating: parseFloat(rating),
        journalPhotos: photos
      });`
);
s = s.replace(
  /journalModal\.classList\.remove\('show'\);/,
  "journalModal.classList.remove('active');"
);

// 5. Fix star rating color class wrapper (remove star-rating class which adds grayscale)
s = s.replace(
  /<div class="star-rating mb-sm">/,
  '<div class="mb-sm">'
);

// 6. Fix edit journal UI reset logic (mood removed, parseFloat instead of parseInt for rating)
s = s.replace(
  /document\.getElementById\('journalMood'\)\.value = item\.journalMood \|\| '';/,
  ''
);
s = s.replace(
  /\/\/ UI reset\s*document\.querySelectorAll\('\.mood-option'\)\.forEach\(o => \{\s*o\.classList\.toggle\('selected', o\.dataset\.mood === item\.journalMood\);\s*\}\);/,
  ''
);
s = s.replace(
  /const r = parseFloat\(item\.journalRating \|\| 0\);\s*document\.querySelectorAll\('\.star'\)\.forEach\(s => \{\s*const sRating = parseInt\(s\.dataset\.rating\);\s*s\.classList\.remove\('full', 'half'\);\s*s\.style\.color = '';\s*if \(sRating <= r\) \{\s*s\.classList\.add\('full'\);\s*\} else if \(sRating - 0\.5 === r\) \{\s*s\.classList\.add\('half'\);\s*\}\s*\}\);/,
  `const r = parseFloat(item.journalRating || 0);
          document.querySelectorAll('.star').forEach(s => {
            const sRating = parseInt(s.dataset.rating);
            s.classList.remove('full', 'half');
            s.style.color = '';
            if (sRating <= r) {
              s.classList.add('full');
            } else if (sRating - 0.5 === r) {
              s.classList.add('half');
            }
          });`
);

// 7. Fix half-star logic when clicking on star (it should use parseFloat on journalRating value since it's a hidden input)
s = s.replace(
  /document\.getElementById\('journalRating'\)\.value = rating;/,
  "document.getElementById('journalRating').value = rating;"
);


fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
