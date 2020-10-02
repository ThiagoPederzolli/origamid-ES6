const menu = document.querySelector('.menu');
menu.classList.add('ativo');
menu.classList.remove('azul');


if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul')
}

menu.className += ' Vermelho';

console.log(menu.className);

const animais = document.querySelector('.animais');

console.log(animais.attributes['data-texto']);

const img = document.querySelectorAll('img');

// const srcImg = img.getAttribute('src');
// img.setAttribute('alt', 'É uma raposa');
// const possuiAlt = img.hasAttribute('alt');

// console.log(possuiAlt);

console.log(img);


// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => item.classList.add('ativo'));
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
  if (index > 0) {
    item.classList.remove('ativo');
  }
})
// Verifique se as imagens possuem o atributo alt
img.forEach((item) => console.log(item, item.hasAttribute('alt')));
// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"');
linkExterno.setAttribute('href', 'https://www.instagram.com/origamid.cursos/');
console.log(linkExterno);