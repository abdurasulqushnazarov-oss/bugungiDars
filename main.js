// const products = [
//   { id: 1, name: "iPhone", stock: 12 },
//   { id: 2, name: "Laptop", stock: 0 },
//   { id: 3, name: "Mouse", stock: 4 },
//   { id: 4, name: "Keyboard", stock: 0 },
// ];

// let stockKatta = products.find((product) => {
//   return product.stock === 0;
// });
// console.log(stockKatta);

//===========================================================

const users = [
  { id: 1, name: "Malika", age: 17 },
  { id: 2, name: "Ali", age: 22 },
  { id: 3, name: "Zarina", age: 19 },
  { id: 4, name: "Madina", age: 16 },
];

function aTugaydimi(arr) {
  return arr.some((user) => user.age < 18 && user.name.endsWith("a"));
}

console.log(aTugaydimi(users));
