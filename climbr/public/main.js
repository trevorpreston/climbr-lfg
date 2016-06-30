console.log('connected')

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.740954, lng: -73.990183},
    zoom: 12
  });

  var myLatLng = {lat: 40.770395, lng: -73.974745};

  // var map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 4,
  //   center: myLatLng
  // });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

}



