const listaAnimais = document.querySelector('.animais-lista');
const copy = document.querySelector('.copy');
const listaClientHeight = listaAnimais.clientHeight;
const listaScrollHeight = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
const animaisLeft = listaAnimais.offsetLeft;
const copyTop = copy.offsetTop;

// console.log(listaClientHeight);
// console.log(listaScrollHeight);
// console.log(animaisTop);
// console.log(animaisLeft);
// console.log(copyTop);

const primeiroh2 = document.querySelector('h2');
const h2Left = primeiroh2.offsetLeft;
// console.log(h2Left);

const section = document.querySelector('.animais');
const rect = section.getBoundingClientRect();
// console.log(rect);

// console.log(
//   window.innerWidth, // width do janela
//   window.outerWidth, // soma dev tools também
//   window.innerHeight, // height do janela
//   window.outerHeight, // soma a barra de endereço
//   window.pageYOffset, // distância total do scroll horizontal
//   window.pageXOffset, // distância total do scroll vertical
// )
if(window.innerWidth < 600) {
  // console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)').matches;
// console.log(small);


// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }

// EXERCICIOS

// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagem = document.querySelector('img');
const distanciaImagemTopo = imagem.offsetTop;
console.log(distanciaImagemTopo);
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  console.log(imagens)
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
    // console.log(imagem.offsetWidth);
  
  })
  console.log(soma)
}

window.onload = function(){
  somaImagens( );
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui acessibilidade');
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
console.log(menu)
if(window.innerWidth < 720) {
  menu.classList.add('menu-mobile');
}