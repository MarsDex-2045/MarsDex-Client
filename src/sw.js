"use strict";

self.addEventListener("install", e => {
});

self.addEventListener("push", e => {
    let msg = e.data.text();
    self.registration.showNotification(msg);
});

self.addEventListener("notificationclick", e => {
        if (e.notification.tag === "yes") {
            e.waitUntil(
                self.clients.openWindow("http://localhost:63343/client/src/")
            );
        } else if (e.notification.tag === "no") {
            e.waitUntil(
                self.clients.openWindow("http://127.0.0.1:5501/denied.html")
            );
        }
    }
);