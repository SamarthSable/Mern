// //array with duplicate values
// let arr = [1, 2, 2, 3, 4, 4, 5];

// let set = new Set(arr);
// console.log(Array.from(set));

function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}



const numbers = [1, 2, 3, 4, 5];

// Remove 2 elements starting at index 1
const removed = numbers.splice(1, 2);
console.log(removed); // [2, 3]
console.log(numbers); // [1, 4, 5]

// Add elements at index 1
numbers.splice(1, 0, 10, 20);
console.log(numbers); // [1, 10, 20, 4, 5]

// Replace elements
numbers.splice(1, 2, 100);
console.log(numbers); // [1, 100, 4, 5]