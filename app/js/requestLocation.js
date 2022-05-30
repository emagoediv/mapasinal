let textPosition = document.querySelector('#txtPos')
var map
function success(position) {
	textPosition.innerHTML = `
	Latidude: ${position.coords.latitude}<br>
	Longitude: ${position.coords.longitude}<br>
	`
	//setMap(position.coords.latitude, position.coords.longitude)
	if(map === undefined) {
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
    } else {
        map.remove()
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
}

function error(error) {
	alert("Aceite o uso de locaçização para melhor usabilidade")
}

var positionUser = navigator.geolocation.watchPosition(success, error)
