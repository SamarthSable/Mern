// // //array with duplicate values
// // let arr = [1, 2, 2, 3, 4, 4, 5];

// // let set = new Set(arr);
// // console.log(Array.from(set));

// function debounce(func, delay) {
//   let timeout;

//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// const numbers = [1, 2, 3, 4, 5];

// // // Remove 2 elements starting at index 1
// // const removed = numbers.splice(1, 2);
// // console.log(removed); // [2, 3]
// // console.log(numbers); // [1, 4, 5]

// // // Add elements at index 1
// // numbers.splice(1, 0, 10, 20);
// // console.log(numbers); // [1, 10, 20, 4, 5]

// // // Replace elements
// // numbers.splice(1, 2, 100);
// // console.log(numbers); // [1, 100, 4, 5]

// function binarySearch(numbers, target) {
//   let left = 0;
//   let right = numbers.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (numbers[mid] === target) {
//       return `found at index ${mid}`;
//     } else if (numbers[mid] > target) {
//       right = mid - 1;
//     } else if (numbers[mid] < target) {
//       left = mid + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(numbers, 1));

// const input = document.querySelector("#inputValue");
// const display = document.querySelector(".display");

// function updateDisplay() {
//   display.textContent = input.value;
// }

// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// const debounceUpdate = debounce(updateDisplay, 5000);

// input.addEventListener("input", debounceUpdate);

// document.querySelector("#outer").addEventListener("click", () => {
//   console.log("Outer clicked");
// });
// document.querySelector("#middle").addEventListener("click", () => {
//   console.log("Middle clicked");
// });

// document.querySelector("#inner").addEventListener("click", () => {
//   console.log("Inner clicked");
// });

// fetch("", {
//   method: "POST",
//   headers: {
//     'application- type': 'application/json'
//   },
// }
// )

// function chkCredential(userID, callback) {
//   if (userID > 0) {
//     setTimeout(() => {
//       console.log("Validating User");
//       callback();
//     }, 1000);
//   }
// }

// function loadDashboard(callback) {
//   setTimeout(() => {
//     console.log("Loading Dashboard");
//     callback();
//   }, 1000);
// }

// function ShowMsg() {
//   console.log("Welcome");
// }

// chkCredential(1, () => {
//   loadDashboard(() => {
//     ShowMsg();
//   });
// });

// function validatePayment(amount, callback) {
//   setTimeout(() => {
//     if (amount > 0) {
//       console.log("Validated amount");
//       callback(null, amount);
//     } else {
//       console.log("Failed to validate amount");
//       callback("Invalid Amount", null);
//     }
//   }, 1000);
// }

// function deductAmount(amount, callback) {
//   setTimeout(() => {
//     console.log(`${amount} amount deducted Successfully`);
//     callback(null, amount);
//   }, 1000);
// }

// function generateReceipt(amount) {
//   console.log(`receipt generated for rs ${amount}`);
// }

// validatePayment(-15, function (err, result1) {
//   if (err) {
//     console.log(err);
//   } else {
//     deductAmount(result1, function (err, result2) {
//       if (err) {
//         console.log(err);
//       } else {
//         generateReceipt(result2);
//       }
//     });
//   }
// });

// function validatePayment(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amount > 0) {
//         console.log("Validated amount");
//         resolve(amount);
//       } else {
//         console.log("Failed to validate amount");
//         reject("Invalid Amount");
//       }
//     }, 1000);
//   });
// }

// function deductAmount(amount) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${amount} amount deducted Successfully`);
//       resolve(amount);
//     }, 1000);
//   });
// }

// function generateReceipt(amount) {
//   console.log(`receipt generated for rs ${amount}`);
// }

// validatePayment(15)
//   .then((result) => deductAmount(result))
//   .then((result) => generateReceipt(result));

// validatePayment(15).then(deductAmount).then(generateReceipt).catch;

// async function validatePayment(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amount > 0) {
//         console.log("Validated amount");
//         resolve(amount);
//       } else {
//         console.log("Failed to validate amount");
//         reject("Invalid Amount");
//       }
//     }, 1000);
//   });
// }

// function deductAmount(amount) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${amount} amount deducted Successfully`);
//       resolve(amount);
//     }, 1000);
//   });
// }

// function generateReceipt(amount) {
//   console.log(`receipt generated for rs ${amount}`);
// }

// let obj1 = {
//   name: "Samarth",
//   age: 20,
//   address: {
//     city: "mumbai",
//     lane: "thane",
//   },
// };

// let obj2 = { ...obj1 };

// console.log(obj1);
// console.log(obj2);

// obj2.address.city = "Pune";

// console.log(obj1);
// console.log(obj2);

// let obj3 = JSON.parse(JSON.stringify(obj1));
// console.log(obj3);

// obj3.address.city = "Latur";
// console.log(obj1);
// console.log(obj3);

// let arr = [2, 5, 4, 2, 3, 6, 1];

//bubble sort

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

//selection Sort

// for (let i = 0; i < arr.length; i++) {
//   let min_indx = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[min_indx]) {
//       min_indx = j;
//     }
//   }

