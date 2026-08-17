const fs = require('fs');

let budget = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/pages/budget.js', 'utf8');
budget = budget.replace('class="fab" id="budget-fab"', 'class="fab fab-center" id="budget-fab"');
budget = budget.replace('<button type="submit" class="btn-primary">${t(\'addBtn\') || \'追加する ✨\'}</button>', '<button type="submit" class="btn-fancy">${t(\'addBtn\') || \'追加する ✨\'}</button>');
fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/pages/budget.js', budget, 'utf8');

let omiyage = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/pages/omiyage.js', 'utf8');
omiyage = omiyage.replace('class="fab" id="omiyage-fab"', 'class="fab fab-center" id="omiyage-fab"');
omiyage = omiyage.replace('<button type="submit" class="btn-primary">${t(\'addBtn\') || \'追加する ✨\'}</button>', '<button type="submit" class="btn-fancy">${t(\'addBtn\') || \'追加する ✨\'}</button>');
fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/pages/omiyage.js', omiyage, 'utf8');
