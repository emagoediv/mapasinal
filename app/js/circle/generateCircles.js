function generateCircle(latitude, longitude, raio, color, cor) {
    raio = raio * 600
    let circle = L.circle([latitude, longitude], {
        color: cor,
        fillColor: color,
        fillOpacity: 0.3,
        radius: raio
    }).addTo(map)
}
