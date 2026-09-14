// 记账小助手 · Service Worker
// 缓存优先策略：已缓存资源直接返回，未缓存则走网络并回填；网络失败时回退到缓存的 HTML
const CACHE_NAME = 'aa-bill-v2';
const PRECACHE = [
  // './index.html',   ← 删掉，HTML 不预缓存
  './manifest.json',
  './icons/launchericon-192x192.png',
  './icons/launchericon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE))
  );
  // 强制立即接管页面（不等待）
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  
  // HTML 请求：永远走网络（保证拿到最新版本）
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then(res => {
          // 同时更新缓存
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match('./index.html'))  // 离线 fallback
    );
    return;
  }

  // 其他资源（JS/CSS/图片）：cache-first
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
        }
        return res;
      });
    })
  );
});
