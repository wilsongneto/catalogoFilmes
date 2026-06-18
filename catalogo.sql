create database catalogo;
use catalogo;
create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);
create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);
create table cursos (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

select * from filmes;

insert into filmes 
(titulo, imagem, descricao)
values
("Vingadores",
"https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
"Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências."
),
("Batman",
"https://media.themoviedb.org/t/p/w600_and_h900_face/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
"Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego."
),
("Homem Aranha",
"https://media.themoviedb.org/t/p/w600_and_h900_face/xaKydnMw6wR1MBAjS5seGPVusbs.jpg",
"Sem volta para casa"
),
("As Branquelas",
"https://media.themoviedb.org/t/p/w600_and_h900_face/aJZOcorpgloDLkPP6ED0t9sXjNu.jpg",
"Dois agentes do FBI atrapalhados"
),
("Projeto Almanaque",
"https://media.themoviedb.org/t/p/w600_and_h900_face/2krLUKMsKbnZk6j647IlkqlMZ2u.jpg",
"Jovens descobem uma máquina do tempo"
),
("Mortal Kombat",
"https://media.themoviedb.org/t/p/w600_and_h900_face/4nW5X9iBrMlHMDcTsEOQWXKu3TZ.jpg",
"Lutando contra inimigos da Exoterra"
);



