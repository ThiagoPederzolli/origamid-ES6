// const animais = document.getElementById('animais');
// // console.log(animais);

// const gridSection = document.getElementsByClassName('grid-section');
// // console.log(gridSection[1]);

// const primeiraLi = document.querySelector('li');
// // console.log(primeiraLi);

// const primeiraUl = document.querySelector('ul');
// // console.log(primeiraUl);

// const linkInterno = document.querySelector('[href^="#"]');
// // console.log(linkInterno);

// const imgAnimais = document.querySelectorAll('.animais img');
// // console.log(imgAnimais);


// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNODE = document.querySelectorAll('.grid-section');

// primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNODE);


//Exercicios

// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
