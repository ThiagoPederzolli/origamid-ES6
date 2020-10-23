// const promessa = new Promise(function(resolve, reject){
//   let condicao = true;
//   if (condicao) {
//     resolve("funcionou");
//   } else {
//     reject(Error('Um erro ocorreu'));
//   }
// })

// console.log(promessa)

// const promessa = new Promise(function(resolve, reject) {
//   let condicao = true;
//   if(condicao) {
//     resolve('Estou pronto!');
//   } else {
//     reject(Error('Um erro ocorreu.'));
//   }
// });

// promessa.then(function(resolucao) {
//   console.log(resolucao); // 'Estou pronto!'
// });

// const promessa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolvida');
//   }, 1000);
// });

// promessa.then(resolucao => {
//   console.log(resolucao); // 'Resolvida' após 1s
// });

// const promessa = new Promise((resolve, reject) => {
//   resolve('Etapa 1');
// });

// promessa.then(resolucao => {
//   console.log(resolucao); // 'Etapa 1';
//   return 'Etapa 2';
// }).then(resolucao => {
//   console.log(resolucao) // 'Etapa 2';
//   return 'Etapa 3';
// }).then(r => r + 4)
// .then(r => {
//   console.log(r); // Etapa 34
// });

// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     resolve('Estou pronto!');
//   } else {
//     reject(Error('Um erro ocorreu.'));
//   }
// });

// promessa.then(resolucao => {
//   console.log(resolucao);
// }).catch(reject => {
//   console.log(reject);
// });

// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     resolve('Estou pronto!');
//   } else {
//     reject(Error('Um erro ocorreu.'));
//   }
// });

// promessa.then(resolucao => {
//   console.log(resolucao);
// }, reject => {
//   console.log(reject);
// });

const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(resolucao => {
  console.log(resolucao);
}, reject => {
  console.log(reject);
}).finally(() => {
  console.log('Acabou'); // 'Acabou'
});

// const login = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Login Efetuado');
//   }, 1000);
// });
// const dados = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Dados Carregados');
//   }, 1500);
// });

// const tudoCarregado = Promise.all([login, dados]);

// tudoCarregado.then(respostas => {
//   console.log(respostas); // Array com ambas respostas
// });

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
  console.log(resposta); // Login Efetuado
});