// Service worker de Trading 369: permite instalar la app y abrirla sin conexión.
// - Páginas: primero la red (para recibir siempre la versión más nueva); si no hay
//   conexión, se usa la copia guardada.
// - Íconos y manifiesto: primero la copia guardada.
// - Precios de BTC (Binance/CoinGecko): no pasan por aquí; el dashboard los guarda aparte.
const VERSION = "trading369-v1";
const ARCHIVOS = [
    "./",
    "./index.html",
    "./Trading_13lunar.html",
    "./manifest.webmanifest",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-maskable-512.png",
    "./icons/apple-touch-icon.png",
    "./icons/favicon-64.png"
];

self.addEventListener("install", evento => {
    evento.waitUntil(caches.open(VERSION).then(cache => cache.addAll(ARCHIVOS)));
    self.skipWaiting();
});

self.addEventListener("activate", evento => {
    evento.waitUntil(
        caches.keys().then(claves => Promise.all(
            claves.filter(c => c !== VERSION).map(c => caches.delete(c))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", evento => {
    const req = evento.request;
    if (req.method !== "GET") return;
    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;   // APIs externas: directo a la red

    const esPagina = req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/");
    if (esPagina) {
        evento.respondWith(
            fetch(req).then(resp => {
                const copia = resp.clone();
                caches.open(VERSION).then(cache => cache.put(req, copia));
                return resp;
            }).catch(() => caches.match(req).then(r => r || caches.match("./Trading_13lunar.html")))
        );
    } else {
        evento.respondWith(caches.match(req).then(r => r || fetch(req)));
    }
});
