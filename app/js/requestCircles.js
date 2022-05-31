function requestCircles(operadora) {
    dados = new FormData
    dados.append('operadora', operadora)
    dados.append('request', true)
    dados.append('action', 'lerCircle')
    fetch('http://localhost/mapasinal/server/webserver.php', {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
        for (let returne of Object.entries(returneds)) {
            generateCircle(returne.latitude, returne.longitude, returne.raio, returne.color, returne.cor)
         }
    }
)}

let select = document.querySelector('#operadoras')
select.addEventListener('change', () => {
    requestCircles(select.value)
})