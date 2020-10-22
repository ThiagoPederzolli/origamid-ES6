const contato = document.querySelector('#contato');
const texto = document.querySelector('.texto');
// console.log(contato.elements)
// console.log(document.forms[0]);

const form = document.getElementById('contato');
function handleKeyUp(event) {
  console.log(event.target.value);
}
form.addEventListener('keyup', handleKeyUp);

function handleChange(event) {
  const target = event.target;
  if(!target.checkValidity()) {
    target.classList.add('invalido');
    contato.nome.setCustomValidity('Nome é totalmente necessário!')
    target.nextElementSibling.innerText = target.validationMessage;
  } 
  texto.innerText = event.target.value;
}
form.addEventListener('change', handleChange);

// function handleChange(event) {
//   document.body.style.backgroundColor = event.target.value;
// }
// form.addEventListener('change', handleChange);

// function handleChange(event) {
//   console.log(event.target.value)
// }
// form.addEventListener('change', handleChange);

// function handleChange(event) {
//   if(event.target.checked)
//     console.log(event.target.value);
// }
// form.addEventListener('change', handleChange);

const dados = {};
function handleChange(event) {
  dados[event.target.name] = event.target.value;
}
form.addEventListener('change', handleChange);
