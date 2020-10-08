const listaAnimais = document.querySelector('.animais-lista');
const copy = document.querySelector('.copy');
const listaClientHeight = listaAnimais.clientHeight;
const listaScrollHeight = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
const animaisLeft = listaAnimais.offsetLeft;
const copyTop = copy.offsetTop;

console.log(listaClientHeight);
console.log(listaScrollHeight);
console.log(animaisTop);
console.log(animaisLeft);
console.log(copyTop);

const primeiroh2 = document.querySelector('h2');
const h2Left = primeiroh2.offsetLeft;
console.log(h2Left);

const section = document.querySelector('.animais');
const rect = section.getBoundingClientRect();
console.log(rect);

console.log(
  window.innerWidth, // width do janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height do janela
  window.outerHeight, // soma a barra de endereço
  window.pageYOffset, // distância total do scroll horizontal
  window.pageXOffset, // distância total do scroll vertical
)
if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)').matches;
console.log(small);


// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }