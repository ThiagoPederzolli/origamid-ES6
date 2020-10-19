// const Dom = {
//   seletor: 'li',
//   element() {
//     const elementoSelecionado = document.querySelector(this.seletor);
//     return elementoSelecionado;
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   }
// }

// function Dom(seletor) {
//   this.element = () => document.querySelector(seletor),
//   this.ativar = (classe) => this.element().classList.add(classe)
// }

// const li = new Dom('li');
// const ul = new Dom('ul');

// const lastLI = new Dom('li:last-child');
// lastLI.ativar('ativar');


//EXERCICIOS

//// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(name, age) {
  this.nome = name,
  this.idade = age,
  this.andar= () => {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const primeiraPessoa = new Pessoa('João', 20);
const segundaPessoa = new Pessoa('Maria', 25);
const terceiraPessoa = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selected){
  this.element = () => document.querySelectorAll(selected)
  this.addClass = classe => {
    this.element().forEach(element => element.classList.add(classe))
  }
  this.removeClass = classe => {
    this.element().forEach(element => element.classList.remove(classe))
  }
}

const listaItens = new Dom('li');
