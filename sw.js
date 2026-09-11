// 记账小助手 · Service Worker
// 缓存优先策略：已缓存资源直接返回，未缓存则走网络并回填；网络失败时回退到缓存的 HTML
const CACHE_NAME = 'aa-bill-v2';
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // 只处理 GET 请求
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((response) => {
          // 缓存成功的同源响应
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return response;
        })
        .catch(() => {
          // 网络失败：导航请求回退到 HTML
          if (req.mode === 'navigate') return caches.match('./aa-bill-splitter.html');
          return cached;
        });
      return cached || fetchPromise;
    })
  );
});
