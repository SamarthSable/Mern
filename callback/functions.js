//parameter vs arguments
// ananomos fucntion;

//functions as a first class citizens

//....funcaiton can  be returned from another fucntion

function outerfunction() {
  let someVal = "Xyz";

  function innerFunction() {
    return someVal;
  }
}

//... functions can be passed to another function as argument

//.. functions can be assigned to variables

//Two types of callback

// 1... Synchronous
// 2... Asynchronous

let value = 0;

setTimeout(function () {
  value = 1;
  console.log("Function now called");
}, 3000);

console.log(value);

// functions who takes a function as argument called as higher order function

function greetMe(greetingMaker, firstName, lastName, lan) {
  let gretting = greetingMaker(lan);

  return `${gretting} ${firstName} ${lastName}`;
}

function hindiGreet() {
  // funtions uses another function called call balck funciton
  return "Namste";
}

function engGreet() {
  return "Hello";
}

function spanGreet() {
  return "Hola";
}

console.log(greetMe(hindiGreet, "sam", "Sable"));
console.log(greetMe(engGreet, "sam", "Sable"));
console.log(greetMe(spanGreet, "sam", "Sable"));

//clousers

// clousers created when a inner function uses a variables of outer fucntion even also outerfuntion is executed ....i.e it uses lexical scope

function add(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = add(5);

console.log(add5(2));

//Create a greet me fucntion which accepts lang as argument and return the greeting based on that;

function greetME(lang) {
  let greet;
  if (lang === "EN") greet = "Hello";
  else if (lang === "Hindi") greet = "Namste";
  else if (lang === "sp") greet = "Hola";
  return function (firstName, lastName) {
    return `${greet} ${firstName} ${lastName}`;
  };
}

let greet = greetME("EN");
console.log(greet("Prathmesh", "Rathod"));

let greet2 = greetME("sp");
console.log(greet2("Prathmesh", "Rathod"));

let greet3 = greetME("Hindi");
console.log(greet3("Prathmesh", "Rathod"));

console.log(greetME("Hindi")("Arjun", "shinde"));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));
