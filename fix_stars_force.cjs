const fs = require('fs');

let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// The block to replace:
// document.querySelectorAll('.star').forEach(star => {
// ...
// });

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

s = s.replace(/document\.querySelectorAll\('\.star'\)\.forEach\(star => \{[\s\S]*?\}\);\s*\}\);/, newStarLogic);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
