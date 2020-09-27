// 'use strict'

// const carro = 'fusca';
// function mostrarCarro() {
//   console.log(carro);
// }

// mostrarCarro(); // fusca no console
// console.log(carro); // Erro, carro is not defined

// let mes = 'Dezembro';
// if (true) {
//   console.log(mes);
// }
// console.log(mes);


// if (false) {
//   var mes = 'Dezembro';
//   console.log(mes);
// }
// console.log(mes);

// {
//   var carro = 'Fusca';
//   const ano = 2018;
// }
// console.log(carro); // Carro
// // console.log(ano); // erro ano is not defined

// // for (var i = 0; i < 10; i += 1) { //correto é com let
// //   console.log(`Número ${i}`)
// // }
// // console.log(i);


// const mes = 'Dezembro';
// // mes = 'Janeiro'; // erro, tentou modificar o valor
// // const semana; // erro, declarou sem valor

// const data = {
//   dia: 28,
//   mes: 'Dezembro',
//   ano: 2018,
// }

// data.dia = 29; // Funciona
// // data = 'Janeiro'; // erro


// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
{
  const cor = 'preto';
  const marca = 'Fiat';
  const portas = 4;
  console.log(cor, marca, portas);
}
// Primeiro por tentar chamar fora do escopo variáveis declaradas dentro do escopo e outro erro é porque na hora do console.log foi declarada a chave da variável cor e não o seu nome.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);
//movendo a vairável para o escopo global e deixando ela acessível para as duas funções;

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
//Alterar as chaves var para const na declaração da variável numero e let na variável numero do for, assim evitando que a variável do for vaze de escopo, mas possa ter seu valor alterado para que o loop ocorra e a variável numero global como não tem seu valor alterado pode ser declarada com cosnt.