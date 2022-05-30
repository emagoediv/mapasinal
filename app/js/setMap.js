function setMap (latitude, longitude) {
    if(map === undefined) {
        map = L.map('map').setView([latitude, longitude], 13);
    } else {
        map.remove()
        map = L.map('map').setView([latitude, longitude], 13);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
}
