function requestUser(dados, func) {
    fetch(WEBSERVER, {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
            func(returneds)
    })
}
