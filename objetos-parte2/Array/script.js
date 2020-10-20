const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift();
console.log(primeiraComida);
console.log(comidas);
// Remova o último valor de comidas e coloque em uma variável
const ultimaCOmida = comidas.pop();
console.log(ultimaCOmida);
console.log(comidas);
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
html = html.split('section').join('ul').split('div').join('li');
// html = html.join('ul');
// html = html.split('div');
// html = html.join('li');

console.log(html);
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const arrayOriginal = carros.slice();
carros.pop();
console.log(carros);
console.log(arrayOriginal);
// Remova o último carro, mas antes de remover
// salve a array original em outra variável