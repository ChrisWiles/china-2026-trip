(() => {
  const status = document.getElementById('offline-status');
  const button = document.getElementById('install-app');
  let prompt;
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    prompt = event;
    button.hidden = false;
  });
  button.addEventListener('click', async () => {
    if (!prompt) return;
    await prompt.prompt();
    prompt = null;
    button.hidden = true;
  });
  window.addEventListener('appinstalled', () => { button.hidden = true; });
  if (!('serviceWorker' in navigator) || !window.isSecureContext) {
    status.textContent = 'Offline saving is unavailable in this browser. Open this site in Safari or Chrome.';
    return;
  }
  let ready = false;
  const showReady = () => {
    if (!ready) return;
    status.textContent = navigator.onLine
      ? 'Saved for offline · Guide and photos are ready on this device.'
      : 'You’re offline · Showing the saved guide and photos.';
  };
  navigator.serviceWorker.register('./sw.js').then(registration => {
    if (registration.active) { ready = true; showReady(); }
    navigator.serviceWorker.ready.then(() => { ready = true; showReady(); });
    registration.addEventListener('updatefound', () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener('statechange', () => {
        if (worker.state === 'redundant') status.textContent = 'Download did not finish. Reopen online to try again; keep this page open until saved.';
      });
    });
    window.addEventListener('online', showReady);
    window.addEventListener('offline', () => {
      if (registration.active) { ready = true; showReady(); }
      else status.textContent = 'You’re offline · Reconnect to finish saving the guide.';
    });
  }).catch(() => {
    status.textContent = 'Could not save offline. Reopen online to try again.';
  });
})();
