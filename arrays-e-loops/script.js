const videoGames1 = ['Switch', 'PS4', 'XBOX'];

const ulitmoItem = videoGames1.pop();

videoGames1.push('3DS');

// console.log(videoGames1);
// console.log(ulitmoItem);

for (let numero = 0; numero < 10; numero += 1) {
  // console.log(numero);
}

let i = 0;

while (i <= 10) {
  // console.log(i);
  i += 1;
}

const videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];
for (let i = 0; i < videoGames2.length; i += 1) {
  console.log(videoGames2[i]);
}

const videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item, index, array) {
  console.log(item, index, array);
});
// O argumento item será atribuído dinamicamente


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const titulos = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < titulos.length; i += 1) {
  console.log(`O brasil ganhou a copa de ${titulos[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
// for (let i = 0; i < 3; i += 1) {
//   console.log(frutas[i]);
// }

for (let i = 0; i < frutas.length; i += 1) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
// const melancia = frutas[4];
const melancia = frutas[frutas.length - 1];
console.log(melancia);