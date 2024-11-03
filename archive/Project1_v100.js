// Create a map centered at specific coordinates (latitude, longitude) and a zoom level
var map = L.map('map').setView([34.1458, -118.1475], 13); // Example: Pasadena


// Add a tile layer to the map (using OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker at the map's center point
var marker = L.marker([34.1458, -118.1475]).addTo(map);
marker.bindPopup("<b>Hello!</b><br>Welcome to Pasadena.");//.openPopup();

// add a polyline
var polyline = L.polyline([
    [34.1458, -118.1475],
    [34.1558, -118.1575],
    [34.1658, -118.1675]
]).addTo(map);
polyline.bindPopup("<b>ID Number: 000</b><br>This is a line.");

// add GeoJSON to the map
L.geoJSON(geojsonFeature).addTo(map);


// add functionality to the map

// show lat and long when clicking on blank part of the map
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);