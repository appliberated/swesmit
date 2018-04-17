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
    "/scripts/hello.js",
    "/scripts/app.js"
];

function logSendMessage(message) {
    console.log(message);
    self.clients.matchAll({ includeUncontrolled: true, type: "window" }).then(clients => {
        clients.forEach(client => client.postMessage(message));
    });
}

self.addEventListener("install", event => {
    logSendMessage("[SW] Install");

    event.waitUntil(
        caches.open(cacheName).then(cache => {
            const promises = [];
            filesToCache.forEach(file => {
                logSendMessage(`[SW] cache.add ${file}`);
                const promise = cache.add(file).catch(error => logSendMessage(`<em>[SW] Oops! ${error}</em>`));
                promises.push(promise);
            })
            // return promises;

            logSendMessage("[SW] cache.addAll");
            // To make Chrome crash, do not remove the last file before calling cache.addAll
            const files = filesToCache.slice(-1);
            return cache.addAll(files).catch(error => logSendMessage(`<em>[SW] Oops! ${error}</em>`));
        })
    );
});

self.addEventListener("fetch", event => {
    logSendMessage(`[SW] Fetch ${JSON.stringify(event)}`);
    event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
