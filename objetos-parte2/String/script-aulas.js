const comida = 'Pizza';
const agua = new String('Agua');

console.log(comida.length);
console.log(agua.length);
console.log(comida[0]);
console.log(agua[0]);
console.log(agua[agua.length - 1]);

// const frase = 'A melhor comida';

// console.log(frase.charAt(0))
// console.log(frase.charAt(frase.length))
// console.log(frase[frase.length])

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase.concat(linguagem, '!!');
const fraseFinal = frase + linguagem + '!!';
const fraseTotal = `${frase}${linguagem}!!`
console.log(fraseCompleta)
console.log(fraseFinal)
console.log(fraseTotal)

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); // true
console.log(fruta.includes(listaFrutas)); // false
console.log(fruta.endsWith('nana')); // true
console.log(fruta.startsWith('Ba')); // true
console.log(fruta.startsWith('na')); // false

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 3)); // Tax

console.log(transacao1.slice(12)); // cliente
console.log(transacao1.slice(-4)); // ente
console.log(transacao1.slice(3, 6)); // ósi

const lingJS = 'JavaScript';
console.log(lingJS.substring(3,5)); // aS
console.log(lingJS.substring(0,4)); // Java
console.log(lingJS.substring(4)); // Script
console.log(lingJS.substring(-3)); // JavaScript

const instrumento = 'Guitarra';

console.log(instrumento.indexOf('r')); // 5
console.log(instrumento.lastIndexOf('r')); // 6
console.log(instrumento.indexOf('ta')); // 3

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

console.log(listaPrecos[0].padStart(10, '.')); // .....R$ 99
console.log(listaPrecos[0].padEnd(10, '.'));   // R$ 99.....

const fraseRepetida = 'Ta';

console.log(fraseRepetida.repeat(5)); // TaTaTaTaTa

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
console.log(listaItens = listaItens.replace(/[ ]+/g, ', '));

let preco = 'R$ 1200,43';
console.log(preco = preco.replace(',', '.')); // 'R$ 1200.43'

const arrayItens = listaItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

console.log(arrayItens);
console.log(htmlArray);
console.log(htmlNovo);

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino'); // true
console.log(sexo2.toLowerCase() === 'feminino'); // true
console.log(sexo3.toLowerCase() === 'feminino'); // true


const valor = '  R$ 23.00   ' 
console.log(valor.trim()); // 'R$ 23.00'
console.log(valor.trimStart()); // 'R$ 23.00   '
console.log(valor.trimEnd()); // '  R$ 23.00'



