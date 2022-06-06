let btnOpenModalList = document.querySelector("#openModalList")
btnOpenModalList.addEventListener("click", () => {
    let formCadCircleClose = document.querySelector("#closeModalCircle")
    formCadCircleClose.click()
    requestCirclesList()
})