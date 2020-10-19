const obj = {
  nome: 'Thiago',
  idade: 30,
}

obj.teste = 'Isso';

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  };
  this.andar = () => {
    return 'Andou pelo Objeto';
  };
};
// console.log(Pessoa.prototype);

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}
// console.log(Pessoa.prototype); // retorna o objeto


const thiago = new Pessoa('Thiago', 30);

// console.log(thiago.prototype);

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');
// console.log(lista)
// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

// console.log(listaArray1)
// console.log(listaArray2)

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

