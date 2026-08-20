// Main application entry point
import './styles/index.css';
import './styles/home.css';
import './styles/flashcard.css';
import './styles/checklist.css';
import './styles/schedule.css';
import './styles/research.css';
import './styles/extras.css';
import { registerRoute, navigate } from './utils/router.js';
import { ensureAuth, loginWithGoogle, linkGoogleAccount, logout } from './firebase.js';
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
import settingsPage from './pages/settings.js';
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
registerRoute('/settings', settingsPage);

// App shell
function renderAppShell() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Header -->
    <header class="app-header" id="app-header">
      <div class="header-title">
        <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="header-mascot" />
        <span class="header-title-text">${t('appTitle')}</span>
      </div>
      <div class="header-actions">
        <button class="header-btn" id="btn-share" title="${t('share')}">🔗</button>
        <button class="header-btn" id="btn-menu" title="${t('menu')}">☰</button>
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
          <img src="${import.meta.env.BASE_URL}images/mascot.jpg" alt="たびくま" class="drawer-mascot" />
          <h2>${t('menu')}</h2>
        </div>
        <nav class="drawer-nav" id="drawer-nav">
          <a class="drawer-item" id="btn-drawer-portal">🐻 TOPページ（旅行一覧）</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/">🏠 ${t('home')} (ダッシュボード)</a>
          <a class="drawer-item" data-route="/flashcard">🗣️ ${t('flashcardTitle')}</a>
          <a class="drawer-item" data-route="/checklist">🎒 ${t('checklistTitle')}</a>
          <a class="drawer-item" data-route="/schedule">📅 ${t('scheduleTitle')}</a>
          <a class="drawer-item" data-route="/research">🔍 ${t('researchTitle')}</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/budget">💰 ${t('budgetTitle')}</a>
          <a class="drawer-item" data-route="/emergency">📞 ${t('emergencyTitle')}</a>
          <a class="drawer-item" data-route="/omiyage">🎁 ${t('omiyageTitle')}</a>
          <a class="drawer-item" data-route="/settings">⚙️ ${t('settings') || '設定'}</a>
          <hr class="drawer-divider" />
          <div class="drawer-trips" id="drawer-trips">
            <p class="drawer-section-title">${t('switchTrip')}</p>
          </div>
          <hr class="drawer-divider" id="drawer-logout-divider" style="display:none;" />
          <a class="drawer-item" id="btn-drawer-logout" style="display:none; color: var(--color-danger);">🚪 ${t('logout') || 'ログアウト'}</a>
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
  
  
  document.getElementById('btn-menu').addEventListener('click', () => {
    drawerOverlay.classList.add('active');
  });

  document.getElementById('btn-share').addEventListener('click', async () => {
    const state = getState();
    if (!state.currentTrip) return;
    
    let shareId = state.currentTrip.shareId;
    if (!shareId) {
      const btn = document.getElementById('btn-share');
      const originalText = btn.innerHTML;
      btn.innerHTML = '⏳';
      try {
        shareId = await createShareLink(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, '');
        await updateTrip(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, { shareId });
        setState({ currentTrip: { ...state.currentTrip, shareId } });
      } catch(e) {
        alert('共有コードの生成に失敗しました。');
        btn.innerHTML = originalText;
        return;
      }
      btn.innerHTML = originalText;
    }

    navigator.clipboard.writeText(shareId).then(() => {
      // Show toast
      let toast = document.getElementById('share-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'share-toast';
        toast.style.position = 'fixed';
        toast.style.bottom = '80px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = 'var(--color-primary)';
        toast.style.color = 'white';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '24px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.zIndex = '9999';
        toast.style.transition = 'opacity 0.3s ease';
        toast.style.fontWeight = 'bold';
        document.body.appendChild(toast);
      }
      toast.textContent = '共有コードをコピーしました！';
      toast.style.opacity = '1';
      
      setTimeout(() => {
        toast.style.opacity = '0';
      }, 3000);
    }).catch(() => {
      alert('共有コード: ' + shareId);
    });
  });

  [drawerOverlay].forEach(overlay => {
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

  // Logout
  document.getElementById('btn-drawer-logout')?.addEventListener('click', async () => {
    try {
      await logout();
      window.location.reload();
    } catch (e) {
      alert('ログアウトに失敗しました: ' + e.message);
    }
  });

  // Portal
  document.getElementById('btn-drawer-portal')?.addEventListener('click', () => {
    setState({ currentTripId: null, currentTrip: null });
    document.getElementById('drawer-overlay').classList.remove('active');
    navigate('/', true, true);
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

    // Removed auto-select to always show TOP page
    // Users can select a trip from the drawer or the TOP page trips list
    setState({ currentTripId: null, currentTrip: null });

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
        navigate('/', true, true);
      }
    });
  });

  container.querySelector('.drawer-trip-new')?.addEventListener('click', () => {
    document.getElementById('drawer-overlay').classList.remove('active');
    navigate('/trip/new');
  });
}

