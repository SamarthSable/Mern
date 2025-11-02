// Print all subarryas

function printSubarrays(arr){
    let n =arr.length;

    for(let i=0;i<n;i++){
        let subarry = [];
        for(let j =i ; j<n;j++){
             subarry.push(arr[j]);
             //console.log(subarry.join(" "));

            //Method 2

            //console.log(arr.slice(i,j+1).join(" "));
            //sumOFsubArray(subarry)
            findTarfetSumSubarrya(subarry,17);
        }
    }
}

printSubarrays([1,4,5,7,3,2]);


// Funtion to print the sum of all sub arrays

function sumOFsubArray(arr){
    let n=arr.length;
    let sum =0;
    for(let i=0;i<n;i++){
        sum += arr[i];
    }

    //console.log("Sum of Subarry ",arr," is" , sum);
    return sum;
}



/* wrie a funtion to print the subarray whose sum is target sum (t)*/
// TC = O(N^2)
//note: Optimized time complexity is O(N) - Try your own

function findTarfetSumSubarrya(arr,t){
    let sum=sumOFsubArray(arr);
    if(sum === t){
        console.log("Array", arr, "has sum equal to 17");
    }
}


for(let i=0;i<3;i++){
    let str="";
    for(let j=1;j<=5;j++){
        str += j + 5*i + " ";
        
    }
    console.log(str);
    
}


arr=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
];

console.log("Printing 2D Array");
let allsum=0;
for(let i=0;i<arr.length;i++){
    str = "";
    let sum =0;
    for(let j=0 ; j< arr[i].length;j++){
        str += arr[i][j] + " ";
        sum += arr[i][j];
    }
    allsum +=sum;
    console.log(str);
    console.log(sum);
}
console.log("Sum of all matrix is ", allsum);

// Print the [sum of product of elemets of each even indexd-row)]

let sum=0;
for(let i=0;i<arr.length;i++){
    if(i%2==0){
        let product=1;
        for(let j=0;j<arr[i].length;j++){
            product *=arr[i][j];
        }
        sum += product;
    }   
}
console.log(sum);


//print the matrix column-wise


for(let j=0;j<arr[0].length;j++){
    let str="";
    for (let i=0;i<arr.length;i++){
        str += arr[i][j] + " ";
    }
    console.log(str);
}
// H>W - print the sum of elements in odd columns


// function to print all the elemets of primary & secondary diagonal

function printDigoanl(arr){
    let n = arr.length;
    let primarysum=0;
    let secondarysum=0;
    console.log("Primary diagonal");
    for(let i=0;i<arr.length;i++){
        console.log(arr[i][i]);
        primarysum +=arr[i][i];
    }
    diagonalSum(primarysum);
    console.log("Secondary diagonal");
    for(let i=0;i<arr.length;i++){
        console.log(arr[i][n-1-i]);
        secondarysum +=arr[i][n-1-i];
    }
    diagonalSum(secondarysum);


}

arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
printDigoanl(arr);



//function to check if primary diagonal sum is odd or even
function diagonalSum(sum){
    if(sum%2==0){
        console.log("Sum is even" , sum);
    }else{
        console.log("Sum is odd", sum);
    }

}
