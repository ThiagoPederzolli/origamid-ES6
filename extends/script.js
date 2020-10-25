class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log('acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  empinar() {
    console.log('Moto empinou com' + this.rodas + ' rodas');
  }
  acelerar() {
    super.acelerar();
    console.log('acelerou rápido');
  }
}

const honda = new Moto(2, 'gasolina', true);
console.log(honda);
const civic = new Veiculo(4);
