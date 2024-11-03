//read geoJson file from local http server and add to map
//server must be started with start_server.bat
//fetch is asychronous so if you try to use the geojson var outside of .then(), it might not be available yet
fetch('http://192.168.1.169:8080/Test.geojson')
  //parse response as json
  .then(response => response.json())
  //assign parsed json to geoJson var
  .then(geoJson => {
    //add geojson to the map and zoom to bounds
    map.fitBounds(L.geoJSON(geoJson).addTo(map).getBounds());
  })
  //catch any errors
  .catch(error => {
    console.error("Error fetching GeoJSON:", error);
  });