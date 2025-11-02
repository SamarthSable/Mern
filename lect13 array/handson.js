let arr=[2,10,6,4,9];

console.log({arr})
console.log(arr.slice(1,4));  
console.log(arr.slice(1));    
console.log(arr.slice()); 


console.log(arr.splice(1,3));  
console.log({arr});

let arr1=[-3,-4,5];
console.log(arr.concat(arr1));


let arr2=[4,5,8,6,9];
let mergedarray = arr.concat(arr1,arr2);



for(let i=0; i< arr.length ; i++){
    console.log(arr[i]);
}



for(let index in arr){
    console.log(arr[index]);
}


for(let value of arr){
    console.log(value);
}



arr =[12,4,-8,10];

function sumOfPrefix(arr){
    let sum=0;
    let newArr =[];
    for(let val of arr){
        sum += val;
        newArr.push(sum);
    }
    console.log(newArr);

}
sumOfPrefix(arr);

function swap (x,y){
    console.log({x,y});
    let temp=x;
    x=y;
    y=temp;
    console.log({x,y});
}

swap(10,12)


function swapArray(arr, ind1,ind2){
    let n = arr.length;

    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2]=temp;

    console.log({arr});
}

arr = [1,2,3,4,5];
swapArray(arr,1,4);

function printOddEle(arr){
    let n=arr.length;
        for(let i=1; i<n;i +=2){
        console.log(arr[i]);
    }
}
arr = [1, 2, 3, 4, 5];
printOddEle(arr);
arr1 = [1, 2, 3, 4, 5, 6];
printOddEle(arr1);

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


arr =[1,2,"123",2.344, true,[3,4, "five",[2,5,"printMe"]]];


console.log(arr[5][3][2]);