products = [
  { name: "iPhone 12", price: 799 },
  { name: "Samsung Galaxy S21", price: 999 },
  { name: "Google Pixel 5", price: 699 },
];
// let sum = 0;
// for (let obj of products) {
//   if (obj.price > 600 && obj.price < 900) {
//     console.log(obj);
//   }
// }
// console.log(products);
// console.log(sum);
console.log(products.filter((obj) => obj.price > 600 && obj.price < 800));

let obj = {
  name: "samarth",
  roll: 21,
  address: {
    city: "pune",
  },
};

let newobj = { ...obj };
console.log(newobj);
let newobj1 = JSON.parse(JSON.stringify(obj));
console.log(newobj1);
