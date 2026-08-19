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
                                <label>${t('omiyageRecipient') || '誰に渡す？ (必須)'}</label>
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
                            <button type="submit" class="btn btn-primary w-full mt-lg">${t('saveBtn') || '保存する ✨'}</button>
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

        if (!tripId) {
            mainEl.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${t('noTripSelected') || '旅行が選択されていません。'}</p>
                </div>`;
            progressEl.style.display = 'none';
            return;
        }

        let items = [];

        const renderContent = async () => {
            if (items.length === 0) {
                progressEl.innerHTML = `<p>${t('noOmiyageProgress') || 'まだお土産リストがありません。'}</p>`;
                mainEl.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">🎁</div>
                        <p>${t('noOmiyageList') || '右下の＋ボタンからお土産リストを追加しよう！'}</p>
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

            // Group by recipient
            const grouped = {};
            for (const item of items) {
                const translatedRecipient = item.recipientName;
                if (!grouped[translatedRecipient]) grouped[translatedRecipient] = [];
                grouped[translatedRecipient].push(item);
            }

            const mainHtmlPromises = Object.keys(grouped).map(async recipient => {
                const recipientItems = grouped[recipient];
                const totalBudget = recipientItems.reduce((sum, i) => sum + Number(i.budget || 0), 0);
                
                const liPromises = recipientItems.map(async item => {
                    const translatedItemName = await translateUserText(item.itemName) || t('undecided') || '未定';
                    return `
                                <li class="omiyage-item ${item.purchased ? 'purchased' : ''}" data-id="${item.id}">
                                    <label class="checkbox-wrapper">
                                        <input type="checkbox" class="omiyage-check" data-id="${item.id}" ${item.purchased ? 'checked' : ''}>
                                        <span class="checkmark"></span>
                                        <div class="omiyage-details">
                                            <div class="omiyage-name">${translatedItemName}</div>
                                            ${item.budget ? `<div class="omiyage-budget">¥${Number(item.budget).toLocaleString()}</div>` : ''}
                                        </div>
                                    </label>
                                    <button class="btn-delete" data-id="${item.id}">🗑️</button>
                                </li>
                    `;
                });
                const liHtml = await Promise.all(liPromises);

                return `
                    <div class="omiyage-recipient card">
                        <div class="recipient-header">
                            <h3>👤 ${recipient}</h3>
                            <span class="recipient-budget">${t('budgetLabel') || '予算'}: ¥${totalBudget.toLocaleString()}</span>
                        </div>
                        <ul class="omiyage-list">
                            ${liHtml.join('')}
                        </ul>
                    </div>
                `;
            });
            const mainHtml = await Promise.all(mainHtmlPromises);
            mainEl.innerHTML = mainHtml.join('');

            // Bind checkbox events
            document.querySelectorAll('.omiyage-check').forEach(cb => {
                cb.addEventListener('change', async (e) => {
                    const id = e.target.getAttribute('data-id');
                    const checked = e.target.checked;
                    const item = items.find(i => i.id === id);
                    if (item) {
                        item.purchased = checked;
                        await updateOmiyageItem(id, { purchased: checked });
                        renderContent(); // Re-render for progress bar update
                    }
                });
            });

            // Bind delete events
            document.querySelectorAll('.btn-delete').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    if (confirm(t('confirmDelete') || '本当に削除しますか？')) {
                        const id = e.target.getAttribute('data-id');
                        await deleteOmiyageItem(id);
                        await loadItems();
                    }
                });
            });
        };

        const loadItems = async () => {
            try {
                items = await getOmiyageList(tripId);
                await renderContent();
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
            const newItem = {
                tripId,
                recipientName: document.getElementById('omi-recipient').value,
                itemName: document.getElementById('omi-item').value,
                budget: Number(document.getElementById('omi-budget').value) || 0,
                purchased: false
            };

            await addOmiyageItem(newItem);
            modal.classList.remove('active');
            form.reset();
            await loadItems();
        });
    }
};
