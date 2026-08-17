import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getBudgetItems, addBudgetItem, updateBudgetItem, deleteBudgetItem } from '../utils/db.js';

const CATEGORIES = {
    food: { icon: '🍽️', label: t('catFood') || '食事' },
    transport: { icon: '🚕', label: t('catTransport') || '交通' },
    shopping: { icon: '🛒', label: t('catShopping') || '買い物' },
    stay: { icon: '🏨', label: t('catStay') || '宿泊' },
    activity: { icon: '🎭', label: t('catActivity') || 'アクティビティ' },
    other: { icon: '📦', label: t('catOther') || 'その他' }
};

import { t } from '../utils/i18n.js';
import { translateUserText } from '../utils/translate.js';

export default {
    render() {
        return `
            <div class="page page-budget">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-budget">←</button>
                    <h2>${t('budgetTitle') || '予算管理'}</h2>
                </header>
                <main class="content" id="budget-main">
                    <div class="loading">${t('loading') || 'よみこみ中... 🧸'}</div>
                </main>
                <button class="fab fab-center" id="budget-fab">＋</button>
                
                <div id="budget-modal" class="modal-overlay">
                    <div class="modal-content">
                        <div class="modal-handle"></div>
                        <h3>${t('addExpenseTitle') || '支出の追加 ✏️'}</h3>
                        <form id="budget-form">
                            <div class="form-group">
                                <label>${t('amountRequiredLabel') || '金額 (必須)'}</label>
                                <input type="number" id="budget-amount" required>
                            </div>
                            <div class="form-group">
                                <label>${t('usageLabel') || '用途'}</label>
                                <input type="text" id="budget-title" placeholder="${t('usagePlaceholder') || '例: ランチ代'}">
                            </div>
                            <div class="form-group">
                                <label>${t('currencyLabel') || '通貨'}</label>
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
                                <label>${t('categoryLabel') || 'カテゴリ'}</label>
                                <select id="budget-category">
                                    ${Object.entries(CATEGORIES).map(([key, cat]) => `<option value="${key}">${cat.icon} ${cat.label}</option>`).join('')}
                                </select>
                            </div>
                            <div class="modal-actions">
                                <button type="button" class="btn-cancel" id="budget-cancel">${t('cancelBtn') || 'キャンセル'}</button>
                                <button type="submit" class="btn-fancy">${t('addBtn') || '追加する ✨'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },

    async init() {
        document.getElementById('btn-back-budget')?.addEventListener('click', () => navigate('/'));

        const state = getState();
        const tripId = state.currentTripId;
        const mainEl = document.getElementById('budget-main');

        if (!tripId) {
            mainEl.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${t('noTripSelected') || '旅行が選択されていません。'}</p>
                    <button class="btn-primary" onclick="window.location.hash='#/'">${t('backToHome') || 'ホームに戻る'}</button>
                </div>`;
            return;
        }

        let items = [];

                const renderContent = async () => {
            if (items.length === 0) {
                mainEl.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">👛</div>
                        <p>${t('noBudgetItems') || 'まだ支出がありません。<br>右下の＋ボタンから追加しよう！'}</p>
                    </div>`;
                return;
            }

            const totalAmount = items.reduce((sum, item) => sum + Number(item.amount), 0);
            
            let html = `
                <div class="budget-summary card mb-md">
                    <div class="text-center mb-sm">
                        <div class="text-sm text-muted">${t('totalExpense') || '合計支出'}</div>
                        <div class="text-xl font-bold">¥${totalAmount.toLocaleString()}</div>
                    </div>
                </div>
                <div class="budget-list">
                    <h3>${t('budgetListTitle') || '支出リスト 📝'}</h3>`;

            for (const item of items) {
                const translatedTitle = await translateUserText(item.title) || '無題';
                const cur = item.currency || '¥';
                html += `
                    <div class="budget-item card" data-id="${item.id}">
                        <div class="budget-icon">${CATEGORIES[item.category]?.icon || '📦'}</div>
                        <div class="budget-details">
                            <div class="budget-title">${translatedTitle}</div>
                        </div>
                        <div class="budget-amount">${cur}${Number(item.amount).toLocaleString()}</div>
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-budget" data-id="${item.id}">🗑️</button>
                        </div>
                    </div>
                `;
            }
            html += `</div>`;
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
        };

        const loadItems = async () => {
            try {
                items = await getBudgetItems(tripId);
                await renderContent();
            } catch (e) {
                console.error(e);
                mainEl.innerHTML = `<p>${t('errorOccurred') || 'エラーが発生しました😢'}</p>`;
            }
        };

        await loadItems();

                // Modal logic
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
        });
    }
};
