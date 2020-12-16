export function baseMap(target) {
    let userCoordinates;
    navigator.geolocation.getCurrentPosition((location) => {
        userCoordinates = [location.coords.longitude, location.coords.latitude];
        new ol.Map({
            controls: ol.control.defaults({
                attribution: false
            }).extend(
                [new ol.control.Attribution({collapsible: false})]
            ),
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: 'https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png'
                    })
                })
            ],
            target: target,
            view: new ol.View({
                center: ol.proj.fromLonLat(userCoordinates),
                maxZoom: 18,
                zoom: 1
            })
        });
    });
}
