export default function initModal() {
  // console.log('criando modal');
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');    
    }

    function clickForaDoModal(event) {
      // console.log(this);
      // console.log(event.target);
      if (event.target === this) toggleModal(event);
    }

  botaoAbrir.addEventListener('click', toggleModal);
  botaoFechar.addEventListener('click', toggleModal);
  containerModal.addEventListener('click', clickForaDoModal);
  }
}
