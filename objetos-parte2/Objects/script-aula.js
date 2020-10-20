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

const frutas3 = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas3);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

const carro5 = {
  marca: 'Ford',
  ano: 2018,
}
// Object.freeze(carro5);
// Object.seal(carro5);
Object.preventExtensions(carro5);

// Object.isFrozen(carro5); // true
// Object.isSealed(carro5); // true
// Object.isExtensible(carro5); // false
carro5.marca = 'Fiat';
carro5.portas = 4;

console.log(carro5)

const frutas4 = ['Banana', 'Uva'];
frutas4.constructor; // Array

const frase2 = 'Isso é uma String';
frase2.constructor; // String

const frutas = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

const frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

const carro = {marca: 'Ford'};
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]