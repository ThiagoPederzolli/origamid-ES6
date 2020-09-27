let numero = 20;
const numero2 = 10;
numero += numero2; 

console.log(numero);

const idade = 10;

const podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);


const possuiFaculdade = true;

if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');

// Exercício

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let scroll = 1000;

scroll += 500;
console.log(scroll);


// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
const possuiCarro = true;
const possuiCasa = true;
let darCredito;

// darCredito = (possuiCarro && possuiCasa) ? true : false;
darCredito = (possuiCarro && possuiCasa)

console.log(darCredito);