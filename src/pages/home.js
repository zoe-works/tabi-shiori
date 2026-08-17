import { getState } from '../utils/store.js';
import { navigate } from '../utils/router.js';

export default {
  render() {
    const { currentTrip } = getState();
    
    if (!currentTrip) {
      return `
        <div class="page">
          <div class="welcome-section">
<<<<<<< HEAD
            <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="welcome-mascot" />
            <h1 class="welcome-title">旅のしおりを作ろう！</h1>
            <p class="welcome-text">旅行の計画から記録まで、<br>みんなで楽しく作る旅のしおり 🌴</p>
            <button id="btn-create-trip" class="btn btn-primary">✨ 新しい旅行を作成</button>
=======
            <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="た�Eくま" class="welcome-mascot" />
            <h1 class="welcome-title">旁E�Eしおりを作ろぁE��E/h1>
            <p class="welcome-text">旁E���E計画から記録まで、Ebr>みんなで楽しく作る旁E�EしおめE🌴</p>
            <button id="btn-create-trip" class="btn btn-primary">✨ 新しい旁E��を作�E</button>
>>>>>>> 13b653023e3840875458148d9393e811f3545363
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
        <span class="countdown-label">旁E��まであと</span>
        <span class="countdown-number">${diff}</span>
        <span class="countdown-unit">日�E�E/span>
      `;
    } else if (today >= startNorm && today <= endNorm) {
      const diff = Math.ceil((today - startNorm) / (1000 * 60 * 60 * 24)) + 1;
      countdownHtml = `<span class="countdown-during">🎉 旁E��E${diff}日目�E�E/span>`;
    } else {
      countdownHtml = `<span class="countdown-during">✨ おつかれさまでした�E�E/span>`;
    }

    const formatDate = (d) => `${d.getFullYear()}年${d.getMonth() + 1}朁E{d.getDate()}日`;

    const destinations = currentTrip.destinations || [];
    const members = currentTrip.members || [];

    return `
      <div class="page">
        <div class="home-hero">
<<<<<<< HEAD
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="home-mascot" />
          <h1 class="home-trip-title">${currentTrip.title || '無題の旅行'}</h1>
          <p class="home-trip-dates">${formatDate(start)} 〜 ${formatDate(end)}</p>
=======
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="た�Eくま" class="home-mascot" />
          <h1 class="home-trip-title">${currentTrip.title || '無題�E旁E��E}</h1>
          <p class="home-trip-dates">${formatDate(start)} 、E${formatDate(end)}</p>
>>>>>>> 13b653023e3840875458148d9393e811f3545363
          
          ${destinations.length > 0 ? `
            <div class="home-destinations">
              ${destinations.map(d => `<span class="chip chip-blue">📍 ${d.country || ''} ${d.city || ''}</span>`).join('')}
            </div>
          ` : ''}
        </div>

        <div class="countdown-card">
          ${countdownHtml}
        </div>

        ${members.length > 0 ? `
          <div class="card card-sm mb-lg">
            <p class="text-sm fw-bold mb-sm">👥 メンバ�E</p>
            <div class="members-row">
              ${members.map(m => `
                <div class="member-avatar">
                  <div class="member-icon">${m.icon || '�E'}</div>
                  <span class="member-name">${m.name}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="feature-grid">
          <div class="feature-card" data-route="/flashcard">
            <span class="feature-icon">🗣�E�E/span>
            <span class="feature-label">単語カーチE/span>
          </div>
          <div class="feature-card" data-route="/checklist">
            <span class="feature-icon">🎒</span>
            <span class="feature-label">持ち物チェチE��</span>
          </div>
          <div class="feature-card" data-route="/schedule">
            <span class="feature-icon">📅</span>
            <span class="feature-label">スケジュール</span>
          </div>
          <div class="feature-card" data-route="/research">
            <span class="feature-icon">🔍</span>
            <span class="feature-label">リサーチE/span>
          </div>
          <div class="feature-card" data-route="/budget">
            <span class="feature-icon">💰</span>
            <span class="feature-label">費用メモ</span>
          </div>
          <div class="feature-card" data-route="/omiyage">
            <span class="feature-icon">🎁</span>
            <span class="feature-label">お土産</span>
          </div>
        </div>

        <button id="btn-edit-trip" class="btn btn-secondary btn-small w-full mt-md" style="margin-bottom: 16px;">
          ✏︁E旁E��情報を編雁E        </button>
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
