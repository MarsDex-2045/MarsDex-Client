"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js");
        navigator.serviceWorker.ready.then(() => registerForNotifications());
    }
}

function registerForNotifications() {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            registerPush();
        } else if (permission === "denied") {
            console.log("Denied");
        } else if (permission === "default") {
            console.log("Default");
        }
    });
}

const VAPID_PUBLIC_KEY = "BAcgnkauwyqPz1MI31KN9sN8wpIPEMkfhbmEijXcodAUzCoy1u5tIePU7HpATIv2VQOFN45Mu4Wc1qx-6HRxv_g";

function registerPush() {
    const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    };

    navigator.serviceWorker.ready.then(reg => {
        return reg.pushManager.subscribe(subscribeOptions);
    }).then(sub => {
        const json = JSON.parse(JSON.stringify(sub));
        addSubscription(json.endpoint, json.keys.auth, json.keys.p256dh).then(response => {
            localStorage.setItem("push-id", response.id);
        });
    });
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
