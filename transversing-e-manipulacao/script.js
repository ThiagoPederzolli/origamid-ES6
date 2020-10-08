// const h1 = document.querySelector('h1');
// const h1HTML = h1.innerHTML;
// const animaisLista = document.querySelector('.animais-lista');
// const animaisDescricao = document.querySelector('.animais-descricao');
// const animaisListaText = animaisLista.innerText;
// const animaisDescricaoText = animaisDescricao.innerText;
// // h1.innerHTML = '<p>Novo título</p>'
// // console.log(h1.outerHTML)
// // h1.outerHTML = '<p>Outer título</p>'
// // console.log(h1.outerHTML)
// // console.log(h1HTML)
// // console.log(animaisListaText)
// // console.log(animaisDescricaoText)

// console.log(animaisLista.parentElement );//+ 'pai'
// console.log(animaisLista.parentElement.parentElement);//+ 'pai do pai'
// console.log(animaisLista.parentElement.parentElement.parentElement ); //+ 'pai do pai do pai'
// console.log(animaisLista.nextElementSibling); //+ 'elemento abaixo'
// console.log(animaisLista.previousElementSibling) // + 'elemento anterior'
// console.log(animaisLista.children[--animaisLista.children.length]);
// console.log(animaisLista.querySelector('li:last-child'));

// const lista = document.querySelector('.animais-lista');

// lista.previousElementSibling; // elemento acima
// lista.previousSibling; // node acima

// lista.firstChild; // primeiro node child
// lista.childNodes; // todos os node child

// console.log(lista.childNodes);
// console.log(lista.previousSibling);
// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa')

// // animais.appendChild(titulo); // move lista para o final de contato
// contato.insertBefore(animais, mapa); // insere a lista antes de titulo
// // contato.removeChild(titulo); // remove titulo de contato
// // contato.replaceChild(lista, titulo); // substitui titulo por lista

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo titulo'
// novoh1.classList.add('titulo');
// mapa.appendChild(novoh1);//adiciona logo após o primeiro filho
// console.log(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add('azul')
faq.appendChild(cloneH1);