const controles = document.querySelector('#controle');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');


const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value);
  showCSS();
  // console.log(value);
}

controles.addEventListener('change', handleChange);

function saveValues(name, value) {
  localStorage[name] = value;
  showCSS();
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  })
}

setValues();

function showCSS() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}
