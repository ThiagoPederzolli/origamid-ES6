const contato = document.querySelector('#contato');
console.log(contato.elements)
console.log(document.forms[0]);

const form = document.getElementById('contato');
function handleKeyUp(event) {
  console.log(event.target.value);
}
form.addEventListener('keyup', handleKeyUp);

function handleChange(event) {
  const target = event.target;
  if(!target.checkValidity()) {
    target.classList.add('invalido');
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove('invalido');
  }
}
form.addEventListener('change', handleChange);