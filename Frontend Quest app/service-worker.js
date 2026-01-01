// ВАЖНО: при каждом серьёзном обновлении приложения меняй версию
const CACHE_VERSION = "v4"; // было "v3"
const CACHE_NAME = `frontendquest-${CACHE_VERSION}`;

// Файлы "каркаса" приложения, которые должны быть всегда доступны оффлайн
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png"
];

// Установка: кешируем app shell и сразу просим активироваться
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );

  // говорим: "не жди, включайся сразу"
  self.skipWaiting();
});

// Активация: чистим старые кеши и перехватываем клиентов
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter(
            (key) => key.startsWith("frontendquest-") && key !== CACHE_NAME
          )
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Стратегия: для HTML — network-first, для остального — cache-first
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // нас интересуют только GET
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  const isSameOrigin = url.origin === self.location.origin;
  const isHTML =
    req.headers.get("accept") &&
    req.headers.get("accept").includes("text/html");

  // Для HTML: сначала сеть, при оффлайне — кеш
  if (isSameOrigin && isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  // Для статики: cache-first, потом сеть
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req).then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        return res;
      });
    })
  );
});
