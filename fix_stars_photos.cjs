const fs = require('fs');

let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// 1. Fix uploadPhoto arguments
s = s.replace(
    /const url = await uploadPhoto\(compressed, `journal\/\$\{trip\.id\}\/\$\{itemId\}\/\$\{Date\.now\(\)\}`\);/,
    "const state = getState();\n             compressed.name = file.name || `photo_${Date.now()}.jpg`;\n             const url = await uploadPhoto(state.user.uid, trip.id, compressed);"
);

// 2. Fix star click / touchmove logic
const oldStarLogic = `      document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', (e) => {
          const rect = e.target.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const isHalf = x < rect.width / 2;
          const rating = parseInt(e.target.dataset.rating) - (isHalf ? 0.5 : 0);
          document.getElementById('journalRating').value = rating;
          
          document.querySelectorAll('.star').forEach(s => {
            const sRating = parseInt(s.dataset.rating);
            s.classList.remove('full', 'half');
            if (sRating <= rating) {
              s.classList.add('full');
            } else if (sRating - 0.5 === rating) {
              s.classList.add('half');
            }
          });
        });
      });`;

const newStarLogic = `      const updateStars = (clientX, container) => {
        const stars = Array.from(container.querySelectorAll('.star'));
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

if (s.includes("star.addEventListener('click', (e) => {")) {
    s = s.replace(oldStarLogic, newStarLogic);
}

// 3. Fix Edit modal UI reset query to only target modal stars
s = s.replace(
    /document\.querySelectorAll\('\.star'\)\.forEach\(s => \{/g,
    "document.querySelectorAll('#journalForm .star').forEach(s => {"
);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
