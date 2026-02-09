self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('muslim-app-v1').then((cache) => cache.addAll([
            './',
            './index.html',
            './imgs/icon.png',
            './imgs/dvo.jpeg',
            'https://cdn.tailwindcss.com',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});
