// window.alert('Isso mesmo');

const href = window.location.href;

console.log(href);

if (href === 'http://127.0.0.1:5500/o-que-e-o-dom/index.html') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList;

function calbackh1() {
  console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', calbackh1);
// Exercícios
// Retorne o url da página atual utilizando o objeto window
const url = location.href;
console.log(url);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const idioma = window.clientInformation.language;
const linguagem = window.navigator.language;
console.log(idioma, linguagem);

// Retorne a largura da janela
const largura = innerWidth;
console.log(largura);
