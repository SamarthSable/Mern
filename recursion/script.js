function recursivesum(n){
    //base code
    if(n===1){
        return 1
    }

    return n += recursivesum(n-1);
}

console.log(recursivesum(5));

//factorial using recusrrion


function findfactorial(num){
    if(num ===1){
        return 1;
    }

    return num *= findfactorial(num-1);
}

console.log("Factorial of a number is :", findfactorial(5));



//Number raise to power


function powNumber(num, exp){
    if(exp===0){
        return 1;
    }

    return num* powNumber(num,exp-1);
}

console.log( "power of a number is :",powNumber(5,3));



//sum of array elements

function sumofArr(arr,index=0){
    if(index=== arr.length-1){
        return arr[index];
    }

    return arr[index] += sumofArr(arr,index+1);
}

console.log(sumofArr([1,2,3,4,5]));


//reverse of string using recurrsion

function reverseStr(str , index=0){
    if(index=== str.length) return "";

    return reverseStr(str,index+1)+str[index];
}


console.log(reverseStr("hello"));