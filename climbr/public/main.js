console.log('connected')

$(function(){

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.740954, lng: -73.990183},
    zoom: 12
  });


    $.ajax({
    url: '/locations',
    method: 'GET',
    dataType: 'json',
    success:
      function(data){
        let plotPoints = []
        for(let i = 0; i < data.length; i++){
          plotPoints.push([data[i]['lat-long'][0], data[i]['lat-long'][1]])
        }
        for(let j = 0; j < plotPoints.length; j++){
            new google.maps.Marker({
            position: {lat:plotPoints[j][0], lng:plotPoints[j][1]},
            map: map,
            title: 'Hello World!'
          })
        }

        console.log(plotPoints)

    }

  })
})

