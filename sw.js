const CACHE_NAME = 'portfolio-cache-v2';
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
    console.log('[sw] install:', CACHE_NAME);
    self.skipWaiting();
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(PRECACHE_URLS).catch(() => { });
        const tsCache = await caches.open(TS_CACHE);
        const now = String(Date.now());
        // store timestamps using Request objects to keep keys consistent
        for (const url of PRECACHE_URLS) {
            await tsCache.put(new Request(url), new Response(now)).catch(() => { });
        }
    })());
});

self.addEventListener('activate', event => {
    console.log('[sw] activate:', CACHE_NAME);
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => {
            if (k !== CACHE_NAME && k !== TS_CACHE) return caches.delete(k);
        }));
        await self.clients.claim();
    })());
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    const req = event.request;
    const reqUrl = new URL(req.url);
    const isSameOrigin = reqUrl.origin === self.location.origin;

    // small log to confirm fetch handling (can be noisy)
    console.log('[sw] fetch', req.method, req.url, isSameOrigin ? 'same-origin' : 'cross-origin');

    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        const tsCache = await caches.open(TS_CACHE);

        const cached = await cache.match(req);
        if (cached && isSameOrigin) {
            // use consistent Request key for timestamp lookup
            const tsEntry = await tsCache.match(req);
            if (tsEntry) {
                const stored = parseInt(await tsEntry.text(), 10);
                if (!isNaN(stored) && (Date.now() - stored) <= MAX_AGE_MS) {
                    return cached; // within 7 days -> serve cached
                }
            } else {
                // no timestamp -> treat as fresh (precache)
                return cached;
            }
        }

        try {
            const networkResponse = await fetch(req);
            // cache same-origin successful responses and record timestamp
            if (isSameOrigin && networkResponse && networkResponse.status === 200 && networkResponse.type !== 'opaque') {
                cache.put(req, networkResponse.clone()).catch(() => { });
                tsCache.put(req, new Response(String(Date.now()))).catch(() => { });
            }
            return networkResponse;
        } catch (err) {
            // network failed -> return cached (even if stale) or simple offline response
            if (cached) return cached;
            return new Response('Offline', { status: 503, statusText: 'Offline' });
        }
    })());
});