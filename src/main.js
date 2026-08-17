// Main application entry point
import './styles/index.css';
import './styles/home.css';
import './styles/flashcard.css';
import './styles/checklist.css';
import './styles/schedule.css';
import './styles/research.css';
import './styles/extras.css';
import { registerRoute, navigate } from './utils/router.js';
import { ensureAuth, loginWithGoogle, linkGoogleAccount } from './firebase.js';
import { setState, getState, subscribe, setLanguage } from './utils/store.js';
import { getTrips } from './utils/db.js';
import { t } from './utils/i18n.js';
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
        <img src="${import.meta.env.BASE_URL}images/tabikuma.jpg" alt="たびくま" class="header-mascot" />
        <span class="header-title-text">${t('appTitle')}</span>
      </div>
      <div class="header-actions">
        <button class="header-btn" id="btn-share" title="${t('share')}">🔗</button>
        <button class="header-btn" id="btn-menu" title="${t('menu')}">
          <img src="${import.meta.env.BASE_URL}images/tabikuma.jpg" alt="Menu" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover; display: block;" />
        </button>
      </div>
    </header>

    <!-- Page Content -->
    <main id="page-content" class="page-transition"></main>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav" id="bottom-nav">
      <a class="nav-item active" data-route="/" href="#/">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">${t('home')}</span>
      </a>
      <a class="nav-item" data-route="/flashcard" href="#/flashcard">
        <span class="nav-icon">🗣️</span>
        <span class="nav-label">${t('flashcard')}</span>
      </a>
      <a class="nav-item" data-route="/checklist" href="#/checklist">
        <span class="nav-icon">🎒</span>
        <span class="nav-label">${t('checklist')}</span>
      </a>
      <a class="nav-item" data-route="/schedule" href="#/schedule">
        <span class="nav-icon">📅</span>
        <span class="nav-label">${t('schedule')}</span>
      </a>
      <a class="nav-item" data-route="/research" href="#/research">
        <span class="nav-icon">🔍</span>
        <span class="nav-label">${t('research')}</span>
      </a>
    </nav>

    <!-- Drawer Menu -->
    <div class="modal-overlay" id="drawer-overlay">
      <div class="modal-content drawer-content">
        <div class="modal-handle"></div>
        <div class="drawer-header">
          <img src="${import.meta.env.BASE_URL}images/tabikuma.jpg" alt="たびくま" class="drawer-mascot" />
          <h2>${t('menu')}</h2>
        </div>
        <nav class="drawer-nav" id="drawer-nav">
          <a class="drawer-item" data-route="/">🏠 ${t('home')}</a>
          <a class="drawer-item" data-route="/flashcard">${t('flashcardTitle')}</a>
          <a class="drawer-item" data-route="/checklist">${t('checklistTitle')}</a>
          <a class="drawer-item" data-route="/schedule">📅 ${t('scheduleTitle')}</a>
          <a class="drawer-item" data-route="/research">🔍 ${t('researchTitle')}</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/budget">${t('budgetTitle')}</a>
          <a class="drawer-item" data-route="/emergency">${t('emergencyTitle')}</a>
          <a class="drawer-item" data-route="/omiyage">${t('omiyageTitle')}</a>
          <hr class="drawer-divider" />
          <div class="drawer-trips" id="drawer-trips">
            <p class="drawer-section-title">${t('switchTrip')}</p>
          </div>
          <hr class="drawer-divider" />
          <div class="drawer-language" style="display:flex; justify-content:space-around; padding: 12px 16px;">
            <button class="btn-lang" data-lang="ja" style="font-size:24px; background:none; border:none; cursor:pointer;">🇯🇵</button>
            <button class="btn-lang" data-lang="en" style="font-size:24px; background:none; border:none; cursor:pointer;">🇺🇸</button>
            <button class="btn-lang" data-lang="th" style="font-size:24px; background:none; border:none; cursor:pointer;">🇹🇭</button>
          </div>
          <a class="drawer-item" id="btn-drawer-google">
            <span style="margin-right:4px">🌐</span>
            <span id="drawer-google-text">${t('googleLink')}</span>
          </a>
        </nav>
      </div>
    </div>

    <!-- Share Modal -->
    <div class="modal-overlay" id="share-overlay">
      <div class="modal-content">
        <div class="modal-handle"></div>
        <div class="modal-title">🔗 しおりを共有</div>
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
  document.querySelectorAll('.drawer-item[data-route]').forEach(item => {
    item.addEventListener('click', () => {
      const route = item.getAttribute('data-route');
      drawerOverlay.classList.remove('active');
      navigate(route);
    });
  });

  // Google Login from Drawer
  document.getElementById('btn-drawer-google')?.addEventListener('click', async () => {
    const { user } = getState();
    if (user && !user.isAnonymous) return; // 既にログイン済み

    try {
      if (user && user.isAnonymous) {
        await linkGoogleAccount();
      } else {
        await loginWithGoogle();
      }
      window.location.reload();
    } catch (e) {
      if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
        alert('ログインに失敗しました: ' + e.message);
      }
    }
  });

  // Language switch
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      window.location.reload();
    });
  });

  // Auth & load data
  try {
    const user = await ensureAuth();
    setState({ user });
    
    let trips = [];
    if (user) {
      trips = await getTrips(user.uid);
    }
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
    console.error('Initial data load failed:', err);
  }

  // Hide loading screen
  const loading = document.getElementById('loading-screen');
  if (loading) loading.classList.add('hidden');

  // Navigate to initial route
  const path = window.location.hash.replace('#', '') || '/';
  navigate(path, false);
}

