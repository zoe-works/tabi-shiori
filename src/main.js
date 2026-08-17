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
        <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="縺溘・縺上∪" class="header-mascot" />
        <span class="header-title-text">譌・・縺励♀繧・/span>
      </div>
      <div class="header-actions">
        <button class="header-btn" id="btn-share" title="蜈ｱ譛・>迫</button>
        <button class="header-btn" id="btn-menu" title="繝｡繝九Η繝ｼ">笘ｰ</button>
      </div>
    </header>

    <!-- Page Content -->
    <main id="page-content" class="page-transition"></main>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav" id="bottom-nav">
      <a class="nav-item active" data-route="/" href="javascript:void(0)">
        <span class="nav-icon">匠</span>
        <span class="nav-label">繝帙・繝</span>
      </a>
      <a class="nav-item" data-route="/flashcard" href="javascript:void(0)">
        <span class="nav-icon">離・・/span>
        <span class="nav-label">蜊倩ｪ・/span>
      </a>
      <a class="nav-item" data-route="/checklist" href="javascript:void(0)">
        <span class="nav-icon">賜</span>
        <span class="nav-label">謖√■迚ｩ</span>
      </a>
      <a class="nav-item" data-route="/schedule" href="javascript:void(0)">
        <span class="nav-icon">套</span>
        <span class="nav-label">莠亥ｮ・/span>
      </a>
      <a class="nav-item" data-route="/research" href="javascript:void(0)">
        <span class="nav-icon">剥</span>
        <span class="nav-label">隱ｿ縺ｹ繧・/span>
      </a>
    </nav>

    <!-- Drawer Menu -->
    <div class="modal-overlay" id="drawer-overlay">
      <div class="modal-content drawer-content">
        <div class="modal-handle"></div>
        <div class="drawer-header">
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="縺溘・縺上∪" class="drawer-mascot" />
          <h2>繝｡繝九Η繝ｼ</h2>
        </div>
        <nav class="drawer-nav" id="drawer-nav">
          <a class="drawer-item" data-route="/">匠 繝帙・繝</a>
          <a class="drawer-item" data-route="/flashcard">離・・蜊倩ｪ槭き繝ｼ繝・/a>
          <a class="drawer-item" data-route="/checklist">賜 謖√■迚ｩ繝√ぉ繝・け</a>
          <a class="drawer-item" data-route="/schedule">套 繧ｹ繧ｱ繧ｸ繝･繝ｼ繝ｫ</a>
          <a class="drawer-item" data-route="/research">剥 繝ｪ繧ｵ繝ｼ繝√ヮ繝ｼ繝・/a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/budget">腸 雋ｻ逕ｨ繝｡繝｢</a>
          <a class="drawer-item" data-route="/emergency">到 邱頑･騾｣邨｡蜈・/a>
          <a class="drawer-item" data-route="/omiyage">氏 縺雁悄逕｣繝ｪ繧ｹ繝・/a>
          <hr class="drawer-divider" />
          <div class="drawer-trips" id="drawer-trips">
            <p class="drawer-section-title">譌・｡後ｒ蛻・ｊ譖ｿ縺・/p>
          </div>
        </nav>
      </div>
    </div>

    <!-- Share Modal -->
    <div class="modal-overlay" id="share-overlay">
      <div class="modal-content">
        <div class="modal-handle"></div>
        <div class="modal-title">迫 縺励♀繧翫ｒ蜈ｱ譛・/div>
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
    <p class="drawer-section-title">譌・｡後ｒ蛻・ｊ譖ｿ縺・/p>
    ${trips.map(trip => `
      <a class="drawer-trip-item ${trip.id === state.currentTripId ? 'active' : ''}" data-trip-id="${trip.id}">
        <span class="drawer-trip-emoji">笨茨ｸ・/span>
        <span class="drawer-trip-name">${trip.title || '辟｡鬘後・譌・｡・}</span>
      </a>
    `).join('')}
    <a class="drawer-trip-item drawer-trip-new" data-route="/trip/new">
      <span class="drawer-trip-emoji">筐・/span>
      <span class="drawer-trip-name">譁ｰ縺励＞譌・｡後ｒ菴懈・</span>
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
    content.innerHTML = '<p class="empty-state-text">縺ｾ縺壽羅陦後ｒ菴懈・縺励※縺上□縺輔＞</p>';
    return;
  }

  const shareId = state.currentTrip.shareId;
  if (shareId) {
    const shareUrl = `${window.location.origin}/share/${shareId}`;
    content.innerHTML = `
      <div class="share-info">
        <div class="form-group">
          <label class="form-label">蜈ｱ譛蔚RL</label>
          <input type="text" value="${shareUrl}" readonly id="share-url-input" />
        </div>
        <div class="form-group">
          <label class="form-label">繝代せ繝ｯ繝ｼ繝・/label>
          <input type="text" value="${state.currentTrip.sharePassword || ''}" readonly id="share-pw-input" />
        </div>
        <button class="btn btn-primary w-full" id="btn-copy-share">搭 URL繧偵さ繝斐・</button>
      </div>
    `;
    document.getElementById('btn-copy-share')?.addEventListener('click', () => {
      navigator.clipboard.writeText(shareUrl + '\n繝代せ繝ｯ繝ｼ繝・ ' + (state.currentTrip.sharePassword || ''));
      document.getElementById('btn-copy-share').textContent = '笨・繧ｳ繝斐・縺励∪縺励◆・・;
    });
  } else {
    content.innerHTML = `
      <div class="share-setup">
        <p class="text-sm text-muted mb-md">蜈ｱ譛峨ヱ繧ｹ繝ｯ繝ｼ繝峨ｒ險ｭ螳壹＠縺ｦ縲∽ｻｲ髢薙↓URL繧帝√ｊ縺ｾ縺励ｇ縺・ｼ・/p>
        <div class="form-group">
          <label class="form-label">繝代せ繝ｯ繝ｼ繝・/label>
          <input type="text" id="share-password-input" placeholder="4譁・ｭ嶺ｻ･荳翫・繝代せ繝ｯ繝ｼ繝・ />
        </div>
        <button class="btn btn-primary w-full" id="btn-create-share">迫 蜈ｱ譛峨Μ繝ｳ繧ｯ繧剃ｽ懈・</button>
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
