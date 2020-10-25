// // console.log(window.history)
// const links = document.querySelectorAll('a');
// // window.addEventListener('popstate', () => {
// //   console.log('teste');
// //   // fetchPage(window.location.pathname);
// // });

// function handleClick(event) {
//   event.preventDefault();
//   fetchPage(event.target.href);
// }

// links.forEach(link => link.addEventListener('click', handleClick))

// function replaceContent(newText) {
//   const newHTML = document.createElement('div');
//   newHTML.innerHTML = newText;
//   console.log(newHTML);
//   const oldContent = document.querySelector('.content');
//   const newContent = document.querySelector('.content');
//   oldContent.innerHTML = newContent.innerHTML;
// }

// async function fetchPage(url) {
//   const pageReponse = await fetch(url);
//   const pageText = await pageReponse.text();
//   replaceContent(pageText);
//   // window.history.pushState(null, null, pageText);
// }

const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href);
})

links.forEach(link => {
  link.addEventListener('click', handleClick);
})