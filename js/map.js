// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.7970967, lng: -2.2389284},
    zoom: 18
  });

  var marker = new google.maps.Marker({
    position: {lat: 53.7970967, lng: -2.2389284},
    map: map,
    animation: google.maps.Animation.DROP,
    draggable: false,
    title: 'ColneRoad Service & MOT'
  });
 

  // Change its bg colour;
  $("#map").css("background-color", "inherit");
}