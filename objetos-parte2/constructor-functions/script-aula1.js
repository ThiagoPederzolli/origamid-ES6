// const carro = {
//   marca: 'Marca',
//   preco: 0,
// }

// const honda = carro;
// honda.carro = 'Honda';
// honda.preo = 2000;

// const fiat = carro;
// fiat.carro = 'Fiat';
// fiat.preco = 1500;

//carro, fiat e honda apontam para o mesmo objeto. Não recria-se o objeto, só altera-se o valor;

// function Carro() {
//   // return 'oi'
//   this.marca = 'Marca';
//   // console.log(this);
//   this.preco = 2000;
// }

// const honda = new Carro();
// // honda.andar = function() {
// //   console.log('Andou');
// // }
// const fiat = new Carro();
// fiat.marca = 'Fiat';

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  // console.log(this);
}

const honda = new Carro('Honda', 2000);
console.log(honda);