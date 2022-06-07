function deleteCircle(id) {
    if (confirm("Deseja excluir a Área?")) {
    dados = new FormData
    dados.append('request', true)
    dados.append('action', 'deleteCircle')
    dados.append("idCircle", id)
    fetch(WEBSERVER, {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
            if(returneds.status) {
                generateMap()
                requestCircles(select.value)
                alert("excluido com sucesso")
                btnOpenModalList.click()
            }
        }
    )}
}
    
