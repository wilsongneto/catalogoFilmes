const filmes = [
    {
        titulo: "Vingadores",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao: "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",
    },
    {
        titulo: "Batman",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
        descricao: "Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.",
    },
    {
        titulo: "Homem-Aranha",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/xaKydnMw6wR1MBAjS5seGPVusbs.jpg",
        descricao: "Sem volta para casa",
    },
    {
        titulo: "As Branquelas",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/aJZOcorpgloDLkPP6ED0t9sXjNu.jpg",
        descricao: "Dois agentes do FBI atrapalhados",
    },
    {
        titulo: "Projeto Almanaque",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/2krLUKMsKbnZk6j647IlkqlMZ2u.jpg",
        descricao: "Jovens descobem uma máquina do tempo",
    },
    {
        titulo: "Mortal Kombat",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/4nW5X9iBrMlHMDcTsEOQWXKu3TZ.jpg",
        descricao: "Lutando contra inimigos da Exoterra",
    }
]

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

mostrarFilmes(filmes)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}