// Create a map centered at specific coordinates (latitude, longitude) and a zoom level
var map = L.map('map').setView([34.1458, -118.1475], 13); // Example: Pasadena


// Add a tile layer to the map (using OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// create geoJSON feature
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Rose Bowl",
        "amenity": "Rose Bowl",
        "popupContent": "Rose Bowl"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [ -118.167736 ,34.161037]
    }
};


// add GeoJSON feature to the map
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

//read geoJson file
const fs = require('fs');

// Replace 'path/to/your/file.geojson' with your actual file path
fs.readFile('Test.geojson', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const geoJson = JSON.parse(data);
    console.log("GeoJSON data:", geoJson);
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});