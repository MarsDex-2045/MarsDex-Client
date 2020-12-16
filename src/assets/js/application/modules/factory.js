export function baseMap(target, colonies) {
    navigator.geolocation.getCurrentPosition((location) => {
        const userCoordinates = [location.coords.longitude, location.coords.latitude];
        const map = L.map(target).setView(userCoordinates, 4);
        addBaseLayer(map);
        addColonyMarkers(colonies, map);
    });
}

function addBaseLayer(target){
    new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png', {
        zoom: 3,
        tms: false,
    }).addTo(target).setZIndex(0);
}

function addColonyMarkers(dataset, target) {
    dataset.forEach(colony => {
        L.marker([colony.location.longitude, colony.location.latitude]).bindPopup(`<b>${colony.name}</b>`).addTo(target);
    });
}
