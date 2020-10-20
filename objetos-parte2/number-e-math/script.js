console.log(Number.isNaN(NaN));
console.log(Number.isNaN(4 + 5));

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

const preco = 2.99;
console.log(preco.toFixed()); // 3

const carro = 1000.455;
console.log(carro.toFixed(2)); // 1000.46

const preco2 = 1499.49;
console.log(preco2.toFixed()); // 1499

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valor);

console.log(Math.PI);

console.log(Math.abs(-5.5)); // 5.5
console.log(Math.ceil(4.8334)); // 5
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.8334)); // 4
console.log(Math.floor(4.3)); // 4
console.log(Math.round(4.8334)); // 5
console.log(Math.round(4.3)); // 4

console.log(Math.max(5,3,10,42,2)); // 42
console.log(Math.min(5,3,10,42,2)); // 2

Math.random(); // 0.XXX
console.log(Math.floor(Math.random() * 100)); // entre 0 e 100
console.log(Math.floor(Math.random() * 500));  // entre 0 e 500

// Número random entre 72 e 32
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32); 
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);