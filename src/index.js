const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products?page=5&limit=10';

const getData = () => {
  fetch(API)
    .then(response => response.json())
    .then(response => {
      let products = response;
      console.log(products)
      let output = products.map(product => {
        // template
        return `
        <p>${product.id}</p>
        <p>${product.title}</p>
        <h1>${product.category.name}</h1>
        <p>${product.price}</p>
        <img src=${product.category.image}></img>
        `
      });
      let newItem = document.createElement('section');
      newItem.classList.add('Item');
      newItem.innerHTML = output;
      $app.appendChild(newItem);
    })
    .catch(error => console.log(error));
}
getData()

const loadData = () => {
  getData(API);
}

const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);
