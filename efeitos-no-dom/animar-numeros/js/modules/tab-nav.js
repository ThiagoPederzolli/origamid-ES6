export default function initTabNav() {
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
