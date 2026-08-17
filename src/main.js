// Main application entry point
import './styles/index.css';
import './styles/home.css';
import './styles/flashcard.css';
import './styles/checklist.css';
import './styles/schedule.css';
import './styles/research.css';
import './styles/extras.css';
import { registerRoute, navigate } from './utils/router.js';
import { ensureAuth } from './firebase.js';
import { setState, getState, subscribe } from './utils/store.js';
import { getTrips } from './utils/db.js';
import homePage from './pages/home.js';
import flashcardPage from './pages/flashcard.js';
import checklistPage from './pages/checklist.js';
import schedulePage from './pages/schedule.js';
import researchPage from './pages/research.js';
import budgetPage from './pages/budget.js';
import emergencyPage from './pages/emergency.js';
import omiyagePage from './pages/omiyage.js';
import tripFormPage from './pages/tripForm.js';
import { registerSW } from 'virtual:pwa-register';

// Register routes
registerRoute('/', homePage);
registerRoute('/flashcard', flashcardPage);
registerRoute('/checklist', checklistPage);
registerRoute('/schedule', schedulePage);
registerRoute('/research', researchPage);
registerRoute('/budget', budgetPage);
registerRoute('/emergency', emergencyPage);
registerRoute('/omiyage', omiyagePage);
registerRoute('/trip/new', tripFormPage);
registerRoute('/trip/edit', tripFormPage);

// App shell
function renderAppShell() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Header -->
    <header class="app-header" id="app-header">
      <div class="header-title">
<<<<<<< HEAD
        <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="header-mascot" />
        <span class="header-title-text">旅のしおり</span>
=======
        <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="た�Eくま" class="header-mascot" />
        <span class="header-title-text">旁E�EしおめE/span>
>>>>>>> 13b653023e3840875458148d9393e811f3545363
      </div>
      <div class="header-actions">
        <button class="header-btn" id="btn-share" title="共朁E>🔗</button>
        <button class="header-btn" id="btn-menu" title="メニュー">☰</button>
      </div>
    </header>

    <!-- Page Content -->
    <main id="page-content" class="page-transition"></main>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav" id="bottom-nav">
      <a class="nav-item active" data-route="/" href="javascript:void(0)">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">ホ�Eム</span>
      </a>
      <a class="nav-item" data-route="/flashcard" href="javascript:void(0)">
        <span class="nav-icon">🗣�E�E/span>
        <span class="nav-label">単誁E/span>
      </a>
      <a class="nav-item" data-route="/checklist" href="javascript:void(0)">
        <span class="nav-icon">🎒</span>
        <span class="nav-label">持ち物</span>
      </a>
      <a class="nav-item" data-route="/schedule" href="javascript:void(0)">
        <span class="nav-icon">📅</span>
        <span class="nav-label">予宁E/span>
      </a>
      <a class="nav-item" data-route="/research" href="javascript:void(0)">
        <span class="nav-icon">🔍</span>
        <span class="nav-label">調べめE/span>
      </a>
    </nav>

    <!-- Drawer Menu -->
    <div class="modal-overlay" id="drawer-overlay">
      <div class="modal-content drawer-content">
        <div class="modal-handle"></div>
        <div class="drawer-header">
