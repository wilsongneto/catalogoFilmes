const series = [
    {
        titulo: "Dark",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/1DLjjvSWMYo17B7wuz6YikB96hH.jpg",
        descricao: "Quatro famílias iniciam uma desesperada busca por respostas quando uma criança desaparece e um complexo mistério envolvendo três gerações começa a se revelar.",
    },
    {
        titulo: "11.22.63",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/1fH41ccMKvgDTbbcCxWWH6fznah.jpg",
        descricao: "Um modesto professor se depara com um portal do tempo que o leva ao dia 9 de setembro de 1958. Ele inicia uma jornada para tentar evitar o assassinato de John F. Kennedy.",
    },
    {
        titulo: "Timeless",
        imagem: "https://m.media-amazon.com/images/M/MV5BMjA5ODkxODgzMl5BMl5BanBnXkFtZTgwNzA4MTc5NDM@._V1_.jpg",
        descricao: "O roubo de uma máquina do tempo que desencadeia uma série de crimes ao longo da história, leva um professor, um cientista e um soldado a correrem atrás de quem quer destruir os Estados Unidos.",
    },
    {
        titulo: "Outlander",
        imagem: "https://m.media-amazon.com/images/I/81Y4YAmBR4L._AC_UF1000,1000_QL80_.jpg",
        descricao: "Nesse conto épico, um guerreiro e uma enfermeira vivem uma paixão avassaladora, mas 200 anos os separam.",
    },
    {
        titulo: "A Mulher do Viajante no Tempo",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/y5pmoeuAsc9CvGRcs8kzIKmoneI.jpg",
        descricao: "Desde os seis anos de idade, ela via um amigo que considerava imaginário: um homem gentil e engraçado, às vezes velho, às vezes jovem, que aparecia na floresta atrás de sua casa para lhe contar histórias do futuro. Mas conforme os anos passaram e ela se tornou uma bela jovem, Clare começou a perceber que seu amigo não era imaginário, mas um viajante do tempo vindo do futuro. E não apenas de um futuro qualquer, mas de seu próprio futuro. Após reencontrar Henry DeTamble como adulta, ela entende que se tornará a esposa do viajante no tempo.",
    },
    {
        titulo: "O problema dos 3 corpos",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/rqMYUtyrRJrZ1zKQvBfLgPh1c0T.jpg",
        descricao: "Um grupo de cientistas faz descobertas revolucionárias ao longo das décadas. Ao mesmo tempo, as leis da ciência começam a cair por terra.",
    }
]

const listaSeries = document.getElementById("listaSeries");
function mostrarSeries(lista) {
    listaSeries.innerHTML = ""
    lista.forEach(serie => {
        listaSeries.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${serie.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${serie.titulo}</h3>
                        <p>${serie.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}, ${serie.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}

mostrarSeries(series)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}