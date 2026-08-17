// SPA Hash Router
const routes = {};
let currentPath = '';

// Add i18n import
import { t } from './i18n.js';

export function registerRoute(path, pageModule) {
  routes[path] = pageModule;
}

export function navigate(path, updateHash = true, force = false) {
  if (currentPath === path && !force) return;
  
  const page = routes[path];
  if (!page) {
    console.warn(`Route not found: ${path}`);
    navigate('/');
    return;
  }

  currentPath = path;

  if (updateHash) {
    window.location.hash = path;
  }

  const container = document.getElementById('page-content');
  if (!container) return;

  // Fade out
  container.style.opacity = '0';
  container.style.transform = 'translateY(8px)';
  
  setTimeout(async () => {
    try {
      const html = await page.render();
      container.innerHTML = html;
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
      
      if (page.init) {
        page.init();
      }

      // Update nav
      updateNav(path);

      // Scroll to top
      window.scrollTo({ top: 0 });
    } catch (e) {
      console.error('Page render error:', e);
    }
  }, 150);
}

function updateNav(path) {
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('data-route');
    item.classList.toggle('active', href === path);
  });

  // Update header title
  const titleKeys = {
    '/': 'appTitle',
    '/flashcard': 'flashcardTitle',
    '/checklist': 'checklistTitle',
    '/schedule': 'scheduleTitle',
    '/research': 'researchTitle',
    '/budget': 'budgetTitle',
    '/emergency': 'emergencyTitle',
    '/omiyage': 'omiyageTitle',
    '/settings': 'menu', // No explicit settings key exists, but this is fine or use a direct fallback
    '/trip/new': 'tripFormNewTitle',
    '/trip/edit': 'tripFormEditTitle',
    '/share': 'share'
  };

  const headerTitle = document.querySelector('.header-title-text');
  if (headerTitle) {
    const key = titleKeys[path];
    if (key) {
      let localizedTitle = t(key);
      if (path === '/settings') localizedTitle = '設定'; // Fallback just in case
      headerTitle.textContent = localizedTitle;
    } else {
      headerTitle.textContent = t('appTitle');
    }
  }
}

export function getCurrentPath() {
  return currentPath;
}

// Handle back/forward (hashchange)
window.addEventListener('hashchange', () => {
  const path = window.location.hash.replace('#', '') || '/';
  navigate(path, false);
});

export default { registerRoute, navigate, getCurrentPath };
