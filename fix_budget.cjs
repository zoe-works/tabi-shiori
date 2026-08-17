const fs = require('fs');

let content = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/pages/budget.js', 'utf8');

const newForm = `                            <div class="form-group">
                                <label>\${t('amountRequiredLabel') || '金額 (必須)'}</label>
                                <input type="number" id="budget-amount" required>
                            </div>
                            <div class="form-group">
                                <label>\${t('usageLabel') || '用途'}</label>
                                <input type="text" id="budget-title" placeholder="\${t('usagePlaceholder') || '例: ランチ代'}">
                            </div>
                            <div class="form-group">
                                <label>\${t('currencyLabel') || '通貨'}</label>
                                <select id="budget-currency">
                                    <option value="¥">JPY (¥)</option>
                                    <option value="$">USD ($)</option>
                                    <option value="€">EUR (€)</option>
                                    <option value="฿">THB (฿)</option>
                                    <option value="₩">KRW (₩)</option>
                                    <option value="NT$">TWD (NT$)</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>\${t('categoryLabel') || 'カテゴリ'}</label>
                                <select id="budget-category">
                                    \${Object.entries(CATEGORIES).map(([key, cat]) => \`<option value="\${key}">\${cat.icon} \${cat.label}</option>\`).join('')}
                                </select>
                            </div>`;

content = content.replace(/<div class="form-group">\s*<label>\${t\('amountRequiredLabel'\)[^]+?<select id="budget-paid-by" required>[^]+?<\/select>\s*<\/div>/, newForm);

const newInitTop = `        const state = getState();
        const tripId = state.currentTripId;
        const mainEl = document.getElementById('budget-main');

        if (!tripId) {
            mainEl.innerHTML = \`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>\${t('noTripSelected') || '旅行が選択されていません。'}</p>
                    <button class="btn-primary" onclick="window.location.hash='#/'">\${t('backToHome') || 'ホームに戻る'}</button>
                </div>\`;
            return;
        }

        let items = [];`;

content = content.replace(/const members = state\.currentTrip[^]+let items = \[\];/, 'let items = [];');

const newRenderContent = `        const renderContent = async () => {
            if (items.length === 0) {
                mainEl.innerHTML = \`
                    <div class="empty-state">
                        <div class="empty-icon">👛</div>
                        <p>\${t('noBudgetItems') || 'まだ支出がありません。<br>右下の＋ボタンから追加しよう！'}</p>
                    </div>\`;
                return;
            }

            const totalAmount = items.reduce((sum, item) => sum + Number(item.amount), 0);
            
            let html = \`
                <div class="budget-summary card mb-md">
                    <div class="text-center mb-sm">
                        <div class="text-sm text-muted">\${t('totalExpense') || '合計支出'}</div>
                        <div class="text-xl font-bold">¥\${totalAmount.toLocaleString()}</div>
                    </div>
                </div>
                <div class="budget-list">
                    <h3>\${t('budgetListTitle') || '支出リスト 📝'}</h3>\`;

            for (const item of items) {
                const translatedTitle = await translateUserText(item.title) || '無題';
                const cur = item.currency || '¥';
                html += \`
                    <div class="budget-item card" data-id="\${item.id}">
                        <div class="budget-icon">\${CATEGORIES[item.category]?.icon || '📦'}</div>
                        <div class="budget-details">
                            <div class="budget-title">\${translatedTitle}</div>
                        </div>
                        <div class="budget-amount">\${cur}\${Number(item.amount).toLocaleString()}</div>
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-budget" data-id="\${item.id}">🗑️</button>
                        </div>
                    </div>
                \`;
            }
            html += \`</div>\`;
            mainEl.innerHTML = html;

            document.querySelectorAll('.btn-delete-budget').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const id = e.target.closest('.btn-delete-budget').dataset.id;
                    if (confirm(t('confirmDelete') || '本当に削除しますか？')) {
                        await deleteBudgetItem(tripId, id);
                        items = await getBudgetItems(tripId);
                        renderContent();
                    }
                });
            });
        };`;

content = content.replace(/const renderContent = async \(\) => {[^]+?};/, newRenderContent);

const newModalLogic = `        // Modal logic
        const modal = document.getElementById('budget-modal');
        const fab = document.getElementById('budget-fab');
        const cancelBtn = document.getElementById('budget-cancel');
        const form = document.getElementById('budget-form');

        fab.addEventListener('click', () => {
            modal.classList.add('active');
        });

        cancelBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            form.reset();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                form.reset();
            }
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newItem = {
                tripId,
                amount: Number(document.getElementById('budget-amount').value),
                title: document.getElementById('budget-title').value,
                category: document.getElementById('budget-category').value,
                currency: document.getElementById('budget-currency').value,
                date: new Date().toISOString()
            };

            await addBudgetItem(newItem);
            modal.classList.remove('active');
            form.reset();
            await loadItems();
        });`;

content = content.replace(/\/\/ Modal logic[^]+?}\);/, newModalLogic);

fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/pages/budget.js', content, 'utf8');
