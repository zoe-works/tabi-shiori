const fs = require('fs');

let code = fs.readFileSync('src/pages/omiyage.js', 'utf8');

const search = `            // Group by recipient`;
const endSearch = `            mainEl.innerHTML = html;`;

const startIdx = code.indexOf(search);
const endIdx = code.indexOf(endSearch) + endSearch.length;

const newHTML = `            const listPromises = items.map(async item => {
                const translatedItemName = await translateUserText(item.itemName) || t('undecided') || '未定';
                const recipientName = item.recipientName || '';
                
                return \`
                    <div class="budget-item card omiyage-item \${item.purchased ? 'purchased' : ''}" data-id="\${item.id}">
                        <div class="budget-icon" style="background:none; display:flex; align-items:center; justify-content:center;">
                            <label class="checkbox-wrapper" style="margin: 0;">
                                <input type="checkbox" class="omiyage-check" data-id="\${item.id}" \${item.purchased ? 'checked' : ''}>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="budget-details" style="flex: 1; min-width: 0;">
                            <div class="budget-title omiyage-name" style="\${item.purchased ? 'text-decoration: line-through;' : ''}">\${translatedItemName}</div>
                            \${recipientName ? \`<div class="budget-subtitle" style="font-size: 0.8rem; color: var(--color-text-light);">👤 \${recipientName}</div>\` : ''}
                        </div>
                        \${item.budget ? \`<div class="budget-amount">¥\${Number(item.budget).toLocaleString()}</div>\` : ''}
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-omiyage" data-id="\${item.id}">🗑️</button>
                        </div>
                    </div>
                \`;
            });
            const listHtml = await Promise.all(listPromises);
            mainEl.innerHTML = \`<div class="budget-list">\${listHtml.join('')}</div>\`;`;

code = code.substring(0, startIdx) + newHTML + code.substring(endIdx);

fs.writeFileSync('src/pages/omiyage.js', code, 'utf8');
