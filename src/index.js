const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';

let products;


const getData = () => {
  fetch(API)
    .then(response => response.json())
    .then(response => {
      products = response;
      pagination()
      console.log(products)
      let output = products.map(product => {
        // template
        return `
        <p>ID: ${product.id}</p>
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


const loadData = () => {
  getData(API);
}
loadData()
let pagination= ()=>{
  let show=[]
  let total=(products.length);
  let primerProducto=total-198
  let inicio= primerProducto + 10
  let current=inicio + 10
  console.log(total,inicio,primerProducto,current)
  if(products){
    products.map(e=>{
      e
    })
  }else{
    console.log('no existe')
  }
}

const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
  console.log(entries)
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      loadData()
    }else{
      console.log('is not intersecting')
    }
  })
}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);
