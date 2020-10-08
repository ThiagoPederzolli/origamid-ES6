// const img = document.querySelector('img');

// function callback(event) {
//   // console.log(event);
//   console.log(this); // retorna a imagem
//   // console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callback);

// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event) {
//   const currentTarget = event.currentTarget; // this
//   const target = event.target; // onde o clique ocorreu
//   const type = event.type; // tipo de evento
//   const path = event.path;
//   // console.log(currentTarget, target, type, path);
// }

// // animaisLista.addEventListener('click', executarCallback);

// const linkExterno = document.querySelector('a[href^="http"]');

// function clickNoLink(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

// linkExterno.addEventListener('click', clickNoLink);


function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});


// Exercicios

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksinternos = document.querySelectorAll('a[href^="#"');
console.log(linksinternos)

function addClass() {
  event.preventDefault();
  linksinternos.forEach((link) => {
    if(link.classList.contains('ativo')) {
      link.classList.remove('ativo')
    }
  })
  this.classList.add('ativo');
}

linksinternos.forEach((link) => {
  link.addEventListener('click', addClass);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *')
console.log(todosElementos);

function elementoClicado() {
  console.log(event.currentTarget)
}

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', elementoClicado)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removerElemento() {
  event.currentTarget.remove()
}

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', removerElemento)
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function pressT() {
  if (event.key === 't') {
    console.log('clicou T');
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', pressT);