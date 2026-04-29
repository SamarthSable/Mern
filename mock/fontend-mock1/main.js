// const students = [
//   { name: "Amit", math: 78, science: 82, english: 90 },
//   { name: "Sneha", math: 88, science: 75, english: 86 },
//   { name: "Ravi", math: 92, science: 90, english: 85 },
// ];
// // Expected Output:
// // Amit  → Total: 250, Average: 83.33
// // Sneha → Total: 249, Average: 83.00
// // Ravi  → Total: 267, Average: 89.00

// let total = 0;
// let avg = 0;
// for (let student of students) {
//   total = student.math + student.science + student.english;
//   avg = total / 3;
//   console.log(`${student.name} -> Total: ${total}, Average: ${avg.toFixed(2)}`);
// }

// let people = [
//   { name: "Alice", city: "NYC" },
//   { name: "Bob", city: "LA" },
//   { name: "Charlie", city: "NYC" },
// ];

// groupBy(people) →
// {
//   NYC: [{name:"Alice", city:"NYC"}, {name:"Charlie", city:"NYC"}],
//   LA: [{name:"Bob", city:"LA"}]
// }

// function groupBuy(people) {
//   let NYC = [];
//   let LA = [];
//   for (let obj of people) {
//     if (obj.city === "NYC") {
//       NYC.push(obj);
//     } else if (obj.city === "LA") {
//       LA.push(obj);
//     }
//   }
//   console.log(`{NYC:${NYC}, LA: ${LA}}`);
// }

// groupBuy(people);

// function groupBuy(people) {
//   let grouped = {};

//   for (let i = 0; i < people.length; i++) {
//     let person = people[i];
//     let city = person.city;

//     if (!grouped[city]) {
//       grouped[city] = [];
//     }

//     grouped[city].push(person);
//   }

//   console.log(grouped);
// }

// console.log("Start");
// console.log(1);
// setTimeout(() => {
//   console.log(3);
// });
// Promise.resolve().then(() => {
//   console.log(4);
// });
// Promise.resolve().then(() => {
//   console.log(5);
// });
// Promise.resolve().then(() => {
//   console.log(6);
// });
// console.log("end");

// console.log(1);
// setTimeout(function a() {
//   console.log(2);
// }, 0);
// Promise.resolve().then(function b() {
//   console.log(3);
// });
// Promise.resolve().then(function c() {
//   console.log(4);
//   setTimeout(function d() {
//     console.log(5);
//   }, 0);
// });

// console.log(6);
// // 1 6 2 3 4 5

const people = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 },
];

function groupByAge(people) {
  let result = {};
  for (let obj of people) {
    let key = obj.age;
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);
  }
  return result;
}

console.log(groupByAge(people));
