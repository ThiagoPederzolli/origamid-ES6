// sem declaração de um argumento
// function perimetroForma(lado, totalLados) {
//   return lado * totalLados;
// }

// perimetroForma(10, 4); // 40
// perimetroForma(10); // NaN

// definindo valor de parâmetro ES5
// function perimetroForma(lado, totalLados) {
//   totalLados = totalLados || 4; // se não for definido, será igual à 4
//   return lado * totalLados;
// }

// perimetroForma(10, 3); // 30
// perimetroForma(10); // 40

// definindo valor de parâmetro ES6+
function perimetroForma(lado, totalLados = 4) {
  return lado * totalLados;
}

perimetroForma(10, 5); // 50
perimetroForma(10); // 40

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

anunciarGanhadores('Pedro', 'Marta', 'Maria');

function anunciarGanhadores(premio, ...ganhadores) {
  console.log(ganhadores);
  console.log(arguments);
}

anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];
console.log(comidas);

const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximo);

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];

console.log(btnsArray)
console.log(fraseArray)