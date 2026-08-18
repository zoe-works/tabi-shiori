const fs = require('fs');

let code = fs.readFileSync('src/pages/emergency.js', 'utf8');

// Replace class
code = code.replace('<div id="emergency-modal" class="modal hidden">', '<div id="emergency-modal" class="modal-overlay">');

// Replace show modal
code = code.replace("document.getElementById('emergency-modal').classList.remove('hidden');", "document.getElementById('emergency-modal').classList.add('active');");

// Replace hide modal
code = code.replace(/modal\.classList\.add\('hidden'\);/g, "modal.classList.remove('active');");

// Add background click handler if missing
if (!code.includes("modal.addEventListener('click'")) {
    code = code.replace(
        "const cancelBtn = document.getElementById('em-cancel');",
        "const cancelBtn = document.getElementById('em-cancel');\n        modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });"
    );
}

fs.writeFileSync('src/pages/emergency.js', code, 'utf8');
