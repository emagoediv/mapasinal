function requestCircles() {
    dados = new FormData
    dados.append('request', true)
    dados.append('action', 'lerCircle')
    fetch('http://localhost/mapasinal/server/webserver.php', {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
        for (returne in returneds) {
            generateCircle(returne.latitude, returne.longitude, returne.raio, returne.color, returne.cor)
        }
    })
}

requestCircles()