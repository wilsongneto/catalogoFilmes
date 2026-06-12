const cursos = [
    {
        titulo: "HTML e CSS",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8g0A_mcdTRj8HY5PRqBoyyE4V0qpmMK1mA&s",
        descricao: "Curso de HTML e CSS para iniciantes",
    },
    {
        titulo: "JavaScript",
        imagem: "https://static.wikia.nocookie.net/coding-help/images/6/69/JavaScript.png/revision/latest?cb=20230517123229",
        descricao: "Javascript para web e interatividade",
    },
    {
        titulo: "Java",
        imagem: "https://embarcados.com.br/wp-content/uploads/2014/03/imagem-de-destaque-28-850x510.png",
        descricao: "Java com Spring Boot para Desenvolvimento Web",
    },
    {
        titulo: "Python",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0q-1g-kh2Bd1cz4TcnLAqFjjom9fyLt__Q&s",
        descricao: "Criando jogos em Python",
    },
    {
        titulo: "PHP",
        imagem: "https://static.imasters.com.br/wp-content/uploads/2018/06/22153245/php-post-1.png",
        descricao: "PHP para criação de banco de dados",
    },
    {
        titulo: "Go",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5O-bOnuJsQpneKtKbJ5DUV0UzYK7gfebGtA&s",
        descricao: "A linguagem criada pelo Google",
    }
]

const listaCursos = document.getElementById("listaCursos");
function mostrarCursos(lista) {
    listaCursos.innerHTML = ""
    lista.forEach(curso => {
        listaCursos.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${curso.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${curso.titulo}</h3>
                        <p>${curso.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${curso.titulo}, ${curso.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}

mostrarCursos(cursos)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}