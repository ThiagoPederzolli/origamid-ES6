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
console.log(Pessoa.prototype);

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); // retorna o objeto


const thiago = new Pessoa('Thiago', 30);

console.log(thiago.prototype);