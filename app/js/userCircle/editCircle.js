function editCircle(id) {
    let btnOpenModal = document.querySelector("#btnOpenModalEdit")

    btnOpenModal.click()
    requestEditCircle(id)
}


function requestEditCircle(id) {
    dados = new FormData
    dados.append('request', true)
    dados.append('action', 'editCircle')
    dados.append("idCircle", id)
    fetch(WEBSERVER, {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
            if(returneds.status) {
                
                let campoOperadora = document.querySelector("#operadoraEdit")
                let campoRaio = document.querySelector("#raioEdit")
                let campoCor = document.querySelector("#corEdit")
                returneds.circles.forEach(circle => {
                    console.log(circle)
                    campoOperadora.value = circle.operadora
                    campoRaio.value = circle.raio
                    campoCor.value = circle.cor
                    idEdit = circle.idCircle
                })
            }
        }
    )
}

var corCodEdit;
var idEdit;
let formEditCircle = document.querySelector("#formEditCircle")
formEditCircle.addEventListener("submit", e => {
    e.preventDefault()
    dados = new FormData(formEditCircle)
    dados.append('request', true)
    let campoCor = document.querySelector("#corEdit")
    dados.append('action', 'saveCircle')
    dados.append("idCircle", idEdit)
    getColorEdit(campoCor.value)
    dados.append("color", corCodEdit)
    fetch(WEBSERVER, {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
            if(returneds.status) {
                generateMap()
                requestCircles(select.value)
                alert("Área editada com sucesso")
            }
        }
    )
})

function getColorEdit(color) {
    colors.forEach(colorCod => {
        if(colorCod[1] == color) {
            corCodEdit = colorCod[0]
        }
    })
}