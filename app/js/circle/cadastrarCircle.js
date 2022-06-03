function requestCadCircle(dados, func) {
    fetch(WEBSERVER, {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
            func(returneds)
    })
}

let formCircleCad = document.querySelector("#formCadCircle")
formCircleCad.addEventListener("submit", e => {
    e.preventDefault()
    let cor = document.querySelector("#cor")
    let coords = selectArea()
    dados = new FormData(formCircleCad)
    dados.append("request", true)
    dados.append("action", "cadastrarCircle")
    dados.append("request", true)
    dados.append("idUser", cookie.get("userId"))
    dados.append("latitude", coords[0])
    dados.append("longitude", coords[1])
    dados.append("color", getColor(cor.value))
    requestCadCircle(dados, returnCadCircle)
})

function returnCadCircle(returned) {
    if (returned.status == true) {
        alert("Área cadastrada com sucesso")
    } else {
        alert("Falha ao cadastrar área")
    }
}

function getColor(color) {
    colors.forEach(colorCod => {
        if(colorCod[1] == colorCod) {
            console.log(colorCod)
            return colorCod[0]
        }
    })
}

