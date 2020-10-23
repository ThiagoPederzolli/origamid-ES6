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

const img = document.createElement('img');
img.className = 'blob';
img.height = 200;
body.appendChild(img)

fetch('./moria.jpg')
.then(response => response.blob())
.then(imgBlob => {
  const blobUrl = URL.createObjectURL(imgBlob);
  img.src = blobUrl;
  console.log(blobUrl);
});

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log(json)
  });
  cloneResponse.text().then(text => {
    console.log(text)
  });
});

// // fetch('./docs.txt')
// .then(response => {
//   console.log(response.status, response.ok);
//   if(response.status === 404) {
//     console.log('Página não encontrada')
//   }
// });


fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.type, response.url);
});
