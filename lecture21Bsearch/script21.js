/* BInary Search  */
function binSearch(arr,target){
    let n = arr.length;
    let left=0;
    let right=n-1;
    while(left <= right){
        let mid = Math.floor((left + right )/2);
        if(arr[mid]=== target){
            return mid;
        }else if(arr[mid]>target){
            right = mid -1;
        }else if(arr[mid]<target){
            left =mid +1;
        }
    }

    return -1;
}

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(binSearch(arr,5));
console.log(binSearch(arr,7));


/* Leetcode 34 first occuring number index */

//By using Linear search
function firstOccurrenceByL(arr, target){
    let n = arr.length;
    for(i=0;i<n;i++){
        if(arr[i]=== target){
            return i;
        }
    }
    retrun -1;
}


//By using bin search;
function firstOccurrenceByB(arr, target){
    let n= arr.length;
    let firstOccInd =-1;
    let right =n-1;
    let left=0;
    let found= false;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]===target){
            firstOccInd=mid;
            found=true;
            right --;
        }else if(arr[mid]>target){
            right = mid -1;
        }else if(arr[mid]<target){
            left =mid +1;
        }
    }
    if(found){
        return firstOccInd;
    }else{
        return -1;
    }

}

let arr1=[1,2,4,4,5,6,6,7];
console.log(firstOccurrenceByL(arr1,4));
console.log(firstOccurrenceByB(arr1,4));

let arr2=[1,1,1,1,1,1];
console.log(firstOccurrenceByB(arr2,1));


let arr3=["apple","banana","banana","cherry","date"];
console.log(firstOccurrenceByL(arr3,"banana"));
console.log(firstOccurrenceByB(arr3,"banana"));
console.log(firstOccurrenceByB(arr3,"fig"));


// lower bound and upperbound
function lowerBound(arr, x){
    let n = arr.length;
    let left=0;
    let right=n-1;
    let ans=n;
    while(left <= right){
        let mid = Math.floor((left + right )/2);
        if(arr[mid]>= target){
            ans =mid;
            left= mid-1;
        }else if(arr[mid]>target){
            right = mid -1;
        }else if(arr[mid]<target){
            left =mid +1;
        }
    }

    return ans;
}


function upperBound(arr, x){
    let n = arr.length;
    let left=0;
    let right=n-1;
    let ans=n;
    while(left <= right){
        let mid = Math.floor((left + right )/2);
        if(arr[mid] >target){
            ans =mid;
            left= mid-1;
        }else if(arr[mid]>target){
            right = mid -1;
        }else if(arr[mid]<target){
            left =mid +1;
        }
    }

    return ans;
}