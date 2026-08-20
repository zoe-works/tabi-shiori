import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getEmergencyContacts, addEmergencyContact, updateEmergencyContact, deleteEmergencyContact } from '../utils/db.js';

const getCategories = () => ({
    police: { icon: '🚨', label: t('catPolice') || '警察・消防・救急' },
    hotel: { icon: '🏨', label: t('catHotel') || 'ホテルの連絡先' },
    embassy: { icon: '🏛️', label: t('catEmbassy') || '大使館の連絡先' },
    insurance: { icon: '🛡️', label: t('catInsurance') || '海外旅行保険' }
});

import { t } from '../utils/i18n.js';
import { translateUserText } from '../utils/translate.js';

export default {
    render() {
        return `
            <div class="page page-emergency">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-emergency">←</button>
                    <h2>${t('emergencyTitle')}</h2>
                </header>
                <main class="content" id="emergency-main">
                    <div class="loading">${t('loading') || 'よみこみ中... 🧸'}</div>
                </main>
                
                <div id="emergency-modal" class="modal-overlay">
                    <div class="modal-content">
                        <h3 id="modal-title">${t('addEmergency') || '情報の追加 ✏️'}</h3>
                        <form id="emergency-form">
                            <input type="hidden" id="em-category">
                            <div class="form-group">
                                <label>${t('emergencyTitleLabel') || 'タイトル (必須)'}</label>
                                <input type="text" id="em-title" required placeholder="${t('emergencyTitlePlaceholder') || '例: ホテル電話番号'}">
                            </div>
                            <div class="form-group">
                                <label>${t('emergencyPhone') || '電話番号'}</label>
                                <input type="tel" id="em-phone" placeholder="090-XXXX-XXXX">
                            </div>
                            <div class="form-group">
                                <label>${t('emergencyMemo') || 'メモ (内容)'}</label>
                                <textarea id="em-info" rows="3" placeholder="${t('emergencyMemoPlaceholder') || '住所や予約番号など'}"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${t('saveBtn') || '保存する ✨'}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="em-cancel">${t('cancelBtn') || 'キャンセル'}</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },

    async init() {
        document.getElementById('btn-back-emergency')?.addEventListener('click', () => navigate('/'));

        const state = getState();
        const tripId = state.currentTripId;
        const mainEl = document.getElementById('emergency-main');

        if (!tripId) {
            mainEl.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${t('noTripSelected') || '旅行が選択されていません。'}</p>
                </div>`;
            return;
        }

        let contacts = [];

        const renderContent = async (useCacheOnly = false) => {
            if (contacts.length === 0) {
                // Initialize default view if empty
                mainEl.innerHTML = Object.keys(getCategories()).map(catKey => `
                    <div class="emergency-section card">
                        <div class="section-header">
                            <h3>${getCategories()[catKey].icon} ${getCategories()[catKey].label}</h3>
                            <button class="btn-add-small" data-cat="${catKey}">＋ ${t('addSmallBtn') || '追加'}</button>
                        </div>
                        <div class="empty-text">${t('noInfo') || '情報がありません。'}</div>
                    </div>
                `).join('');
            } else {
                const sectionsPromises = Object.keys(getCategories()).map(async catKey => {
                    const catContacts = contacts.filter(c => c.category === catKey);
                    
                    const cardsPromises = catContacts.map(async c => {
                        const translatedTitle = await translateUserText(c.title, useCacheOnly) || c.title;
                        const translatedInfo = c.info ? await translateUserText(c.info, useCacheOnly) || c.info : '';
                        return `
                                    <div class="emergency-card">
                                        <h4>${translatedTitle}</h4>
                                        ${translatedInfo ? `<p class="em-info">${translatedInfo.replace(/\\n/g, '<br>')}</p>` : ''}
                                        ${c.phone ? `
                                            <a href="tel:${c.phone}" class="btn-tel">
                                                📞 ${t('callBtn') || '電話をかける'} (${c.phone})
                                            </a>
                                        ` : ''}
                                    </div>
                        `;
                    });
                    const cardsHtml = await Promise.all(cardsPromises);

                    return `
                        <div class="emergency-section card">
                            <div class="section-header">
                                <h3>${getCategories()[catKey].icon} ${getCategories()[catKey].label}</h3>
                                <button class="btn-add-small" data-cat="${catKey}">＋ ${t('addSmallBtn') || '追加'}</button>
                            </div>
                            <div class="emergency-list">
                                ${catContacts.length === 0 ? `<div class="empty-text">${t('noInfo') || '情報がありません。'}</div>` : cardsHtml.join('')}
                            </div>
                        </div>
                    `;
                });
                const sectionsHtml = await Promise.all(sectionsPromises);
                mainEl.innerHTML = sectionsHtml.join('');
            }

            // Bind add buttons
            document.querySelectorAll('.btn-add-small').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const cat = e.target.getAttribute('data-cat');
                    document.getElementById('em-category').value = cat;
                    document.getElementById('modal-title').innerText = `${getCategories()[cat].label}の追加 ✏️`;
                    document.getElementById('emergency-modal').classList.add('active');
                });
            });
        };

        const loadContacts = async () => {
            try {
                contacts = await getEmergencyContacts(tripId);
                await renderContent();
            } catch (e) {
                console.error(e);
                mainEl.innerHTML = '<p>エラーが発生しました😢</p>';
            }
        };

        await loadContacts();

        // Modal logic
        const modal = document.getElementById('emergency-modal');
        const cancelBtn = document.getElementById('em-cancel');
        modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });
        const form = document.getElementById('emergency-form');

        cancelBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            form.reset();
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newItem = {
                tripId,
                title: document.getElementById('em-title').value,
                phone: document.getElementById('em-phone').value,
                info: document.getElementById('em-info').value,
                category: document.getElementById('em-category').value,
            };

            await addEmergencyContact(newItem);
            modal.classList.remove('active');
            form.reset();
            await loadContacts();
        });
    }
};
