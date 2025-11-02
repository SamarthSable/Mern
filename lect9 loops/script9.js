// factoril of given number

const n=10;
let fact=1;
for(let i=1;i<=n;i++){
    fact *= i;
}
console.log(fact);

//check number is prime or not

let number=13;
let isPrime = true;
for(let i=2;i<number;i++){
    if(number%i==0){
        isPrime=false;
        break;
    }
}

isPrime ? console.log(number + " is prime number") : console.log(number + " is not prime number");


// ========= Break keyword ========= //

// Print numbers from 100 to 200 immediatley stop when a number is divisible by 17 

const divisor =17;
for(let i=100; i<=200 ; i++){
    if(i % divisor == 0){
        break;
    }
    console.log(i);
}


// ========= Continue keyword ========= //

// Print the squares of all numbers except numbers divisible by 17  from 1 to 100

for(let i=1; i<=100 ; i++){   
    if(i%divisor==0){
        continue;
    }
    console.log(i, i**2);
}



// Print all odd numbers from 1 to 200 that are divisible by 5 use continue

for(let i=1;i<=200;i++){
    if(i%5==0 ){
        if(i%2 ==0){
            continue;
        }
        console.log(i); 
    }
}

// Print first 10 odd numbers from 1 to 200 that are divisible by 5
console.log("first 10 odd numbers");
let count =0;
for(let i=1;i<=200;i++){
    if(i%5==0 ){
        if(i%2 ==0){
            continue;
        }
        count++;
        console.log(i); 
        if(count==10){
            break;
        }
    }
}


//======== Nested Loops ==========

// write a program to print 10 '*'

N = 10;
let starString="";
for(let i =0; i<N ; i ++){
    starString +="*"
}
console.log(starString);



//write a program to print 10 '*' in 10 lines

for(let i =0; i<N ; i ++){
    let starString="";
    for(let j=0;j<N;j++){
        starString +="*"
    }
    console.log(starString);
}


//Print below pattern

for(let i =1; i<7 ; i ++){
    let numString="";
    for(let j=1;j<7;j++){
        numString += " " + j;
        
    }
    console.log(numString);
}

// Home Work //

/* print this pattern

A.

*****
****
***
**
*


B.

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6

*/




do{
    console.log("Hi, I'm do while loop");
}while(false);

let response;

do{
    response = prompt("Do you want to continue");
    console.log("Hi, I'm do while loop");
}while(response =="Yes" || response =="yes");