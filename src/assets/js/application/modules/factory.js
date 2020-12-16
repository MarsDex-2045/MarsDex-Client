export function baseMap(target, colonies) {
    navigator.geolocation.getCurrentPosition((location) => {
        const userCoordinates = [location.coords.longitude, location.coords.latitude];
        const markers = generateColonyMarkers(colonies);
        new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: 'https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png'
                    })
                }),
                new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: markers
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

    function generateColonyMarkers(dataset){
        const markers = [];
        dataset.forEach(colony => {
            markers.push(new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([colony.location.longitude, colony.location.latitude]))
            }));
        });
        return markers;
    }
}
