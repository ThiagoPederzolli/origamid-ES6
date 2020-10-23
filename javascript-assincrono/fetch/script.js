const inputValue = document.querySelector('#cep');
const conteudo = document.querySelector('.conteudo');
const btn = document.querySelector('#btn');
const btc = document.querySelector('#btc');
const btnNext = document.querySelector('#next');
const piada = document.querySelector('#piada');


// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

function informeEndereco() {
  event.preventDefault();
  const cep = inputValue.value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(cep => {
    conteudo.innerText = `Você reside na ${cep.logradouro}, bairro ${cep.bairro}, no município de ${cep.localidade} UF ${cep.uf}`
  });
}

btn.addEventListener('click', informeEndereco);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function bitCoin() {
  fetch('https://blockchain.info/ticker')
  .then(resultado => resultado.json()
  .then(resposta => {    
      btc.innerText = resposta.BRL.buy    
  })
  )
}
// setInterval(bitCoin, 1000 * 30)
bitCoin();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
function nextJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(resultado => resultado.json())
  .then(resposta => {
    piada.innerText = resposta.value;
  })
}
nextJoke();

btnNext.addEventListener('click', nextJoke);