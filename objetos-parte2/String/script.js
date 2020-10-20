// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let taxa = 0;
let recebimento = 0;
transacoes.forEach(transacao => {
  if (transacao.descricao.includes('Taxa')){
    taxa += Number(transacao.valor.slice(-3));
  } else {
    recebimento += Number(transacao.valor.slice(-3));
  }
});
console.log(taxa);
console.log(recebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'))

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const removeSpan = html.split('span');
const addAnchor = removeSpan.join('a');
console.log(removeSpan);
console.log(addAnchor);

// Retorne o último caracter da frase
const fraseDoAno = 'Melhor do ano!';
console.log(fraseDoAno[fraseDoAno.length - 1]);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach(transacao => {
  transacao = transacao.toLowerCase();
  transacao = transacao.trim();
  transacao = transacao.slice(0, 4);
  if (transacao === 'taxa') {
    totalTaxas += 1;
  }
});
console.log(totalTaxas);