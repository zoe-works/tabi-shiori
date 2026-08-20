const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

const jsCode = `
// Global Loading Spinner setup
document.addEventListener('DOMContentLoaded', () => {
  const spinnerOverlay = document.createElement('div');
  spinnerOverlay.id = 'global-spinner-overlay';
  spinnerOverlay.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(spinnerOverlay);

  subscribe('isLoading', (isLoading) => {
    if (isLoading) {
      spinnerOverlay.classList.add('active');
    } else {
      spinnerOverlay.classList.remove('active');
    }
  });
});
`;

code = code + '\n' + jsCode;
fs.writeFileSync('src/main.js', code, 'utf8');
