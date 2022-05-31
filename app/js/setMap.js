function alterLocation(latitude, longitude) {
    if (map === undefined) {
        map = L.map('mapid').setView([latitude, longitude], 13);
    } else {
        map.remove();
        map = L.map('mapid').setView([latitude, longitude], 13);
    }
}