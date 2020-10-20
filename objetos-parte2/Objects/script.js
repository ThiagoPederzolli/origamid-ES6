// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

const pessoa = new Object({
  nome: 'André',
  idade: 28,
})

console.log(pessoa);

const carro2 = {
  rodas: 4,
  init(valor){
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou!';
  },
  buzinar() {
    return this.marca + ' buzinou!';
  }
}

const honda = Object.create(carro2).init('Honda');
console.log(honda.acelerar());

const ferrari = Object.create(carro2).init('Ferrari');
console.log(ferrari.acelerar());

const funcaoAutomovel = {
  acelerar() {
    ' acelerou!';
  },
  buzinar() {
    ' buzinou!';
  }
}

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel, carro2);
// console.log(moto);

const moto = {
  
  capacete: true,
}

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      return this._rodas = valor * 4;
    }
  }
});

console.log(moto);

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

const carro = {
  marca: 'Ford',
  ano: 2018,
}
// Object.freeze(carro);
// Object.seal(carro);
Object.preventExtensions(carro);

// Object.isFrozen(carro); // true
// Object.isSealed(carro); // true
// Object.isExtensible(carro); // true
carro.marca = 'Fiat';
carro.portas = 4;

console.log(carro)