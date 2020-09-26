// const possuiGraduacao = true;
// let x;
// if (possuiGraduacao) { // If,Se,(Condição)condição for verdadeira, executar o código;
//   console.log('É verdadeiro');
//   x = 10;
// } else {
//   console.log('É falso');
// }
// console.log(x);

// const possuiGraduacao = false;
// const possuiDoutorado = true;

// if(possuiDoutorado) {
//   console.log('Possui graduação e doutorado');
// } else if(possuiGraduacao) {
//   console.log('Possui graduação, mas não possui doutorado');
// } else {
//   console.log('Não possui graduação');
// }

// let nome = ' ';

// if(nome) {
//   console.log(nome);
// } else {
//   console.log('Nome não existe!')
// }

// if ((5 - 15) && (5 + 5)) {
//   console.log('Verdadeiro');  
// } else {
//   console.log('Falso;')
// }


// Exercício
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

const minhaIdade = 30;
const idadeParente = 25;

if (minhaIdade > idadeParente) {
  console.log('É maior!');
} else if (minhaIdade === idadeParente) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
const expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(5 - ' '); // Retorna 5 e ainda será verdadeiro, caso ao invés do espaço possuisse uma letra, tipo 's', retornaria false porque seria NaN;
// Retornará 3;

// Verifique se as seguintes variáveis são Truthy ou Falsy
const nome = 'Andre';// true
const idade = 28; // true
const possuiDoutorado = false; // false
let empregoFuturo; // false
const dinheiroNaConta = 0; // false
console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
const brasil = 207;
const china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('China tem mais habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { 
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Falso porque a primeira condição não é verdadeira


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// Cão porque a primeira condição é verdadeira então entrará no if e no console.log Cão é o último valor verdadeiro;