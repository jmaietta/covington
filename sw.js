const CACHE_NAME = "lumberjacks-schedule-v9";
const ASSETS = [
    "/",
    "/index.html",
    "/jacks_logo.jpg",
    "/icon-180.png",
    "/icon-192.png",
    "/icon-512.png",
    "/lumberjacks-social-v4.png",
    "/manifest.webmanifest"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
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
    self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") {
        return;
    }

    if (event.request.mode === "navigate" || event.request.destination === "document") {
        event.respondWith(
            fetch(event.request)
                .then(function (response) {
                    const responseCopy = response.clone();

                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, responseCopy);
                    });

                    return response;
                })
                .catch(function () {
                    return caches.match(event.request);
                })
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
