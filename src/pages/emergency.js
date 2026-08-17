import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';
import { getEmergencyContacts, addEmergencyContact, updateEmergencyContact, deleteEmergencyContact } from '../utils/db.js';

const CATEGORIES = {
    emergency: { icon: '🚨', label: '緊急連絡先' },
    hotel: { icon: '🏨', label: 'ホテル情報' },
    flight: { icon: '✈️', label: 'フライト情報' },
    insurance: { icon: '🛡️', label: '保険' }
};

import { t } from '../utils/i18n.js';
import { translateUserText } from '../utils/translate.js';

export default {
    render() {
        return `
            <div class="page page-emergency">
                <header class="header">
                    <h2>${t('emergencyTitle')}</h2>
                </header>
                <main class="content" id="emergency-main">
                    <div class="loading">よみこみ中... 🧸</div>
                </main>
                
                <div id="emergency-modal" class="modal hidden">
                    <div class="modal-content">
                        <h3 id="modal-title">情報の追加 ✏️</h3>
                        <form id="emergency-form">
                            <input type="hidden" id="em-category">
                            <div class="form-group">
                                <label>タイトル (必須)</label>
                                <input type="text" id="em-title" required placeholder="例: ホテル電話番号">
                            </div>
                            <div class="form-group">
                                <label>電話番号</label>
                                <input type="tel" id="em-phone" placeholder="090-XXXX-XXXX">
                            </div>
                            <div class="form-group">
                                <label>メモ (内容)</label>
                                <textarea id="em-info" rows="3" placeholder="住所や予約番号など"></textarea>
                            </div>
                            <div class="modal-actions">
                                <button type="button" class="btn-cancel" id="em-cancel">キャンセル</button>
                                <button type="submit" class="btn-primary">保存する ✨</button>
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
        const mainEl = document.getElementById('emergency-main');

        if (!tripId) {
            mainEl.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>旅行が選択されていません。</p>
                </div>`;
            return;
        }

        let contacts = [];

        const renderContent = async () => {
            if (contacts.length === 0) {
                // Initialize default view if empty
                mainEl.innerHTML = Object.keys(CATEGORIES).map(catKey => `
                    <div class="emergency-section card">
                        <div class="section-header">
                            <h3>${CATEGORIES[catKey].icon} ${CATEGORIES[catKey].label}</h3>
                            <button class="btn-add-small" data-cat="${catKey}">＋ 追加</button>
                        </div>
                        <div class="empty-text">情報がありません。</div>
                    </div>
                `).join('');
            } else {
                const sectionsPromises = Object.keys(CATEGORIES).map(async catKey => {
                    const catContacts = contacts.filter(c => c.category === catKey);
                    
                    const cardsPromises = catContacts.map(async c => {
                        const translatedTitle = await translateUserText(c.title) || c.title;
                        const translatedInfo = c.info ? await translateUserText(c.info) || c.info : '';
                        return `
                                    <div class="emergency-card">
                                        <h4>${translatedTitle}</h4>
                                        ${translatedInfo ? `<p class="em-info">${translatedInfo.replace(/\\n/g, '<br>')}</p>` : ''}
                                        ${c.phone ? `
                                            <a href="tel:${c.phone}" class="btn-tel">
                                                📞 電話をかける (${c.phone})
                                            </a>
                                        ` : ''}
                                    </div>
                        `;
                    });
                    const cardsHtml = (await Promise.all(cardsPromises)).join('');

                    return `
                        <div class="emergency-section card">
                            <div class="section-header">
                                <h3>${CATEGORIES[catKey].icon} ${CATEGORIES[catKey].label}</h3>
                                <button class="btn-add-small" data-cat="${catKey}">＋ 追加</button>
                            </div>
                            <div class="emergency-list">
                                ${catContacts.length === 0 ? '<div class="empty-text">情報がありません。</div>' : cardsHtml}
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
                    document.getElementById('modal-title').innerText = `${CATEGORIES[cat].label}の追加 ✏️`;
                    document.getElementById('emergency-modal').classList.remove('hidden');
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
        const form = document.getElementById('emergency-form');

        cancelBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
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
            modal.classList.add('hidden');
            form.reset();
            await loadContacts();
        });
    }
};
