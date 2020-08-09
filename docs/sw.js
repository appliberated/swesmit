/*
 *  SWESMIT. Copyright (c) 2018-2020 Appliberated. MIT License.
 *  https://github.com/appliberated/swesmit
 */

const cacheName = "cache-3";
const filesToCache = [
    "index.html",
    "/styles/normalize.css",
    "/styles/main.css",
    "/scripts/classic.js",
    "/scripts/app.js",
    "/scripts/hello.js"
];

function sendMessage(message) {
    self.clients.matchAll({ includeUncontrolled: true, type: "window" }).then(clients => {
        clients.forEach(client => client.postMessage(message));
    });
}

self.addEventListener("install", event => {
    sendMessage("[SW] Install event");

    event.waitUntil(
        Promise.all(
            filesToCache.map(file =>
                caches.open(cacheName).then(cache => {
                    return cache.add(file)
                        .then(() => { sendMessage(`[SW] cache.add ${file}`); })
                        .catch(error => sendMessage(`<strong>[SW] cache.add ${file} ${error}</strong>`));
                })
            ))
    );
});

self.addEventListener("fetch", event => {
    sendMessage(`[SW] Fetch ${event.request.url}`);
    event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
