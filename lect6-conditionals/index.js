// Conditionals

let num = 4;
if (num % 2 == 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

let age = 19;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

let num1 = 12;
if ((num1 / 2) % 2 == 0) {
  console.log("Half of number is even");
} else {
  console.log("Half of number is odd");
}

let a = "12";
const b = 12;
let d = 12;

if (a == b) {
  console.log("a and b has same value");
}

if (d === b) {
  console.log("d and b has same value and datatype");
}

let score = 40;
if (score >= 80) {ṇ
  console.log("Grade A");
} else if (score >= 60) {
  console.log("Grade B");
} else if (score >= 40) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let gender = "Male";
if (age >= 18) {
  if (gender == "Male") {
    console.log("Mature boy");
  }

  if (gender == "Female") {
    console.log("Mature girl");
  }
}

// Print the lucky draw winner if hte ticket number is 11 or 101 then then person is lucky draw winner
let ticketNo = 11;
if (ticketNo == 11 || ticketNo == 101) {
  console.log("You are lucky draw winner");
} else {
  console.log("Sorry! Try again next time");
}

// if the user is logged in and has subscription then print Premium user giving access to permium content
// otherwise print please upgrage you plan

let isLoggedIn = true;
let hasSubscription = true;
if (isLoggedIn && hasSubscription) {
  console.log("Premium user, giving access to premium content");
} else {
  console.log("Please upgrade your plan");
}

// Check if the number is good or not
let number = 17;
if(number != 17){
  console.log("Number is good");
}else{
  console.log("Number is Bad");
}

// Given a three digit numnber check if it's palindrome or not
let threeDigitNumber = 321;
let firstdigit = Math.floor(threeDigitNumber / 100);
let lastdigit = threeDigitNumber % 10;

if(firstdigit == lastdigit){
  console.log(threeDigitNumber, "is a palindrome");
}else{
  console.log(threeDigitNumber, "is not a palindrome");
}

// Check if the number is decimal or interger;
let myNumber = 12.5;
let conversion = Math.floor(myNumber);
console.log(myNumber);

if(conversion == myNumber){
  console.log(myNumber, "is an integer");
}
else{
  console.log(myNumber, "is a decimal number");
}
console.log(myNumber%1); // 0.5 // gives the decimal part

// Given two NodeList, find the greater one using if-else statements
let n1 = 10, n2 = 12;
let value;
if(n1>n2){
  console.log("n1 is greater");
  value = n1;
}else{
  console.log("n2 is greater");
  value = n2;
}
console.log("Greater value is", value);``
