"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    if ("serviceWorker" in navigator){
        navigator.serviceWorker.register("sw.js")
        navigator.serviceWorker.ready.then(() => registerForNotifications());
    }
}

function registerForNotifications() {
    Notification.requestPermission().then(permission => {
        if(permission === "granted") {
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
    let subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    };

    navigator.serviceWorker.ready.then(reg => {
        return reg.pushManager.subscribe(subscribeOptions);
    }).then(sub => {
        console.log(JSON.stringify(sub));
    });
}

function urlBase64ToUint8Array(base64String){
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}