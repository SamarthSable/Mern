/* ISsues in repeating code
-too much cpde for developer
- chances of erroe
-unable to count the number of repetition
-too much work to update "Hi" to "Hii"
*/


let count = 10;
while(count >0 ){
    console.log("hi");
    count --;
}

//print countinng from 1 to 10

let num=1;
while(num <=10){
    console.log(num);
    num ++;
}

//print even numbers till 25

let evenNum=1;
console.log("Even Numbers Are");
while(evenNum < 25){
    if(evenNum % 2 == 0)
        console.log(evenNum);
    evenNum ++;
}



// For Loop
console.log("For Loop");
for(let i = 0; i < 10; i++){
    console.log("Hi");
}

/* Print Counting from 1 to 10 */
console.log("counting");
for(let i = 0; i < 10; i++){
    console.log(i+1);
}

/* Print multiples of 3 upto 50*/
console.log("Multiples of 3");
for(let i = 1; i <= 50; i++){
    if(i%3 == 0){
        console.log(i);
    }
}

/* print squares of each number from 20 to 35 */
console.log("Squares from 20 to 35")
let n =35;
for(let i=20;i<=n;i++)
    console.log(i*i);

// Time Complexity -> O(n) --> (start + n) - start


// Print multiplication table of 5
console.log("Multiplication table - 5");
let number=5;
for(let i=1;i<=10;i++){
    console.log(`${number} * ${i} = ${number*i}`);
}

// Find sum of first 100 numbers and print it

console.log("Sum of first 100 Numbers")
let sum=0;
for(let i=1;i<=100;i++){
    sum +=i;
}
console.log(sum);


//Short circuting in JS