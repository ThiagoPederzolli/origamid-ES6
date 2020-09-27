const expoDez = 2e2;
console.log(expoDez);

const testNaN = '100' / 2;
console.log((isNaN(testNaN)))

const soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
const soma2 = 10 + 10 + 20 + 30 * 4 / (2 + 10);
console.log(soma1);
console.log(soma2);

let x = 5;
console.log(x);// 5
console.log(++x);// 6
console.log(--x);// 5

// let idade = '28';
let idade = +'28';
let somaIdade = 5;

console.log(idade + somaIdade);


// Exercício:

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35!
console.log(total);

// Crie duas expressões que retornem NaN
const firstNaN = 200 / 'Oi 230';
const secondNaN = 20 * 'Multi';
console.log(firstNaN);
console.log(secondNaN);

// Somar a string '200' com o número 50 e retornar 250
const somar = +'200' + 50;
console.log(somar);

// Incremente o número 5 e retorne o seu valor incrementado
let y = 5;
y++;
console.log(y);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; NaN (Not a Number)
console.log(peso);