export function baseMap(target, colonies) {
    navigator.geolocation.getCurrentPosition((location) => {
        const userCoordinates = [location.coords.longitude, location.coords.latitude];
        const map = L.map(target).setView(userCoordinates, 4);
        let baselayer = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png', {
            zoom: 3,
            tms: false,
        }).addTo(map).setZIndex(0);
    });
}
