function requestCirclesList() {
    dados = new FormData
    dados.append('request', true)
    dados.append('action', 'listCircle')
    dados.append("idUser", cookie.get("userId"))
    fetch(WEBSERVER, {
        method: 'POST',
        body: dados
    }).then(response => response.json()).then(
        (returneds) => {
            let areaListCircle = document.querySelector("#listCirclesArea")
                areaListCircle.innerHTML = ""
            if(returneds.status) {
                
                returneds.circles.forEach(circle => {
                    areaListCircle.innerHTML += `
                        <tr>
                            <th scope="row">${circle.operadora}</th>
                            <td>
                                <button class="btn btn-warning" OnClick="(()=>{editCircle(${circle.idCircle})})()">
                                Editar
                                </button>
                            </td>
                            <td> 
                                <button class="btn btn-danger" OnClick="(()=>{deleteCircle(${circle.idCircle})})()" >
                                Excluir
                                </button>
                            </td>
                        </tr>
                    `
                })
            }
    }
)}
