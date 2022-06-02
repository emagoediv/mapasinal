var formCadUser = document.querySelector("#formCad")
formCadUser.addEventListener("submit", e => {
    e.preventDefault()
    dados = new FormData(formCadUser)
    dados.append("action", "cadastrarUser")
    dados.append('request', true)
    requestUser(dados, returnCad)
})


function returnCad(returned) {
    if(returned.status == true) {
        window.alert("Usuário cadastrado com sucesso")
        let btnClose = document.querySelector("#btnCloseModalCad")
        btnClose.click()
    } else {
         window.alert("Email já existente")
    }
}