console.log('connected')

$(function(){



  //generate map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.740954, lng: -73.990183},
    zoom: 12
  });


  //add event listener to get lat/long on click
  google.maps.event.addListener(map, 'click', getLatLong)

  function getLatLong(e){
    var myLatLng = e.latLng;
    var lat = myLatLng.lat();
    var lng = myLatLng.lng();
    latLongArr=[];
    latLongArr.push(lat,lng);
    console.log(latLongArr);
    $('input[name=createLatLong]').val(latLongArr)
    generateMarkers()
  }

  $('#addNewBtn').on('click', function(e){
    $('#createNew').css('display', 'block');
  })

  //generate markers
  function makeMarkers(plot){
    //create empty array for coordinates
    let filteredPoints = []
    //add coordinates of locations to array
    for(let i = 0; i < plot.length; i++){
      filteredPoints.push({
        name: plot[i].name,
        location: [
            plot[i]['lat-long'][0],
            plot[i]['lat-long'][1]
          ],
        type: plot[i].type,
        'difficulty-rating': plot[i]['difficulty-rating'],
        'number-of-routes': plot[i]['number-of-routes'],
        info: plot[i].info,
        'submitted-by': plot[i]['submitted-by']
      })
    }

    //create markers for each locations at that array.  Attach name/type/info to marker.
    for(let j = 0; j < filteredPoints.length; j++){
        var marker = new google.maps.Marker({
          position: {lat:filteredPoints[j].location[0], lng:filteredPoints[j].location[1]},
          map: map,
          name: filteredPoints[j].name,
          type:filteredPoints[j].type,
          info: filteredPoints[j].info,
          'difficulty-rating': filteredPoints[j]['difficulty-rating'],
          'number-of-routes': filteredPoints[j]['number-of-routes'],
          info: filteredPoints[j].info,
          'submitted-by': filteredPoints[j]['submitted-by']

        })
        marker.addListener('click', function(){
          updateInfo(this)
        });
    }
  }

  function updateInfo(point){
    $('#routeName').text(point.name)
    $('#routeType').text(point.type)
    $('#routeDifficulty').text(point['difficulty-rating'])
    $('#routeInfo').text(point.info)
    $('#routeContributor').text(point['submitted-by'])

  }

  function generateMarkers(){
    $.ajax({
      url: '/locations',
      method: 'GET',
      dataType: 'json',
      success: function(data){
        makeMarkers(data)
        console.log(data)
      }
    });
  }

  generateMarkers()







})

