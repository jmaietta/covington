const CACHE_NAME = "lumberjacks-schedule-v2";
const ASSETS = [
    "/",
    "/index.html",
    "/jacks_logo.jpg",
    "/icon-180.png",
    "/icon-192.png",
    "/icon-512.png",
    "/lumberjacks-og.png",
    "/twitter-image.png",
    "/manifest.webmanifest"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys
                    .filter(function (key) {
                        return key !== CACHE_NAME;
                    })
                    .map(function (key) {
                        return caches.delete(key);
                    })
            );
        })
    );
});

self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
