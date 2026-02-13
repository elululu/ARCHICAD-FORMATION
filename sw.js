// ==========================================
// SERVICE WORKER — AtelierLO Formation ARCHICAD
// Cache-first strategy for offline support
// ==========================================

const CACHE_NAME = 'atelierlo-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/app.html',
    '/css/landing.css',
    '/css/app.css',
    '/js/app.js',
    '/js/firebase-config.js',
    '/js/formation-data.js',
    '/js/formateur-detailed-guide.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap'
];

// Install — cache core assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// Activate — clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Fetch — cache first, then network
self.addEventListener('fetch', event => {
    // Skip non-GET and Firebase requests
    if (event.request.method !== 'GET') return;
    if (event.request.url.includes('firestore.googleapis.com')) return;
    if (event.request.url.includes('identitytoolkit.googleapis.com')) return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                // Cache successful responses
                if (response.ok && response.type === 'basic') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => {
                // Fallback for navigation requests
                if (event.request.mode === 'navigate') {
                    return caches.match('/app.html');
                }
            });
        })
    );
});
