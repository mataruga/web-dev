     var lat = 0;
     var lng = 0;
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.3498092, lng: 18.0684758},
          zoom: 15,
            disableDefaultUI: true,
            mapTypeId: 'hybrid'
        });
          
          var marker1 = new google.maps.Marker({
          position: {lat: 59.3498092, lng: 18.0684758},
          map: map,
          title: 'Draggable'
        });
          
          var marker2 = new google.maps.Marker({
          position: {lat: 59.3490992, lng: 18.0600058},
          map: map,
          title: 'Not Draggable'
        });
          marker1.setDraggable(true);
         /* marker1.setAnimation(google.maps.Animation.BOUNCE);*/
          marker2.setAnimation(google.maps.Animation.DROP);
      }
   
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}
                                        
function showPosition(position) {
    
    lat = position.coords.latitude;
    lng = position.coords.longitude;
}

        $('#zoomin').click(function(){
            map.setZoom(map.getZoom()+1);
        });
        
        $('#zoomout').click(function(){ 
            map.setZoom(map.getZoom()-1);
        });
   
        $('#left').click(function(){
            map.setCenter(new google.maps.LatLng(map.getCenter().lat(),map.getCenter().lng()-0.001));
        });
        $('#right').click(function(){
            map.setCenter(new google.maps.LatLng(map.getCenter().lat(),map.getCenter().lng()+0.001));
        });
        $('#up').click(function(){
            map.setCenter(new google.maps.LatLng(map.getCenter().lat()+0.001,map.getCenter().lng()));
        });
        $('#down').click(function(){
            map.setCenter(new google.maps.LatLng(map.getCenter().lat()-0.001,map.getCenter().lng()));
        });

        $('#add').click(function(){

        var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: map
        });
            marker3.setAnimation(google.maps.Animation.DROP);
        });
        $('#terrain').click(function(){ 
            map.setMapTypeId("terrain");
        });
        $('#satellite').click(function(){ 
            console.log("asd");
            map.setMapTypeId("satellite");
        });
        $('#roadmap').click(function(){ 
            map.setMapTypeId("roadmap");
        });




