// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul

const carros1 = new Array('Corola', 'Mustang', 'Honda');

carros1[1] // Mustang
carros1[2] = 'Ferrari';
carros1[10] = 'Parati';
carros1.length; // 11

let li = document.querySelectorAll('li'); // NodeList
Array.isArray(li); // false
li = Array.from(li); // Array
Array.isArray(li); // true

const carrosObj = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

const carrosArray = Array.from(carrosObj);

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length); // 3

console.log(frutas[0].length); // 6
console.log(frutas[1].length); // 4
console.log(frutas[2].length); // 2

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia'); // 5
console.log(carros2); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push('Ferrari'); // 6
// console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros3.shift(); // 'Ford'
console.log(primeiroCarro);
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
console.log(ultimoCarro);
carros3; // ['Fiat', 'VW'];

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros.reverse()); // ['Honda', 'VW', 'Fiat', 'Ford'];

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros4.splice(1, 0, 'Kia', 'Mustang')); // []
console.log(carros4); // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

console.log(carros4.splice(3, 2, 'Ferrari')); // ['Fiat', 'VW']
console.log(carros4); // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5 '].copyWithin(2, 0, 3));
// ['Item1', 'Item2', 'Item1', 'Item2']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1));
// ['Item1', 'Item2', 'Item3', 'Item1']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('css')); // true
console.log(linguagens.includes('ruby')); // false
console.log(linguagens.indexOf('python')); // 4
console.log(linguagens.indexOf('js')); // 2
console.log(linguagens.lastIndexOf('js')); // 5

console.log(linguagens.join()); // 'html,css,js,php,python'
console.log(linguagens.join(' ')); // 'html css js php python'
console.log(linguagens.join('-_-')); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
console.log(htmlString);

htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>
console.log(htmlString);

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens2.slice(3)); // ['php', 'python']
console.log(linguagens2.slice(1, 4)); // ['css', 'js', 'php']

const cloneLinguagens = linguagens2.slice();
console.log(cloneLinguagens)