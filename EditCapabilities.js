//add edit toolbar to the map
// FeatureGroup is to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

//define the toolbar UI
var modifiedDraw = L.drawLocal.extend({
    draw: {
        toolbar: {
            buttons: {
                polygon: 'Draw an awesome polygon'
            }
        }
    }
});