async function carregarFilmes() {
    const resposta = await fetch("https://localhost:5000/filmes")
    const filmes = await resposta.json()
    mostrarFilmes(filmes)
}

const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}, ${filme.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}

carregarFilmes()


function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}
