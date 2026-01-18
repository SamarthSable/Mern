//Suitable for large datasets

let arr = [10, 7, 8, 9, 1, 5];

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++;
            // swap smaller element to left
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // swap pivot to correct position
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];

    return i + 1;
}

quickSort(arr);
console.log(arr);
