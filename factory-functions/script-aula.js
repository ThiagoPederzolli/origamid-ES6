function createButton(text) {
  const numeroSecreto = '3fd32r34';
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  
  return {
    text,
    element,
  }
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

console.log(btnComprar)
console.log(btnVender)


function Pessoa(nome) {
  if (!(this instanceof Pessoa)) // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');

console.log(designer);