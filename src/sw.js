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
        }
    }
);

