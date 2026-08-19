const fs = require('fs');

// 1. Omiyage JS overlay click
let omiyage = fs.readFileSync('src/pages/omiyage.js', 'utf8');
omiyage = omiyage.replace(
  `cancelBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            form.reset();
        });

        form.addEventListener('submit', async (e) => {`,
  `cancelBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            form.reset();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                form.reset();
            }
        });

        form.addEventListener('submit', async (e) => {`
);
fs.writeFileSync('src/pages/omiyage.js', omiyage, 'utf8');

// 2. Schedule JS overlay click and modal handle
let schedule = fs.readFileSync('src/pages/schedule.js', 'utf8');
// Add modal handle to both modals
schedule = schedule.replace(
  `<div class="modal-content">\n            <span class="close-modal">&times;</span>`,
  `<div class="modal-content">\n            <div class="modal-handle"></div>\n            <span class="close-modal">&times;</span>`
);
schedule = schedule.replace(
  `<div class="modal-content">\n            <span class="close-modal">&times;</span>`,
  `<div class="modal-content">\n            <div class="modal-handle"></div>\n            <span class="close-modal">&times;</span>`
);
// Add overlay click listener for scheduleModal and journalModal
const oldCloseModal = `document.querySelectorAll('.close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        scheduleModal.classList.remove('active');
        journalModal.classList.remove('active');
        document.getElementById('scheduleForm').reset();
        document.getElementById('journalForm').reset();
      });
    });`;
const newCloseModal = oldCloseModal + `

    scheduleModal.addEventListener('click', (e) => {
      if (e.target === scheduleModal) {
        scheduleModal.classList.remove('active');
        document.getElementById('scheduleForm').reset();
        document.getElementById('scheduleItemId').value = '';
      }
    });

    journalModal.addEventListener('click', (e) => {
      if (e.target === journalModal) {
        journalModal.classList.remove('active');
        document.getElementById('journalForm').reset();
      }
    });
`;
schedule = schedule.replace(oldCloseModal, newCloseModal);

// 3. What about the animation? Wait... 
// Why did the user say "ジャーナルポップアップのせり上がりと、スケジュールポップアップのせり上がりが違う"?
// I suspect it's because scheduleModal was shown with `requestAnimationFrame` indirectly or there's a difference in `transition`?
// In index.css:
// .modal-overlay.active .modal-content { transform: translateY(0); }
// .modal-content { transition: transform var(--transition-slow); }
// There is NO difference in their CSS.
// Maybe the user means the height jumps? 

fs.writeFileSync('src/pages/schedule.js', schedule, 'utf8');

// 4. Fix CH (Switzerland) research questions in data/research.js? No, wait. 
// "リサーチノートなんだけど添付の画像でCH（スイス）だけ質問項目が違う、他の２つと一緒にして"
// Let's check `src/pages/research.js` or `src/data/research.js`.
