// Write a function to find the average of three numbers

let a=12;
let b=16;
let c=18;
function avgofNum(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
avgofNum(a,b,c);


//Write a function to find the factorial of a number

let num =5;

function fact(num){
    let factor =1;
    for(let i=1;i<=num;i++){
        factor = factor *i;
    }
    return factor;
}

console.log("Factorial is " + fact(num));




// write a program to find nCr

// nCr = n!/[(n-r)! * r!]

function nCr(n,r){
    let ncr = fact(n)/(fact(n-r) * fact(r)); 
    return ncr;  
}

console.log("nCr is " + nCr(5,3));


// fucntion that is going to be called for multiple users to check if they can vote based on age

function canVote(userName , userAge){
    if(userAge >= 18) console.log(userName + " is allowed to vote.");
    else console.log(userName + " is Not allowed to vote.");
}

canVote("Samarth",25);
canVote("Rajesh",13);




/* =============== Arrayas in JS =============== */

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let n =arr.length;
let sum =sumOfArray(arr);
console.log({sum});

function sumOfArray(arr){
    let n =arr.length;
    let sum =0;
    for(let i=0;i<n;i++){
        sum += arr[i];
    }
    return sum;
}



// Absolute function in js ===> |3-7| = 4 //
console.log(Math.abs(3-7));


//Question

// find the absolute difference of (sum of all odd elements ) and (sum of all even elements)
function sumOfOdd(arr){
    let sumOdd=0;
    let n = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]%2!== 0){
            sumOdd +=arr[i];
        }
    }

    return sumOdd;
}

function sumOfEven(arr){
    let sumEven=0;
    let n = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]%2== 0){
            sumEven +=arr[i];
        }
    }

    return sumEven;
}

console.log(Math.abs(sumOfOdd(arr)-sumOfEven(arr)));




// FizzBuzz problem

/* you're given an array, write a function which print in below manner

- if there's a multiple of 3, print Fizz
- if there's a multiple of 5, print Buzz
- if there's a multiple of both 3 & 5, print FizzBuzz;

*/

function fizzBuzz(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]%3==0 && arr[i]%5 !==0){
            console.log(arr[i] + " is Fizz")
        }else if(arr[i]%3 !==0 && arr[i]%5 ===0){
            console.log(arr[i] + " is Buzz")
        }else if(arr[i]%3 ===0 && arr[i]%5 ===0){
            console.log(arr[i] + " is FizzBuzz")
        }
    }
}

fizzBuzz(arr);


arr =["Rajat","Dev","Ram","Sita"];
arr[0] ="Laxman";
console.log(arr);



arr=[1,2,3,4,5,6];
arr[0]=12;

//Insertion in array
//Inserts at end

arr.push(15);

//Insert at begining
arr.unshift(-5);

console.log(arr);


//Deletion in array

//Deletion at end

arr.pop();
console.log(arr);


//deletionan at begining

arr.shift();
console.log(arr);


//Serching in array


// H.W write a function to return the index of a target element 
// functio FindIndex(arr,tsrgetvalue){ }

function findIndex(arr,targetvalue){
    console.log("index of target value is ",arr.indexOf(targetvalue));

}

findIndex(arr,5);


console.log('Index of 5 in Array', arr.indexOf(5));


// Inbuilt method to check if element exist or not

console.log(arr.includes(10));
console.log(arr.includes(5));

// Inbuilt method to check last index of array

console.log("last index  of 5 in arr " , arr.lastIndexOf(5));

/* find and update the value of element=5 to 14 using indexof() and includes() methods */
if(arr.includes(5)){
    arr[arr.indexOf(5)]=14;
}
console.log(arr);



let number = 4;

for (let i = 1; i <= number; i++) {
  let str = "";
  for (let s = 1; s <= number - i; s++) {
    str += " ";
  }
  if (i === 1) {
    str += "*";
  } else {
    str += "*";
    for (let s = 1; s <= 2 * i - 3; s++) {
      str += " ";
    }
    str += "*";
  }
  console.log(str);
}

for (let i = number - 1; i >= 1; i--) {
  let str = "";
  for (let s = 1; s <= number - i; s++) {
    str += " ";
  }
  if (i === 1) {
    str += "*";
  } else {
    str += "*";
    for (let s = 1; s <= 2 * i - 3; s++) {
      str += " ";
    }
    str += "*";
  }
  console.log(str);
}
