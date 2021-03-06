// alert('scroll feliz')
function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');


  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo', 'show-down', 'show-right');
      })
      const dataetClick = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', dataetClick);
    }
    
    tabMenu.forEach((itemMenu, indexMenu) => {
      itemMenu.addEventListener('click', () => activeTab(indexMenu))
    })
  }
}
initTabNav();

function initAccordion() {

  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
  
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
  
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  // console.log(linksInternos)

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);  
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        // console.log(sectionTop);
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll()