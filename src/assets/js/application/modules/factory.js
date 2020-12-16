export function baseMap(target, colonies) {
    navigator.geolocation.getCurrentPosition((location) => {
        const userCoordinates = [location.coords.longitude, location.coords.latitude];
        const map = L.map(target).setView(userCoordinates, 4);
        addBaseLayer(map);
        addColonyMarkers(colonies, map, userCoordinates);
        addColonyLines(colonies, map);
    });
}

function addBaseLayer(target){
    new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png', {
        zoom: 3,
        tms: false,
    }).addTo(target).setZIndex(0);
}

function addColonyMarkers(dataset, target, user) {
    dataset.forEach(colony => {
        const marker = L.marker([colony.location.longitude, colony.location.latitude])
            .bindPopup(`<p><b>${colony.name}</b></p><a href="#" id="${colony.id}" class="colony-link">See Details</a>`).addTo(target);
        marker.on('click', makeLinkable);
    });
    L.circle(user, {color: 'blue', fillColor: 'blue', fillOpacity: 0.3, radius:50}).addTo(target);
    L.popup().setLatLng(user).setContent("<b>You are here</b>").openOn(target);
    function makeLinkable(){
        document.querySelector('.colony-link').addEventListener('click', changeToColony);
    }
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

function changeToColony(e){
    e.preventDefault();
    const id = e.target.getAttribute('id');
    localStorage.setItem("colony-id", id);
    console.log(window.location.href);
    if(window.location.href.includes("company")){
        window.location.assign("company-colony-details.html");
    } else{
        window.location.assign("martian-colony-details.html");
    }
}
