let arr = [5, 2, 9, 1];

function mergeSort(arr) {
    // Base Case
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements
    while (leftIndex < left.length) {
        mergedArr.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        mergedArr.push(right[rightIndex]);
        rightIndex++;
    }

    return mergedArr;
}

console.log(mergeSort(arr));
