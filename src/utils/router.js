// SPA Hash Router
const routes = {};
let currentPath = '';

export function registerRoute(path, pageModule) {
  routes[path] = pageModule;
}

export function navigate(path, updateHash = true) {
  if (currentPath === path) return;
  
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
  const titles = {
    '/': '旅のしおり',
    '/flashcard': '単語カード',
    '/checklist': '持ち物チェック',
    '/schedule': 'スケジュール',
    '/research': 'リサーチノート',
    '/budget': '費用メモ',
    '/emergency': '緊急連絡先',
    '/omiyage': 'お土産リスト',
    '/settings': '設定',
    '/trip/new': '新しい旅行',
    '/trip/edit': '旅行を編集',
    '/share': '共有しおり'
  };

  const headerTitle = document.querySelector('.header-title-text');
  if (headerTitle) {
    headerTitle.textContent = titles[path] || '旅のしおり';
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
