//Inserting map for hotel location
function initMap(){
    var options = {
        zoom: 14,
        center: {lat: 6.5261, lng: 3.3921}
    };

    var map = new google.maps.Map(document.getElementsByClassName('map')[0], options);

    //Putting a marker on the map
    const marker = new google.maps.Marker({
        position: {lat: 6.5157, lng: 3.3899},
        map: map
    })
}