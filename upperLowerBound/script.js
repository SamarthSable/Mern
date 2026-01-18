function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  console.log(min);
}

findMin([5, 4, 1, 2, 5, 6]);

//finding weather a word exists in a sentence

let sentence = "I love coding in JS";

function findWord(sentence, sword) {
  let arr = sentence.split(" ");
  for (let word of arr) {
    if (word === sword) {
      console.log("Found");
    }
  }
}

findWord(sentence, "coding");

function findingSquareRoot(term) {
  let low = 0;
  let high = term;
  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);

    if (middle * middle === term) {
      return middle;
    }

    if (middle * middle > term) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return high;
}

console.log(findingSquareRoot(36));
console.log(findingSquareRoot(17));
console.log(findingSquareRoot(81));
console.log(findingSquareRoot(10));

// Finding the upper bound using binary search
function findUpperbound() {
  let list = [1, 2, 3, 4, 4, 4, 7, 9];
  let x=7;
  let l = 0;
  let r = list.length;

  mid = Math.floor(l + (r - l) / 2);

  if (list[mid] <= x) {
    l = mid + 1;
  } else {
    r = mid;
  }

  return list[l];
}


console.log("Upper bound is "+ findUpperbound());