<<<<<<< HEAD
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="drawer-mascot" />
=======
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="た�Eくま" class="drawer-mascot" />
>>>>>>> 13b653023e3840875458148d9393e811f3545363
          <h2>メニュー</h2>
        </div>
        <nav class="drawer-nav" id="drawer-nav">
          <a class="drawer-item" data-route="/">🏠 ホ�Eム</a>
          <a class="drawer-item" data-route="/flashcard">🗣�E�E単語カーチE/a>
          <a class="drawer-item" data-route="/checklist">🎒 持ち物チェチE��</a>
          <a class="drawer-item" data-route="/schedule">📅 スケジュール</a>
          <a class="drawer-item" data-route="/research">🔍 リサーチノーチE/a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/budget">💰 費用メモ</a>
          <a class="drawer-item" data-route="/emergency">📞 緊急連絡允E/a>
          <a class="drawer-item" data-route="/omiyage">🎁 お土産リスチE/a>
          <hr class="drawer-divider" />
          <div class="drawer-trips" id="drawer-trips">
            <p class="drawer-section-title">旁E��を刁E��替ぁE/p>
          </div>
        </nav>
      </div>
    </div>

    <!-- Share Modal -->
    <div class="modal-overlay" id="share-overlay">
      <div class="modal-content">
        <div class="modal-handle"></div>
        <div class="modal-title">🔗 しおりを共朁E/div>
        <div id="share-content"></div>
      </div>
    </div>
  `;
}

// Initialize
async function init() {
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    registerSW({ immediate: true });
  }

  renderAppShell();

  // Set up navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const route = item.getAttribute('data-route');
      navigate(route);
    });
  });

  // Drawer
  const drawerOverlay = document.getElementById('drawer-overlay');
  const shareOverlay = document.getElementById('share-overlay');
  
  document.getElementById('btn-menu').addEventListener('click', () => {
    drawerOverlay.classList.add('active');
  });

  document.getElementById('btn-share').addEventListener('click', () => {
    shareOverlay.classList.add('active');
    showShareModal();
  });

  [drawerOverlay, shareOverlay].forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  // Drawer navigation
  document.querySelectorAll('.drawer-item').forEach(item => {
    item.addEventListener('click', () => {
      const route = item.getAttribute('data-route');
      drawerOverlay.classList.remove('active');
      navigate(route);
    });
  });

  // Auth & load data
  try {
    const user = await ensureAuth();
    setState({ user });
    
    const trips = await getTrips(user.uid);
    setState({ trips });

    // Set current trip from localStorage or first trip
    const savedTripId = localStorage.getItem('currentTripId');
    if (savedTripId && trips.find(t => t.id === savedTripId)) {
      setState({ currentTripId: savedTripId, currentTrip: trips.find(t => t.id === savedTripId) });
    } else if (trips.length > 0) {
      setState({ currentTripId: trips[0].id, currentTrip: trips[0] });
      localStorage.setItem('currentTripId', trips[0].id);
    }

    updateDrawerTrips(trips);
  } catch (err) {
    console.error('Auth failed:', err);
  }

  // Hide loading screen
  const loading = document.getElementById('loading-screen');
  if (loading) loading.classList.add('hidden');

  // Navigate to initial route
  const path = window.location.pathname || '/';
  navigate(path, false);
}

function updateDrawerTrips(trips) {
  const container = document.getElementById('drawer-trips');
  if (!container) return;

  const state = getState();
  container.innerHTML = `
    <p class="drawer-section-title">旁E��を刁E��替ぁE/p>
    ${trips.map(trip => `
      <a class="drawer-trip-item ${trip.id === state.currentTripId ? 'active' : ''}" data-trip-id="${trip.id}">
        <span class="drawer-trip-emoji">✈︁E/span>
        <span class="drawer-trip-name">${trip.title || '無題�E旁E��E}</span>
      </a>
    `).join('')}
    <a class="drawer-trip-item drawer-trip-new" data-route="/trip/new">
      <span class="drawer-trip-emoji">➁E/span>
      <span class="drawer-trip-name">新しい旁E��を作�E</span>
    </a>
  `;

  // Trip switch handlers
  container.querySelectorAll('.drawer-trip-item[data-trip-id]').forEach(item => {
    item.addEventListener('click', () => {
      const tripId = item.getAttribute('data-trip-id');
      const trip = trips.find(t => t.id === tripId);
      if (trip) {
        setState({ currentTripId: tripId, currentTrip: trip });
        localStorage.setItem('currentTripId', tripId);
        document.getElementById('drawer-overlay').classList.remove('active');
        navigate('/');
      }
    });
  });

  container.querySelector('.drawer-trip-new')?.addEventListener('click', () => {
    document.getElementById('drawer-overlay').classList.remove('active');
    navigate('/trip/new');
  });
}

function showShareModal() {
  const state = getState();
  const content = document.getElementById('share-content');
  
  if (!state.currentTrip) {
    content.innerHTML = '<p class="empty-state-text">まず旅行を作�Eしてください</p>';
    return;
  }

  const shareId = state.currentTrip.shareId;
  if (shareId) {
    const shareUrl = `${window.location.origin}/share/${shareId}`;
    content.innerHTML = `
      <div class="share-info">
        <div class="form-group">
          <label class="form-label">共有URL</label>
          <input type="text" value="${shareUrl}" readonly id="share-url-input" />
        </div>
        <div class="form-group">
          <label class="form-label">パスワーチE/label>
          <input type="text" value="${state.currentTrip.sharePassword || ''}" readonly id="share-pw-input" />
        </div>
        <button class="btn btn-primary w-full" id="btn-copy-share">📋 URLをコピ�E</button>
      </div>
    `;
    document.getElementById('btn-copy-share')?.addEventListener('click', () => {
      navigator.clipboard.writeText(shareUrl + '\nパスワーチE ' + (state.currentTrip.sharePassword || ''));
      document.getElementById('btn-copy-share').textContent = '✁Eコピ�Eしました�E�E;
    });
  } else {
    content.innerHTML = `
      <div class="share-setup">
        <p class="text-sm text-muted mb-md">共有パスワードを設定して、仲間にURLを送りましょぁE��E/p>
        <div class="form-group">
          <label class="form-label">パスワーチE/label>
          <input type="text" id="share-password-input" placeholder="4斁E��以上�EパスワーチE />
        </div>
        <button class="btn btn-primary w-full" id="btn-create-share">🔗 共有リンクを作�E</button>
      </div>
    `;
  }
}

// Subscribe to trip changes to update drawer
subscribe('trips', (trips) => {
  updateDrawerTrips(trips);
});

// Start app
document.addEventListener('DOMContentLoaded', init);
