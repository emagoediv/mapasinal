function requestCircles(operadora) {
    dados = new FormData
    dados.append('operadora', operadora)
    dados.append('request', true)
    dados.append('action', 'lerCircle')
    fetch(WEBSERVER, {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
            if(!returneds.status) {
                for (let i in returneds) {
                    console.log(returneds[i].latitude, returneds[i].longitude, returneds[i].raio, returneds[i].color, returneds[i].cor)
                    generateCircle(returneds[i].latitude, returneds[i].longitude, returneds[i].raio, returneds[i].color, returneds[i].cor)
                }
            }
    }
)}

let select = document.querySelector('#operadora')
select.addEventListener('change', () => {
    generateMap()
    requestCircles(select.value)

})