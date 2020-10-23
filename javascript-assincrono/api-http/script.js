// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon);
// });


const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"aula": "JavaScript"}'
}

fetch(url, options)
.then(response => response.json())
.then(json => {
  console.log(json);
});

fetch(url, {
  method: 'GET'
})
.then(r => r.json())
.then(r => console.log(r))

fetch(url, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

const url1 = 'https://jsonplaceholder.typicode.com/posts/1/';
fetch(url1, {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

fetch(url1, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});

const url2 = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
const body = document.querySelector('.pai');
const div = document.createElement('div');
// body.appendChild('div');

fetch(url2)
.then(r => r.text())
.then(r => {
  div.innerHTML = r;
  console.log(div);
});