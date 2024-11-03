// Create a map with drawControl on centered at specific coordinates,zoom level
var map = L.map('map', {drawControl: true}).setView([34.1458, -118.1475], 13); // Example: Pasadena

// Add a tile layer to the map (using OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);






