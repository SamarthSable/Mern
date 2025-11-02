let arr=[2,10,6,4,9];

/* slice */
console.log({arr})
console.log(arr.slice(1,4));  // will gies elementts in range(1,4)
console.log(arr.slice(1));    //ves will gies elements in range(1,end)
console.log(arr.slice());     // will gives all elements


/* splice */

console.log(arr.splice(1,3));  // Changes the original array
console.log({arr});


// Concat

let arr1=[-3,-4,5];
console.log(arr.concat(arr1)); //H.W How to concatinate Multiple Arryas?

// Concating  multiple array
let arr2=[4,5,8,6,9];
let mergedarray = arr.concat(arr1,arr2);


/* =============== Types of loops in Array =============== */

/// Basic Loop 

for(let i=0; i< arr.length ; i++){
    console.log(arr[i]);
}


// for in loop

for(let index in arr){
    console.log(arr[index]);
    // console.log(typrof index) ---> type of index here is string
}

// for of loop

for(let value of arr){
    console.log(value);
}

/* write a function which prints the prefix sum of an array

input: [12,4,-8,10]

output:[12,16,8,18]

*/

arr =[12,4,-8,10];

function sumOfPrefix(arr){
    let sum=0;
    let newArr =[];
    for(let val of arr){
        sum += val;
        newArr.push(sum);
    }
    console.log(newArr);
    // for(let i=1;i<arr.length;i++){
    //     for(let j=0;j<=i;j++){
    //     arr[i]=arr[i] + arr[i-1];
    // }
    // console.log(arr);
}

sumOfPrefix(arr);



// Write a funcion to swap values of two variables

function swap (x,y){
    console.log({x,y});
    let temp=x;
    x=y;
    y=temp;
    console.log({x,y});
}

swap(10,12)


/* Swapping two values of Array
input: arr=[1,2,3,4,5],  ind1=1,ind2=4

output: arr=[1,5,3,4,2]
*/

function swapArray(arr, ind1,ind2){
    let n = arr.length;

    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2]=temp;

    console.log({arr});
}

arr = [1,2,3,4,5];
swapArray(arr,1,4);



/* Question: print  elemets at odd indices of array
input: arr = [1,2,3,4,5] --> odd length of array
output: 2,4

input: arr = [1,2,3,4,5,6] --> even length of array
output: 2,4,6

*/

function printOddEle(arr){
    let n=arr.length;
    // for(let i=0;i<n;i++){
    //     if(i%2 !=0){
    //         console.log(arr[i]);
    //     }
    // }

    for(let i=1; i<n;i +=2){
        console.log(arr[i]);
    }
}
arr = [1, 2, 3, 4, 5];
printOddEle(arr);
arr1 = [1, 2, 3, 4, 5, 6];
printOddEle(arr1);

/* Question: Swap alternate elemets of an array
input: arr = [1,2,3,4,5] --> odd length of array
output: arrr=[2,1,4,3,5]

input: arr = [1,2,3,4,5,6] --> even length of array
output: arrr=[2,1,4,3,6,5]

*/

function swapAlternate(arr){
    let n = arr.length;
    for(let i=1; i<n;i +=2){
        let temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
    }
    console.log(arr);
}

swapAlternate(arr);
swapAlternate(arr1);


/* ======== Heterogenous property of Arrays in js ======== */

arr =[1,2,"123",2.344, true,[3,4, "five",[2,5,"printMe"]]];

// How to print "printMe" from above array

console.log(arr[5][3][2]);

/* H.W Question: Given an array of consecutive numbers, but  there's on number thsta's missing, find it
input: [1,2,3,5,6,7,8]
output: 4
*/

arr =[1,2,3,5,7,8];
for(let i=0;i<=arr.length;i++){
    if(i+1 != arr[i]){
        console.log(i+1);
        break;
    }
}