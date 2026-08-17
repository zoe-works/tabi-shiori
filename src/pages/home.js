import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';

export default {
  render() {
    const { currentTrip } = getState();
    
    if (!currentTrip) {
      return `
        <div class="page">
          <div class="welcome-section">
            <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="縺溘・縺上∪" class="welcome-mascot" />
            <h1 class="welcome-title">譌・・縺励♀繧翫ｒ菴懊ｍ縺・ｼ・/h1>
            <p class="welcome-text">譌・｡後・險育判縺九ｉ險倬鹸縺ｾ縺ｧ縲・br>縺ｿ繧薙↑縺ｧ讌ｽ縺励￥菴懊ｋ譌・・縺励♀繧・原</p>
            <button id="btn-create-trip" class="btn btn-primary">笨ｨ 譁ｰ縺励＞譌・｡後ｒ菴懈・</button>
          </div>
        </div>
      `;
    }

    const start = new Date(currentTrip.startDate);
    const end = new Date(currentTrip.endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startNorm = new Date(start); startNorm.setHours(0, 0, 0, 0);
    const endNorm = new Date(end); endNorm.setHours(0, 0, 0, 0);

    let countdownHtml = '';
    if (today < startNorm) {
      const diff = Math.ceil((startNorm - today) / (1000 * 60 * 60 * 24));
      countdownHtml = `
        <span class="countdown-label">譌・｡後∪縺ｧ縺ゅ→</span>
        <span class="countdown-number">${diff}</span>
        <span class="countdown-unit">譌･・・/span>
      `;
    } else if (today >= startNorm && today <= endNorm) {
      const diff = Math.ceil((today - startNorm) / (1000 * 60 * 60 * 24)) + 1;
      countdownHtml = `<span class="countdown-during">脂 譌・｡・${diff}譌･逶ｮ・・/span>`;
    } else {
      countdownHtml = `<span class="countdown-during">笨ｨ 縺翫▽縺九ｌ縺輔∪縺ｧ縺励◆・・/span>`;
    }

    const formatDate = (d) => `${d.getFullYear()}蟷ｴ${d.getMonth() + 1}譛・{d.getDate()}譌･`;

    const destinations = currentTrip.destinations || [];
    const members = currentTrip.members || [];

    return `
      <div class="page">
        <div class="home-hero">
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="縺溘・縺上∪" class="home-mascot" />
          <h1 class="home-trip-title">${currentTrip.title || '辟｡鬘後・譌・｡・}</h1>
          <p class="home-trip-dates">${formatDate(start)} 縲・${formatDate(end)}</p>
          
          ${destinations.length > 0 ? `
            <div class="home-destinations">
              ${destinations.map(d => `<span class="chip chip-blue">桃 ${d.country || ''} ${d.city || ''}</span>`).join('')}
            </div>
          ` : ''}
        </div>

        <div class="countdown-card">
          ${countdownHtml}
        </div>

        ${members.length > 0 ? `
          <div class="card card-sm mb-lg">
            <p class="text-sm fw-bold mb-sm">則 繝｡繝ｳ繝舌・</p>
            <div class="members-row">
              ${members.map(m => `
                <div class="member-avatar">
                  <div class="member-icon">${m.icon || '・'}</div>
                  <span class="member-name">${m.name}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="feature-grid">
          <div class="feature-card" data-route="/flashcard">
            <span class="feature-icon">離・・/span>
            <span class="feature-label">蜊倩ｪ槭き繝ｼ繝・/span>
          </div>
          <div class="feature-card" data-route="/checklist">
            <span class="feature-icon">賜</span>
            <span class="feature-label">謖√■迚ｩ繝√ぉ繝・け</span>
          </div>
          <div class="feature-card" data-route="/schedule">
            <span class="feature-icon">套</span>
            <span class="feature-label">繧ｹ繧ｱ繧ｸ繝･繝ｼ繝ｫ</span>
          </div>
          <div class="feature-card" data-route="/research">
            <span class="feature-icon">剥</span>
            <span class="feature-label">繝ｪ繧ｵ繝ｼ繝・/span>
          </div>
          <div class="feature-card" data-route="/budget">
            <span class="feature-icon">腸</span>
            <span class="feature-label">雋ｻ逕ｨ繝｡繝｢</span>
          </div>
          <div class="feature-card" data-route="/omiyage">
            <span class="feature-icon">氏</span>
            <span class="feature-label">縺雁悄逕｣</span>
          </div>
        </div>

        <button id="btn-edit-trip" class="btn btn-secondary btn-small w-full mt-md" style="margin-bottom: 16px;">
          笨擾ｸ・譌・｡梧ュ蝣ｱ繧堤ｷｨ髮・        </button>
      </div>
    `;
  },

  init() {
    document.getElementById('btn-create-trip')?.addEventListener('click', () => navigate('/trip/new'));
    document.getElementById('btn-edit-trip')?.addEventListener('click', () => navigate('/trip/edit'));
    
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('click', () => {
        const route = card.getAttribute('data-route');
        if (route) navigate(route);
      });
    });
  }
};
