import { render, go } from './screens.js';
import { store } from './store.js';
import { UNITS, CHAPTERS } from './data/index.js';

render();
window.__app = { store, UNITS, CHAPTERS, go };

if ('serviceWorker' in navigator && location.protocol.startsWith('http') && location.hostname !== 'localhost') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
