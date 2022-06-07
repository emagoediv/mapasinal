function requestCadCircle(dados, func) {
    fetch(WEBSERVER, {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
            func(returneds)
    })
}

var corCod;

let formCircleCad = document.querySelector("#formCadCircle")
formCircleCad.addEventListener("submit", e => {
    e.preventDefault()
    let cor = document.querySelector("#cor")
    let coords = selectArea()
    if (coords[0] != undefined && coords[1] != undefined) {
        dados = new FormData(formCircleCad)
        dados.append("request", true)
        dados.append("action", "cadastrarCircle")
        dados.append("request", true)
        dados.append("idUser", cookie.get("idUser"))
        dados.append("latitude", coords[0])
        dados.append("longitude", coords[1])
        getColor(cor.value)
        dados.append("color", corCod)
        requestCadCircle(dados, returnCadCircle)
    } else {
        alert("selectione um ponto central no mapa antes de cadastrar uma nova área")

    }
    
})

function returnCadCircle(returned) {
    if (returned.status == true) {
        generateMap()
        requestCircles(select.value)
        alert("Área cadastrada com sucesso")
    } else {
        alert("Falha ao cadastrar área")
    }
}

function getColor(color) {
    colors.forEach(colorCod => {
        if(colorCod[1] == color) {
            corCod = colorCod[0]
        }
    })
}

