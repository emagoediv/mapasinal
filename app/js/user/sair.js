let btnSair = document.querySelector("#btnSairClick")
btnSair.addEventListener("click", () => {
    cookie.set("auth", "false", 1)
    logOff()
})