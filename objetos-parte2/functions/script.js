// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
// console.log(p)
const paragrafosEmArray = Array.from(paragrafos);
// outra alternativa seria usar o call()
// const totalCharAt = Array.prototype.reduce.call(paragrafos, funcion...)
const totalCharAt = paragrafosEmArray.reduce((acumulador, atual) => {
  const string = atual.innerText;
  return acumulador + string.length;
}, 0);
console.log(totalCharAt);
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function newElements(tag, classe, conteudo) {
  return `<${tag} class="${classe}"> ${conteudo} </${tag}>`
}

/* Outra alternativa de criação de função seria
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerText = conteudo : null;
  return elemento;
} */

console.log(newElements('div', 'teste', 'teste de funcionalidade'));
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const tituloH1 = newElements.bind(null, 'h1', 'titulo');
console.log(tituloH1('Teste função de título'));