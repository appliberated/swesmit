/*
 *  SWESMIT. Copyright (c) 2018 HWALab. MIT License.
 *  https://github.com/hwalab/swesmit/
 */

/* eslint-disable no-console */

const cacheName = "cache-1";
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
    sendMessage("[SW] Install");

    event.waitUntil(
        Promise.all(
            filesToCache.map(file =>
                caches.open(cacheName).then(cache => {
                    return cache.add(file)
                        .then(() => { sendMessage(`[SW] cache.add ${file}`); })
                        .catch(error => sendMessage(`<em>[SW] cache.add ${file} ${error}</em>`));
                })
            ))
    );
});

self.addEventListener("fetch", event => {
    sendMessage(`[SW] Fetch ${JSON.stringify(event)}`);
    event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
