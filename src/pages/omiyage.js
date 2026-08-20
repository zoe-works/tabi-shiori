import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getOmiyageList, addOmiyageItem, updateOmiyageItem, deleteOmiyageItem } from '../utils/db.js';
import { t } from '../utils/i18n.js';
import { translateUserText } from '../utils/translate.js';

export default {
    render() {
        return `
            <div class="page page-omiyage">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-omiyage">←</button>
                    <h2>${t('omiyageTitle')}</h2>
                </header>
                <div class="progress-section card" id="omiyage-progress-container">
                    <!-- Progress injected here -->
                </div>
                <main class="content" id="omiyage-main">
                    <div class="loading">${t('loading') || 'よみこみ中... 🧸'}</div>
                </main>
                <button class="fab fab-center" id="omiyage-fab">＋</button>
                
                <div id="omiyage-modal" class="modal-overlay">
                    <div class="modal-content">
                        <div class="modal-handle"></div>
                        <h3>${t('addOmiyage') || 'お土産の追加 ✏️'}</h3>
                        <form id="omiyage-form">
                            <div class="form-group">
                                <label>${t('omiyageRecipient') || '誰に渡す？(必須)'}</label>
                                <input type="text" id="omi-recipient" required placeholder="${t('recipientPlaceholder') || '例: 家族、職場、自分'}">
                            </div>
                            <div class="form-group">
                                <label>${t('omiyageItem') || 'お土産名 / メモ'}</label>
                                <input type="text" id="omi-item" placeholder="${t('itemPlaceholder') || '例: ご当地クッキー'}">
                            </div>
                            <div class="form-group">
                                <label>${t('budgetEstimate') || '予算目安'}</label>
                                <input type="number" id="omi-budget" placeholder="例: 1000">
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${t('saveBtn') || '保存する✨'}</button>
                            <button type="button" class="btn btn-secondary w-full mt-sm" id="omi-cancel">${t('cancelBtn') || 'キャンセル'}</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },

    async init() {
        document.getElementById('btn-back-omiyage')?.addEventListener('click', () => navigate('/'));

        const state = getState();
        const tripId = state.currentTripId;
        
        const mainEl = document.getElementById('omiyage-main');
        const progressEl = document.getElementById('omiyage-progress-container');

        let items = [];

        const renderContent = async (useCacheOnly = false) => {
            if (items.length === 0) {
                progressEl.innerHTML = `<p>${t('noOmiyageProgress') || 'まだお土産リストがありません。'}</p>`;
                mainEl.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">🎁</div>
                        <p>${t('noOmiyageList') || '＋ボタンからお土産リストを追加しよう！'}</p>
                    </div>`;
                return;
            }

            const totalCount = items.length;
            const purchasedCount = items.filter(i => i.purchased).length;
            
            progressEl.innerHTML = `
                <h3>${t('progressStatus') || '進捗状況 💪'}</h3>
                <div class="progress-text">${purchasedCount} / ${totalCount} ${t('purchased') || '購入済み'}</div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${(purchasedCount / totalCount) * 100}%"></div>
                </div>
            `;

            // NEW UI: Same format as budget (budget-item card)
            const listPromises = items.map(async item => {
                const translatedItemName = await translateUserText(item.itemName, useCacheOnly) || t('undecided') || '未定';
                const recipientName = item.recipientName || '';
                
                return `
                    <div class="budget-item card" data-id="${item.id}">
                        <div class="budget-icon" style="display:flex; align-items:center; justify-content:center;">
                            <label class="checkbox-wrapper" style="margin: 0;">
                                <input type="checkbox" class="omiyage-check" data-id="${item.id}" ${item.purchased ? 'checked' : ''}>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="budget-details">
                            <div class="budget-title">
                                ${translatedItemName} ${recipientName ? `<span style="font-size: 0.8rem; color: var(--color-text-light); font-weight: normal; margin-left: 8px;">👤${recipientName}</span>` : ''}
                            </div>
                        </div>
                        ${item.budget ? `<div class="budget-amount">¥${Number(item.budget).toLocaleString()}</div>` : ''}
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-omiyage" data-id="${item.id}">🗑️</button>
                        </div>
                    </div>
                `;
            });
            const listHtml = await Promise.all(listPromises);
            mainEl.innerHTML = `<div class="budget-list">${listHtml.join('')}</div>`;

            // Bind checkbox events
            document.querySelectorAll('.omiyage-check').forEach(cb => {
                cb.addEventListener('change', async (e) => {
                    const id = e.target.getAttribute('data-id');
                    const checked = e.target.checked;
                    const item = items.find(i => i.id === id);
                    if (item) {
                        item.purchased = checked;
                        await updateOmiyageItem(tripId, id, { purchased: checked });
                        renderContent(); // Re-render for progress bar update
                    }
                });
            });

            // Bind delete events
            document.querySelectorAll('.btn-delete-omiyage').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    if (confirm(t('confirmDelete') || '本当に削除しますか？')) {
                        const id = e.target.closest('.btn-delete-omiyage').dataset.id;
                        await deleteOmiyageItem(tripId, id);
                        await loadItems();
                    }
                });
            });
        };

        const loadItems = async () => {
            try {
                items = await getOmiyageList(tripId);
                await renderContent(true);
                renderContent(false);
            } catch (e) {
                console.error(e);
                mainEl.innerHTML = '<p>エラーが発生しました😢</p>';
            }
        };

        await loadItems();

        // Modal logic
        const modal = document.getElementById('omiyage-modal');
        const fab = document.getElementById('omiyage-fab');
        const cancelBtn = document.getElementById('omi-cancel');
        const form = document.getElementById('omiyage-form');

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
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;

            const newItem = {
                tripId,
                recipientName: document.getElementById('omi-recipient').value,
                itemName: document.getElementById('omi-item').value,
                budget: Number(document.getElementById('omi-budget').value) || 0,
                purchased: false
            };

            // 楽観的UI
            modal.classList.remove('active');
            
            try {
                await addOmiyageItem(tripId, newItem);
                form.reset();
                await loadItems();
            } catch (err) {
                console.error(err);
                alert(t('errorOccurred') || 'エラーが発生しました');
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }
};
