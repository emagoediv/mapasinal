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
            if(returneds.status) {
                    returneds.circles.forEach(circle => {
                        generateCircle(circle.latitude, circle.longitude, circle.raio, circle.color, circle.cor)
                    })
                }
            })
    }

let select = document.querySelector('#operadora')
select.addEventListener('change', () => {
    generateMap()
    requestCircles(select.value)
})