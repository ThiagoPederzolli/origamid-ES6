  // function Button(text, background) {
  //   this.text = text;
  //   this.background = background;
  // }

  // Button.prototype.element = function() {
  //   const buttonElement = document.createElement('button');
  //   buttonElement.innerText = this.text;
  //   buttonElement.style.background = this.background;
  //   return buttonElement;
  // }

  // const blueButton = new Button('Comprar', 'blue');

  // console.log(blueButton.element());

// class Button {
//   constructor(text, background) {
//     this.text = text;
//     this.background = background;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
//   }
// }

// const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton.element());

// class Button {
//   constructor(text) {
//     this.text = text;
//   }
//   element() {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = this.text;
//     return buttonElement;
//   }
//   appendElementTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//   }
// }

// const blueButton = new Button('Clique');
// blueButton.appendElementTo('body');


// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const blueOptions = {
//   backgroundColor: 'blue',
//   color: 'white',
//   text: 'Clique',
//   borderRadius: '4px',
// }

// const blueButton = new Button(blueOptions);
// blueButton.options;

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const elementButton = document.createElement('button');
    elementButton.innerText = this.text;
    elementButton.style.background = this.background;
    return elementButton
  }
  static createBlue(text) {
    return new Button(text, 'blue');
  }
}

const blueButton = Button.createBlue('Comprar');