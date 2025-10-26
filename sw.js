const CACHE_NAME = 'portfolio-cache-v1';
const TS_CACHE = CACHE_NAME + '-ts';
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const PRECACHE_URLS = [
    '/', '/index.html',
    '/style.css', '/mediaqueries.css', '/script.js',
    '/darkmode.js', '/languagetoggle.js',
    '/assets/profile-pic.png', '/assets/about-pic.png'
    // add other local assets you want pre-cached
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(PRECACHE_URLS).catch(() => { });
            const tsCache = await caches.open(TS_CACHE);
            const now = String(Date.now());
            for (const url of PRECACHE_URLS) {
                // store a timestamp entry (use URL string as key)
                await tsCache.put(url, new Response(now));
            }
        })()
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        (async () => {
            // remove old caches if you change CACHE_NAME in future
            const keys = await caches.keys();
            await Promise.all(keys.map(k => {
                if (k !== CACHE_NAME && k !== TS_CACHE) return caches.delete(k);
            }));
            await self.clients.claim();
        })()
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    // Do not try to handle browser extension or chrome internal requests
    const reqUrl = new URL(event.request.url);

    // Only handle same-origin requests for caching control (network allowed for cross-origin)
    const isSameOrigin = reqUrl.origin === self.location.origin;

    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        const tsCache = await caches.open(TS_CACHE);

        // Try cached response first (fast), but check timestamp
        const cached = await cache.match(event.request);
        if (cached && isSameOrigin) {
            const tsEntry = await tsCache.match(event.request.url);
            if (tsEntry) {
                const stored = parseInt(await tsEntry.text(), 10);
                if (!isNaN(stored) && (Date.now() - stored) <= MAX_AGE_MS) {
                    return cached; // fresh within 7 days
                }
            } else {
                // no timestamp -> treat as fresh
                return cached;
            }
        }

        // Try network, fall back to cached if network fails
        try {
            const response = await fetch(event.request);
            // only cache same-origin, successful, non-opaque GET responses
            if (isSameOrigin && response && response.status === 200 && response.type !== 'opaque') {
                cache.put(event.request, response.clone()).catch(() => { });
                tsCache.put(event.request.url, new Response(String(Date.now()))).catch(() => { });
            }
            return response;
        } catch (err) {
            // on failure return cached (even if stale) or a fallback
            if (cached) return cached;
            return new Response('Offline', { status: 503, statusText: 'Offline' });
        }
    })());
});