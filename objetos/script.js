const pessoa = {
  nome: 'Thiago',
  idade: 30,
}

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
}
// console.table(quadrado);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.E);

const menu1 = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu1.backgroundColor = '#000';
menu1.color = 'blue';
menu1.esconder = function() {
  console.log('Escondi');
}

// console.log(menu1.esconder());

const height = 120;
const menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const meusDados = {
  nome: 'Thiago',
  sobrenome: 'Pederzolli Machado da Silva',
  idade: 30,
  graduacao: 'Psicólogo'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
} ;

console.log(meusDados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
const carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'latiu';
    }
    return 'não latiu';
  }
}
console.log(cachorro.latir('homem'));