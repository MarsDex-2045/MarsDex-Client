"use strict";

self.addEventListener("push", e => {
    const msg = e.data.text();
    self.registration.showNotification(msg);
});

self.addEventListener("notificationclick", e => {
        if (e.notification.tag === "yes") {
            e.waitUntil(
                self.clients.openWindow("./index.html")
            );
        } else if (e.notification.tag === "no") {
            e.waitUntil(
                self.clients.openWindow("http://127.0.0.1:5501/denied.html")
            );
        }
    }
);

