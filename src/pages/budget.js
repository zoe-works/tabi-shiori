import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getBudgetItems, addBudgetItem, updateBudgetItem, deleteBudgetItem } from '../utils/db.js';

const CATEGORIES = {
    food: { icon: '🍽️', label: '食事' },
    transport: { icon: '🚕', label: '交通' },
    shopping: { icon: '🛒', label: '買い物' },
    stay: { icon: '🏨', label: '宿泊' },
    activity: { icon: '🎭', label: 'アクティビティ' },
    other: { icon: '📦', label: 'その他' }
};

import { t } from '../utils/i18n.js';

export default {
    render() {
        return `
            <div class="page page-budget">
                <header class="header">
                    <h2>${t('budgetTitle')}</h2>
                </header>
                <main class="content" id="budget-main">
                    <div class="loading">よみこみ中... 🧸</div>
                </main>
                <button class="fab" id="budget-fab">＋</button>
                
                <div id="budget-modal" class="modal hidden">
                    <div class="modal-content">
                        <h3>支出の追加 ✏️</h3>
                        <form id="budget-form">
                            <div class="form-group">
                                <label>金額 (必須)</label>
                                <input type="number" id="budget-amount" required>
                            </div>
                            <div class="form-group">
                                <label>用途</label>
                                <input type="text" id="budget-title" placeholder="例: ランチ代">
                            </div>
                            <div class="form-group">
                                <label>カテゴリ</label>
                                <select id="budget-category">
                                    ${Object.entries(CATEGORIES).map(([key, cat]) => `<option value="${key}">${cat.icon} ${cat.label}</option>`).join('')}
                                </select>
                            </div>
                            <div class="form-group">
                                <label>支払った人</label>
                                <select id="budget-paid-by" required>
                                    <option value="">メンバーを選択</option>
                                </select>
                            </div>
                            <div class="modal-actions">
                                <button type="button" class="btn-cancel" id="budget-cancel">キャンセル</button>
                                <button type="submit" class="btn-primary">追加する ✨</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },

    async init() {
        const state = getState();
        const tripId = state.currentTripId;
        const mainEl = document.getElementById('budget-main');

        if (!tripId) {
            mainEl.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>旅行が選択されていません。</p>
                    <button class="btn-primary" onclick="window.location.hash='#'">ホームに戻る</button>
                </div>`;
            return;
        }

        // Dummy members for UI demonstration (In real app, fetch from trip details)
        const members = state.currentTrip?.members || ['自分', '友人A', '友人B']; 
        const paidBySelect = document.getElementById('budget-paid-by');
        paidBySelect.innerHTML = members.map(m => `<option value="${m}">${m}</option>`).join('');

        let items = [];

        const renderContent = () => {
            if (items.length === 0) {
                mainEl.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">👛</div>
                        <p>まだ支出がありません。<br>右下の＋ボタンから追加しよう！</p>
                    </div>`;
                return;
            }

            const totalAmount = items.reduce((sum, item) => sum + Number(item.amount), 0);
            
            // Warikan calculation
            const paidByTotals = {};
            members.forEach(m => paidByTotals[m] = 0);
            items.forEach(item => {
                if (paidByTotals[item.paidBy] !== undefined) {
                    paidByTotals[item.paidBy] += Number(item.amount);
                }
            });
            const average = totalAmount / members.length;
            const warikanText = members.map(m => {
                const diff = paidByTotals[m] - average;
                if (diff > 0) return `<li>✨ ${m}さんは <strong>¥${Math.round(diff).toLocaleString()}</strong> もらいすぎ！ (いや、もらう側)</li>`;
                if (diff < 0) return `<li>💸 ${m}さんは <strong>¥${Math.round(Math.abs(diff)).toLocaleString()}</strong> 払う！</li>`;
                return `<li>⚖️ ${m}さんは ぴったり！</li>`;
            }).join('');

            mainEl.innerHTML = `
                <div class="budget-summary card">
                    <h3>合計支出 💰</h3>
                    <div class="total-amount">¥${totalAmount.toLocaleString()}</div>
                </div>
                
                <div class="warikan-section card">
                    <h3>割り勘 ⚖️</h3>
                    <p class="warikan-subtitle">1人あたり: ¥${Math.round(average).toLocaleString()}</p>
                    <ul class="warikan-list">
                        ${warikanText}
                    </ul>
                </div>

                <div class="budget-list">
                    <h3>支出リスト 📝</h3>
                    ${items.map(item => `
                        <div class="budget-item card" data-id="${item.id}">
                            <div class="budget-icon">${CATEGORIES[item.category]?.icon || '📦'}</div>
                            <div class="budget-details">
                                <div class="budget-title">${item.title || '無題'}</div>
                                <div class="budget-meta">${item.paidBy} が支払い</div>
                            </div>
                            <div class="budget-amount">¥${Number(item.amount).toLocaleString()}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        };

        const loadItems = async () => {
            try {
                items = await getBudgetItems(tripId);
                renderContent();
            } catch (e) {
                console.error(e);
                mainEl.innerHTML = '<p>エラーが発生しました😢</p>';
            }
        };

        await loadItems();

        // Modal logic
        const modal = document.getElementById('budget-modal');
        const fab = document.getElementById('budget-fab');
        const cancelBtn = document.getElementById('budget-cancel');
        const form = document.getElementById('budget-form');

        fab.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });

        cancelBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            form.reset();
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newItem = {
                tripId,
                amount: Number(document.getElementById('budget-amount').value),
                title: document.getElementById('budget-title').value,
                category: document.getElementById('budget-category').value,
                paidBy: document.getElementById('budget-paid-by').value,
                date: new Date().toISOString(),
                currency: 'JPY'
            };

            await addBudgetItem(newItem);
            modal.classList.add('hidden');
            form.reset();
            await loadItems();
        });
    }
};
