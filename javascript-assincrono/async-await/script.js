// async function puxarDados() {
//   const dadosResponse = await fetch('./dados.json');
//   const dadosJSON = await dadosResponse.json();
//   console.log(dadosJSON)
//   document.body.innerText = dadosJSON.titulo;
// }

// puxarDados();

// function iniciarFetch() {
//   fetch('./dados.json')
//   .then(dadosResponse => dadosResponse.json())
//   .then(dadosJSON => {
//     document.body.innerText = dadosJSON.titulo;
//   })
// }
// iniciarFetch();

// async function iniciarAsync() {
//   const dadosResponse = await fetch('./dados.json');
//   const dadosJSON = await dadosResponse.json();
//   document.body.innerText = dadosJSON.titulo;
// }
// iniciarAsync();

// async function puxarDados() {
//   try {
//     const dadosResponse = await fetch('./dados.json');
//     const dadosJSON = await dadosResponse.json();
//     document.body.innerText = dadosJSON.titulo;
//   }
//   catch(erro) {
//     console.log(erro);
//   }
// }
// puxarDados();

// async function iniciarAsync() {
//   const dadosResponse = fetch('./dados.json');
//   // document.body.innerText = dadosJSON.titulo;
//   const clientesResponse = fetch('./clientes.json');
  
//   // ele espera o que está dentro da expressão () ocorrer primeiro
//   const dadosJSON = await (await dadosResponse).json();
//   const clientesJSON = await (await clientesResponse).json();
//   document.body.innerText = `A professora ${clientesJSON.nome} ensina ${dadosJSON.titulo}`;
// }
// iniciarAsync();

async function asyncSemPromise() {
  // Console não irá esperar. Pois a expressão após o await não é uma promise
  await setTimeout(() => console.log('Depois de 3s'), 3000);
  console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('Depois de 1s');
}
iniciarAsync();