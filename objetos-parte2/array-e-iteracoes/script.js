const carros1 = ['Ford', 'Fiat', 'Honda'];
carros1.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function
carros1.forEach((item, index, array) => {
  console.log(item.toLowerCase());
});

// console.log(carros1);

const carros2 = ['Ford', 'Fiat', 'Honda'];
carros2.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

// console.log(carros2); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros3.map((item) => {
  return 'Carro ' + item;
});

console.log(carros3); // ['Ford', 'Fiat', 'Honda']
console.log(newCarros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

const aulas1 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas1.map(aula => aula.min);

// function nomeAulas(aula) {
//   return aula.nome;
// }

// const nomeAulas = function(aula) {
//   return aula.nome
// }

// const arrayNomeAula = aulas.map(function(aula){
//   return aula.nome
// });

const nomeAulas = aula => aula.nome;

const arrayNomeAula = aulas1.map(nomeAulas);
console.log(tempoAulas);

console.log(arrayNomeAula);




const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
  return acumulador + atual;
});
console.log(total1); // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
console.log(total2); // 165

const numeros = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

console.log(maiorValor); // 60

const numbers = [10, 25, 30, 3, 54, 44, 22];
const maiorNumero = numbers.reduce((anterior, atual) => {
  if(anterior > atual) 
    return anterior;
   else 
    return atual  
}, 0);

console.log(maiorNumero);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const keys = Object.keys(aulas[0])
console.log(keys);
const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

console.log(listaAulas);

const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); // true
console.log(temUva)
function maiorQue100(numero) {
  return numero > 100;
}
const algumNumbero = [0, 43, 22, 88, 101, 2];
const temMaior = algumNumbero.some(maiorQue100); // true
console.log(temMaior);

const frutas2 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas2.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2
console.log(buscaUva)

const numeros2 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros2.find(x => x > 45); // 88
console.log(buscaMaior45);

const frutras3 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutras3.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']
console.log(arrayLimpa);
const numeros3 = [6, 43, 22, 88, 101, 29];
const buscaMaiorQue45 = numeros3.filter(x => x > 45); // [88, 101]
console.log(buscaMaiorQue45);

const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas3.filter((aula) => { 
  return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
console.log(aulasMaiores);