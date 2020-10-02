// const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach(function(item, index, array) {
//   // console.log(item, index, array);
// });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item, index, array){
//   console.log(item, index, array);
// });

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//   console.log(item);
// });

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });
// imgs.forEach(item => {
//   console.log(item);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// Exercicios:

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => console.log(item.innerText));
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
