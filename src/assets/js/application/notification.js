






















const VAPID_PUBLIC_KEY = ""

function registerPush(){
    let subscribeOptions = {
    userVisibleOnly : true,
    applicationServerKey: urlBase64TOUint8Array(VAPID_PUBLIC_KEY)
    };

    navigator.serviceWorker.ready.then(reg => {
        return reg.pushManager.subscribe(subscribeOptions);
    }).then(sub => {
    console.log(JSON.stringify(sub));
    });

}