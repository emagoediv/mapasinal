var formLoginUser = document.querySelector("#formLogin")
formLoginUser.addEventListener("submit", e => {
    e.preventDefault()
    dados = new FormData(formLoginUser)
    dados.append("action", "loginUser")
    dados.append('request', true)
    requestUser(dados, returnLogin)
})


function returnLogin(returned) {
    if(returned.status != false) {
        loginSucess()
        cookie.set("auth", true, 20)
        cookie.set("idUser", returned.status, 20)

    } else {
         window.alert("Usuário ou senha inválidos")
    }
}

function loginSucess() {
    let btnLoginModal = document.querySelector("#btnModalLogin")
    btnLoginModal.style.display = "none"
    let btnCircleModal = document.querySelector("#btnModalCircle")
    btnCircleModal.style.display = "inline-block"
    let btnClose = document.querySelector("#btnCloseModalLogin")
    let btnSair = document.querySelector("#btnSair")
    btnSair.style.display = "inline-block"
    btnClose.click()
}

function logOff() {
    let btnLoginModal = document.querySelector("#btnModalLogin")
    btnLoginModal.style.display = "inline-block"
    let btnCircleModal = document.querySelector("#btnModalCircle")
    btnCircleModal.style.display = "none"
    let btnClose = document.querySelector("#btnCloseModalLogin")
    let btnSair = document.querySelector("#btnSair")
    btnSair.style.display = "none"
}