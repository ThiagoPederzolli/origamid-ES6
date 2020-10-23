const divConteudo = document.querySelector('.conteudo');
const body = document.querySelector('body');
fetch('./doc.txt').then(function(response) {
  return response.text();
}).then(function(corpo) {
  console.log(corpo);
  divConteudo.innerText = corpo;
});

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => response.json())
.then(cep => {
  console.log(cep.bairro, cep.logradouro);
});

fetch('./style.css')
.then(response => response.text())
.then(body => {  
  const style = document.createElement('style');
  style.innerHTML = body;
  divConteudo.appendChild(style);
})

const div = document.createElement('div');
body.appendChild(div);
fetch('./sobre.html')
.then(response => response.text())
.then(htmlBody => {
  div.innerHTML = htmlBody;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
});