import './style.css';
import { renderHome, setupCaptcha } from './pages/home';
import { renderBlog } from './pages/blog';

function router(): void {
  const path = window.location.pathname;
  const app = document.getElementById('app');
  if (!app) return;

  switch (path) {
    case '/':
      app.innerHTML = renderHome();
      setupCaptcha();
      break;
    case '/blog':
      app.innerHTML = renderBlog();
      break;
    default:
      app.innerHTML = `<div><h1>404 Not Found</h1></div>`;
  }
}

window.addEventListener('popstate', router);

document.addEventListener('click', (event) => {
  const target = event.target as HTMLAnchorElement;
  if (target.tagName === 'A' && target.href.startsWith(window.location.origin)) {
    event.preventDefault();
    history.pushState(null, '', target.href);
    router();
  }
});

router();
