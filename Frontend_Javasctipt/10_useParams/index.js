console.log(window.location);

//http://localhost:3000/products/id/?name=abhishek&age=20
const keys = window.location.search;
console.log(keys)  //?name=abhishek&age=20

const urlParams = new URLSearchParams(keys)
urlParams.get('name');
urlParams.getAll('name');
