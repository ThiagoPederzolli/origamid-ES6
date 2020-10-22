// function espera(texto) {
//   console.log(texto);
// }
// setTimeout(espera, 1000, 'Depois de 1s');

// for(let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i);
// }

// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 1000, 'Passou 1s');

// // loop a cada segundo
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

// const contarAte10 = setInterval(callback, 1000);

// let i = 0;
// function callback() {
//   console.log(i++);
//   if (i > 10) {
//     clearInterval(contarAte10);
//   }
// }

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// const body = document.querySelector('body');

// function mudarBG(){
//   body.classList.toggle('body-red');  
// }
// setInterval(mudarBG, 2000);
// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

let i = 0;
let timer;
function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer)
  iniciar.removeAttribute('disabled');

}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
}


iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);