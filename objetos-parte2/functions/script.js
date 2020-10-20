// function areaQuadrado(lado) {
//   return lado * lado;
// }

// const perimetroQuadrado = new Function('lado1 ', 'lado2', 'lado3', 'return lado1 + lado2 + lado3');

// function somar(n1, n2) {
//   return n1 + n2;
// }

// somar.length; // 2
// somar.name; // 'somar'

// const carro1 = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro(arg) {
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro(carro1) // undefined undefined
// descricaoCarro.call() // undefined undefined
// descricaoCarro.call(carro1) // Ford 2018

// function darOi(nome, idade ) {
//   console.log('Oi para você ' + nome + ' ' + idade)
// }

// darOi.call();
// darOi.call({}, 'Thiago', 30)

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra']

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe)
// }


// const ul = new Dom ('ul');

// const li = {
//   element: document.querySelector('li'),
// }
// Dom.prototype.ativo.call(li, 'ativar');
// ul.ativo.call(li, 'ativo');
// ul.ativo('ativar');
// console.log(ul.element);

const frutas = ['Banana', 'Uva', 'Pêra'];

Array.prototype.mostrarThis = function() {
  console.log(this);
}

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

console.log(filtro); // Retorna os itens que possuem ativo