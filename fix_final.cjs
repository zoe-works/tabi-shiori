const fs = require('fs');
let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// The replacement logic:
s = s.replace(
  /<div class="mood-selector mb-sm">[\s\S]*?<input type="hidden" id="journalMood">\s*<\/div>/,
  ''
);

s = s.replace(
  /<div class="star-rating mb-sm">/,
  '<div class="mb-sm">'
);

s = s.replace(
  /const url = await uploadPhoto\(compressed, `journal\/\$\{trip\.id\}\/\$\{itemId\}\/\$\{Date\.now\(\)\}`\);/,
  "const state = getState();\n             compressed.name = file.name || `photo_${Date.now()}.jpg`;\n             const url = await uploadPhoto(state.user.uid, trip.id, compressed);"
);

s = s.replace(
  /await updateScheduleItem\(itemId, \{/,
  "await updateScheduleItem(trip.id, itemId, {"
);

s = s.replace(
  /journalRating: parseInt\(rating\),/,
  "journalRating: parseFloat(rating),"
);

s = s.replace(
  /journalModal\.classList\.remove\('show'\);/,
  "journalModal.classList.remove('active');"
);

s = s.replace(
  /const mood = document\.getElementById\('journalMood'\)\.value;\s*/,
  ""
);
s = s.replace(
  /journalMood: mood,\s*/,
  ""
);
s = s.replace(
  /document\.querySelectorAll\('\.mood-option'\)\.forEach\(opt => \{[\s\S]*?\}\);\s*\}\);\s*/,
  ""
);
s = s.replace(
  /document\.getElementById\('journalMood'\)\.value = item\.journalMood \|\| '';\s*/,
  ""
);
s = s.replace(
  /\/\/ UI reset\s*document\.querySelectorAll\('\.mood-option'\)\.forEach\(o => \{\s*o\.classList\.toggle\('selected', o\.dataset\.mood === item\.journalMood\);\s*\}\);\s*/,
  "// UI reset\n          "
);
s = s.replace(
  /\$\{item\.journalMood \? `<span class="journal-mood">\$\{item\.journalMood\}<\/span>` : ''\}\s*/,
  ""
);

s = s.replace(
  /const hasJournal = item\.journalText \|\| item\.journalMood \|\| \(item\.journalPhotos && item\.journalPhotos\.length > 0\);/,
  "const hasJournal = item.journalText || item.journalRating || (item.journalPhotos && item.journalPhotos.length > 0);"
);

const newStarLogic = `// 星評価のUI (タップとスワイプ両対応)
    const updateStars = (clientX, container) => {
      const stars = Array.from(container.querySelectorAll('.star'));
      if (stars.length === 0) return;
      let rating = 0;
      let matched = false;
      for (let s of stars) {
        const rect = s.getBoundingClientRect();
        if (clientX >= rect.left && clientX <= rect.right) {
          const x = clientX - rect.left;
          const isHalf = x < rect.width / 2;
          rating = parseInt(s.dataset.rating) - (isHalf ? 0.5 : 0);
          matched = true;
        }
      }
      if (!matched && clientX > stars[stars.length-1].getBoundingClientRect().right) {
        rating = 5;
      }
      if (rating > 0) {
        document.getElementById('journalRating').value = rating;
        stars.forEach(s => {
          const sRating = parseInt(s.dataset.rating);
          s.classList.remove('full', 'half');
          if (sRating <= rating) {
            s.classList.add('full');
          } else if (sRating - 0.5 === rating) {
            s.classList.add('half');
          }
        });
      }
    };

    const starsContainer = document.querySelector('#journalForm .stars');
    if (starsContainer) {
      starsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('star')) {
          updateStars(e.clientX, starsContainer);
        }
      });
      starsContainer.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        updateStars(touch.clientX, starsContainer);
      }, {passive: true});
    }`;

// Replace the specific star logic without breaking brackets.
const oldLogicStart = "document.querySelectorAll('.star').forEach(star => {";
const oldLogicEnd = "});\n    });";

const idx1 = s.indexOf(oldLogicStart);
if (idx1 !== -1) {
    const idx2 = s.indexOf(oldLogicEnd, idx1);
    if (idx2 !== -1) {
        const toReplace = s.substring(idx1, idx2 + oldLogicEnd.length);
        s = s.replace(toReplace, newStarLogic);
    }
}

s = s.replace(
  /document\.querySelectorAll\('\.star'\)\.forEach\(s => \{\s*const sRating = parseInt\(s\.dataset\.rating\);\s*s\.classList\.remove\('full', 'half'\);\s*s\.style\.color = '';/g,
  "document.querySelectorAll('#journalForm .star').forEach(s => {\n              const sRating = parseInt(s.dataset.rating);\n              s.classList.remove('full', 'half');\n              s.style.color = '';"
);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
