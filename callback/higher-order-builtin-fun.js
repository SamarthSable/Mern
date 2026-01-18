//Map
// map function transforms to a different outtput
let numbers = [1, 2, 3];

let numbersTransform = numbers.map((num) => {
  return num + 1;
});

console.log(numbersTransform);

//Filter

let arr2 = [1, 2, 3, 4, 5, 6];
let even = arr2.filter((number) => {
  return number % 2 === 0;
});

let personlist = [
  {
    name: "Jon",
    age: 28,
  },
  {
    name: "Athrva",
    age: 12,
  },
  {
    name: "Sagar",
    age: 35,
  },
];

console.log(
  personlist.filter((person) => {
    return person.age < 30;
  })
);

//reduce
// return a single value as a result;

let arr3 = [1, 2, 3];
console.log(
  "sum of all numbers in arry 3 is:",
  arr3.reduce((prev, currentVal) => {
    return prev + currentVal;
  })
);

let cart = [
  {
    title: "item1",
    cost: 20,
  },
  {
    title: "item2",
    cost: 40,
  },
  {
    title: "item3",
    cost: 60,
  },
];

console.log(
  "Total cost of items is:",
  cart.reduce((item, curretncost) => {
    return item + curretncost.cost;
  }, 0)
);