async function showShareModal() {
  const modal = document.getElementById('share-modal');
  const content = document.getElementById('share-modal-content');
  const state = getState();
  
  if (!state.currentTrip) return;
  modal.classList.add('active');

  let shareId = state.currentTrip.shareId;
  
  if (!shareId) {
    content.innerHTML = '<p>共有コードを生成中...</p>';
    try {
      shareId = await createShareLink(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, '');
      await updateTrip(state.currentTrip.ownerId || state.user.uid, state.currentTrip.id, { shareId });
      setState({ currentTrip: { ...state.currentTrip, shareId } });
    } catch(e) {
      content.innerHTML = '<p>エラーが発生しました。</p>';
      return;
    }
  }

  content.innerHTML = `
    <div class="share-info text-center">
      <p class="text-sm mb-md" style="color: var(--color-text-light);">${t('shareSetupText') || 'この共有コードを友だちに教えてください。'}</p>
      <div class="form-group" style="margin-bottom: 24px;">
        <input type="text" value="${shareId}" readonly id="share-url-input" class="form-input" style="font-size: 1.5rem; text-align: center; letter-spacing: 4px; padding: 16px; border: 2px dashed var(--color-primary); background: var(--color-bg-light); border-radius: 12px;" />
      </div>
      <button class="btn btn-primary w-full" id="btn-copy-share" style="padding: 14px; font-size: 1.1rem; border-radius: 24px;">${t('shareCopyBtn') || 'コードをコピー'}</button>
    </div>
  `;
  
  document.getElementById('btn-copy-share')?.addEventListener('click', () => {
    navigator.clipboard.writeText(shareId);
    const btn = document.getElementById('btn-copy-share');
    btn.textContent = t('shareCopySuccess') || 'コピーしました！';
    btn.style.background = 'var(--color-secondary)';
    setTimeout(() => {
      btn.textContent = t('shareCopyBtn') || 'コードをコピー';
      btn.style.background = '';
    }, 2000);
  });
}

function updateAppShellVisibility() {
  const { currentTrip, user } = getState();
  const bottomNav = document.getElementById('bottom-nav');
  const headerActions = document.querySelector('.header-actions');
  const googleBtn = document.getElementById('btn-drawer-google');
  const googleText = document.getElementById('drawer-google-text');
  const logoutBtn = document.getElementById('btn-drawer-logout');
  const logoutDivider = document.getElementById('drawer-logout-divider');
  
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
      if (logoutBtn) logoutBtn.style.display = 'none';
      if (logoutDivider) logoutDivider.style.display = 'none';
    } else {
      if (googleText) googleText.textContent = t('googleLinked');
      if (googleBtn) googleBtn.style.color = 'var(--text-muted)';
      if (logoutBtn) logoutBtn.style.display = 'flex';
      if (logoutDivider) logoutDivider.style.display = 'block';
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
