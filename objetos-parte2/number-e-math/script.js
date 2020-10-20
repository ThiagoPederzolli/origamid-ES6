// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumberos = numeros.split(', ');
console.log(Math.max(...arrayNumberos));


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
let total = 0;
listaPrecos.forEach(item => {
  item = +item.toUpperCase().replace('R$', '').trim().replace(',', '.');
  item = +item.toFixed(2);
  total += item;
});
total = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(total);
// limparPreco(listaPrecos[0])