function updateDrawerTrips(trips) {
  const container = document.getElementById('drawer-trips');
  if (!container) return;

  const state = getState();
  container.innerHTML = `
    <p class="drawer-section-title">${t('switchTrip')}</p>
    ${trips.map(trip => `
      <a class="drawer-trip-item ${trip.id === state.currentTripId ? 'active' : ''}" data-trip-id="${trip.id}">
        <span class="drawer-trip-emoji">✈️</span>
        <span class="drawer-trip-name">${trip.title || t('untitledTrip')}</span>
      </a>
    `).join('')}
    <a class="drawer-trip-item drawer-trip-new" data-route="/trip/new">
      <span class="drawer-trip-emoji">➕</span>
      <span class="drawer-trip-name">${t('createNewTrip')}</span>
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
    content.innerHTML = `<p class="empty-state-text">${t('noTripAlert')}</p>`;
    return;
  }

  const shareId = state.currentTrip.shareId;
  if (shareId) {
    const shareUrl = `${window.location.origin}/share/${shareId}`;
    content.innerHTML = `
      <div class="share-info">
        <div class="form-group">
          <label class="form-label">${t('shareUrl')}</label>
          <input type="text" value="${shareUrl}" readonly id="share-url-input" />
        </div>
        <div class="form-group">
          <label class="form-label">${t('sharePassword')}</label>
          <input type="text" value="${state.currentTrip.sharePassword || ''}" readonly id="share-pw-input" />
        </div>
        <button class="btn btn-primary w-full" id="btn-copy-share">${t('shareCopyBtn')}</button>
      </div>
    `;
    document.getElementById('btn-copy-share')?.addEventListener('click', () => {
      navigator.clipboard.writeText(shareUrl + '\n' + t('sharePassword') + ': ' + (state.currentTrip.sharePassword || ''));
      document.getElementById('btn-copy-share').textContent = t('shareCopySuccess');
    });
  } else {
    content.innerHTML = `
      <div class="share-setup">
        <p class="text-sm text-muted mb-md">${t('shareSetupText')}</p>
        <div class="form-group">
          <label class="form-label">${t('sharePassword')}</label>
          <input type="text" id="share-password-input" placeholder="****" />
        </div>
        <button class="btn btn-primary w-full" id="btn-create-share">${t('shareCreateBtn')}</button>
      </div>
    `;
  }
}

// UI visibility
function updateAppShellVisibility() {
  const { currentTrip, user } = getState();
  const bottomNav = document.getElementById('bottom-nav');
  const headerActions = document.querySelector('.header-actions');
  const googleBtn = document.getElementById('btn-drawer-google');
  const googleText = document.getElementById('drawer-google-text');
  
  if (!currentTrip) {
    if (bottomNav) bottomNav.classList.add('hidden');
    if (headerActions) headerActions.classList.add('hidden');
  } else {
    if (bottomNav) bottomNav.classList.remove('hidden');
    if (headerActions) headerActions.classList.remove('hidden');
  }

  if (user) {
    if (user.isAnonymous) {
      if (googleText) googleText.textContent = t('googleLink');
      if (googleBtn) googleBtn.style.color = 'inherit';
    } else {
      if (googleText) googleText.textContent = t('googleLinked');
      if (googleBtn) googleBtn.style.color = 'var(--text-muted)';
    }
  }
}

// Subscribe to state changes
subscribe('trips', (trips) => {
  updateDrawerTrips(trips);
});

subscribe('currentTrip', () => {
  updateAppShellVisibility();
});

// Start app
document.addEventListener('DOMContentLoaded', () => {
  init().then(() => updateAppShellVisibility());
});
