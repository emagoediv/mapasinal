function alterLocation(latitude, longitude, zoom) {
    if (map === undefined) {
        map = L.map('mapid').setView([latitude, longitude], zoom);
    } else {
        map.remove();
        map = L.map('mapid').setView([latitude, longitude], zoom);
        let select = document.querySelector('#operadora')
        requestCircles(select.value)
    }
}