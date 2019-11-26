mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FscmVnZXYiLCJhIjoiY2szYndyZTRjMHFlcDNwczFtb2E5YTNlaSJ9.vT7bsybLpHgCgHGVPRmgTw';

// CONSTS //
const savedLocations = [];

var map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/outdoors-v11', 
    center: [-74.50, 40],
    zoom: 9 
});

map.on('click', function(e){
    let marker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(map);
    savedLocations.push(e.lngLat);
    clearBeforeRender();
    render();
});

let clearBeforeRender = () => {
    $('#allItems').html('');
}

let render = () => {
    $(savedLocations).each((i, e)=> {
        $('#allItems').append(`<div class="item" onClick="onClickHandler(${i})"> Location - ${i+1} </div>`); 
    });
};

onClickHandler = (inde) => {
   map.flyTo({ center: (Object.values(savedLocations[inde])), zoom: 11 }) ;
}











