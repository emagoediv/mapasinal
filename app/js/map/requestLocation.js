var map;

function success(pos){
    alterLocation(pos.coords.latitude, pos.coords.longitude)
    console.log(pos.coords.latitude, pos.coords.longitude)


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Eu estou aqui!')
        .openPopup();

    map.on('click', function(ev) {
        console.log(ev)
        let popup = L.popup()
            .setLatLng(ev.latlng)
            .setContent('<p>latitude'+ev.latlng.lat+' <br> longitude:'+ev.latlng.lng+'</p>')
            .openOn(map);
    });
    

}

function error(err){
    alert("Para que o sistema funcione, necessitamos que aceite o uso de localização do dispositivo")
}

function generateMap () {
var mymap = navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});
}

generateMap()