//   let temp = arr[i];
//   arr[i] = arr[min_indx];
//   arr[min_indx] = temp;
// }

// console.log(arr);

//insertionSort
// for (let i = 1; i < arr.length; i++) {
//   let key = arr[i];
//   let j = i - 1;

//   while (j >= 0 && arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = key;
// }

// console.log(arr);

// class Vehicle {
//   #chassisNumber;
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//     this.#chassisNumber = Math.floor(10000 + Math.random() * 900000);
//   }
//   displayInfo() {
//     console.log(this.brand, this.year, this.#chassisNumber);
//   }
// }

// class car extends Vehicle {
//   constructor(fuelType, brand, year) {
//     super(brand, year);
//     this.fuelType = fuelType;
//   }

//   displayInfo() {
//     super.displayInfo();
//     console.log(this.fuelType);
//   }
// }

// class bike extends Vehicle {
//   constructor(engineCapacity, brand, year) {
//     super(brand, year);
//     this.engineCapacity = engineCapacity;
//   }

//   displayInfo() {
//     super.displayInfo();
//     console.log(this.engineCapacity);
//   }
// }

// let honda = new car("Petrol", "Honda", 2022);

// honda.displayInfo();

// console.log(Math.floor(Math.random() * 10));

/* 📘 Requirements
1. Class: Book

Create a class Book with:

Properties:
title
author
isIssued (default: false)
Methods:
issueBook()
Marks book as issued (isIssued = true)
If already issued → return "Book already issued"
returnBook()
Marks book as not issued (isIssued = false)
2. Class: User

Create a class User with:

Properties:
name
borrowedBooks (array)
Methods:
borrowBook(book)
User can borrow only if book is not issued
Add book to borrowedBooks
returnBook(book)
Remove book from borrowedBooks
3. Class: Library

Create a class Library with:

Properties:
books (array of Book objects)
users (array of User objects)
Methods:
addBook(book)
addUser(user)
showAvailableBooks()
Return only books where isIssued = false */

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     this.isIssued = false;
//   }

//   issueBook() {
//     if (this.isIssued) {
//       return "Book already issued";
//     }
//     this.isIssued = true;
//     return "Book issued successfully";
//   }

//   returnBook() {
//     this.isIssued = false;
//     return "Book returned successfully";
//   }
// }

// class User {
//   constructor(name) {
//     this.name = name;
//     this.borrowedBooks = [];
//   }

//   borrowBook(book) {
//     if (!book.isIssued) {
//       book.issueBook();
//       this.borrowedBooks.push(book);
//       return "Book borrowed successfully";
//     }
//     return "Book already issued";
//   }

//   returnBook(book) {
//     const index = this.borrowedBooks.findIndex((b) => b.title === book.title);

//     if (index === -1) {
//       return "Book not found in user's list";
//     }

//     this.borrowedBooks.splice(index, 1);
//     book.returnBook();

//     return "Book returned successfully";
//   }
// }

// class Library {
//   constructor() {
//     this.users = [];
//     this.books = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//     return "Book added successfully";
//   }

//   addUser(user) {
//     this.users.push(user);
//     return "User added successfully";
//   }

//   showAvailableBooks() {
//     return this.books.filter((book) => !book.isIssued);
//   }
// }

// const book1 = new Book("Harry Potter", "J.K Rowling");
// const book2 = new Book("Atomic Habits", "James Clear");

// const user1 = new User("Sam");

// const library = new Library();

// console.log(library.addBook(book1));
// console.log(library.addBook(book2));

// console.log(library.addUser(user1));

// console.log("Available Books:", library.showAvailableBooks());
// console.log(user1.borrowBook(book1));
// console.log("Available Books:", library.showAvailableBooks());
// console.log(user1.returnBook(book1));

// console.log("Available Books:", library.showAvailableBooks());

// class Employee {
//   #bonus;
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//     this.id = Math.floor(10000 + Math.random() * 9000);
//     this.#bonus = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
//   }

//   getDetails() {
//     console.log(this.name, this.salary, this.id, this.#bonus);
//   }
// }

// class Manager extends Employee {
//   constructor(name, salary, teamSize) {
//     super(name, salary);
//     this.teamSize = teamSize;
//   }

//   getDetails() {
//     super.getDetails();
//     console.log(this.teamSize);
//   }
// }

// class Developer extends Employee {
//   constructor(name, salary, programmingLanguage) {
//     super(name, salary);
//     this.programmingLanguage = programmingLanguage;
//   }

//   getDetails() {
//     super.getDetails();
//     console.log(this.programmingLanguage);
//   }
// }

// const emp1 = new Manager("Sam", 80000, 5);
// const emp2 = new Developer("Alex", 60000, "JavaScript");

// emp1.getDetails();
// emp2.getDetails();

// const input = document.querySelector("#input");
// const display = document.querySelector(".display");

// function updateDisplay() {
//   display.textContent = input.value;
// }

// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearInterval(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }
// const debounceUpdate = debounce(updateDisplay, 5000);
// input.addEventListener("input", debounceUpdate);

let array = [1, 5, 9, 6];

console.log(
  array.reduce((total, num) => {
    return total + num;
  }, 0),
);
