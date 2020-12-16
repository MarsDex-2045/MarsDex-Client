export function baseMap(target, colonies) {
    navigator.geolocation.getCurrentPosition((location) => {
        const userCoordinates = [location.coords.longitude, location.coords.latitude];
        const map = L.map(target).setView(userCoordinates, 4);
        addBaseLayer(map);
        addColonyMarkers(colonies, map);
        addColonyLines(colonies, map);
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

function addColonyLines(dataset, target) {
    dataset.forEach(startColony => {
        dataset.forEach(endColony => {
            const latlngs = [
                [startColony.location.longitude, startColony.location.latitude],
                [endColony.location.longitude, endColony.location.latitude]
            ];
            L.polyline(latlngs, {color: getRandomColor(),opacity: 0.75,lineCap: 'round',dashArray: "50", weight: 5}).addTo(target);
        });
        dataset.shift();
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
