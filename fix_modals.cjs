const fs = require('fs');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // HTML Modal structure
    content = content.replace(/class="modal hidden"/g, 'class="modal-overlay"');
    content = content.replace(/<div class="modal-content">/g, '<div class="modal-content">\n                        <div class="modal-handle"></div>');
    
    // JS Logic
    content = content.replace(/modal\.classList\.remove\('hidden'\)/g, 'modal.classList.add(\'active\')');
    content = content.replace(/modal\.classList\.add\('hidden'\)/g, 'modal.classList.remove(\'active\')');
    
    // Add backdrop click listener if not already added
    if (!content.includes('modal.addEventListener(\'click\'')) {
        content = content.replace(/form\.reset\(\);\n\s*\}\);/g, 'form.reset();\n        });\n\n        modal.addEventListener(\'click\', (e) => {\n            if(e.target === modal) {\n                modal.classList.remove(\'active\');\n            }\n        });');
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

processFile('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/pages/budget.js');
processFile('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/pages/omiyage.js');
console.log('Fixed modals!');
