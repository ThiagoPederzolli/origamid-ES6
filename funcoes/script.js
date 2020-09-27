 function areaQuadrado(lado) {
   console.log('Função ativa');
   return lado * lado;
 }

 console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

 const total = 5 * pi();
 console.log(pi(), total);

//  function imc(peso, altura) {
//    const imc = peso / (altura * altura);
//    return imc;
//  }

//  console.log(imc(80, 1.8));

 function corFavorita(cor) {
   if (cor === 'azul') {
     return 'Eu gosto do céu';
   } else if (cor === 'verde') {
     return 'Eu gosto de mato';
   }
   return 'Eu não gosto de cores';
 }


 function mostraConsole() {
  console.log('oi')
 }
 addEventListener('click', mostraConsole);


 function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// imc(80, 1.80); // aqui encontra-se o undefined, o resultado que se vê no console é resultado do bloco de código executado dentro da função e não da função em si, o resultado da função é undefined porque não foi declarado um valor para o seu retorno.

console.log(imc(80, 1.80)); // retorna o imc e undefined. Retorna o IMC por causa do console.log dentro do bloco de código dentro da função e retorna o undefined pela ausência de definição do retorno da função.

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade  !== 'number') {
    return 'Por favor, preencha um número'
  }else if (idade >= 60) {
    return true;
  } return false;
  
}

console.log(terceiraIdade(60));

const totalPaises = 193;
function faltaVisitar() {
  const paisesVisitados = 20;
  const paisesFaltantes = totalPaises - paisesVisitados;
  return `Falta visitar ${paisesFaltantes}`;
}

// console.log(paisesVisitados);
console.log(totalPaises);

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

