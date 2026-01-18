//Bubble Sort

let arr = [22,1,33,12,14,16];

for(let i=0;i<arr.length-1;i++){
    let swap = false;
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp; 
            swap = true;
        }
    }
    if(!swap){
        break;
    }
}

console.log(arr);

// Wrost time complexity = O(n^2)
// use for only small data and sets;



//Selection sort
let arr2=[5,2,3,6,4]
let n = arr2.length;
for(let i=0;i<n-1;i++){
    let min= i;
    for(let j=i+1;j<n;j++){
        if(arr2[min]>arr2[j]){
            let temp = arr2[min];
            arr2[min]=arr2[j];
            arr2[j]=temp;
        }
    }
}

console.log(arr2);

//Find Most Frequent Element


let arr3=[9,8,1,1,2,2,3]

let l= arr3.length;
let max = 0;
let currentcount =0;
let answer = arr3[0];
arr3.sort();
for(let i=1;i<n;i++){
    if(arr[i]===arr[i-1]){
        currentcount++;
    }else {
        currentcount =1;
    }

    if((currentcount > max)|| (currentcount === max && arr3[i]<answer)){
        max = currentcount;
        answer=arr3[i];
    }
}

console.log(answer);


//insertion sort

let arr4=[5,2,3,6,4];
let m= arr4.length;

for(let i=1;i<m;i++){
    let j = i-1;
    while(j>=0 && arr4[i] < arr4[j]){
        let temp=arr4[i];
        arr4[i]=arr4[j];
        arr4[j]=temp;
        j--;
    }
}
console.log("Insertion Sort")
console.log(arr4);