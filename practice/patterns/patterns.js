// *
// **
// ***
// ****
// *****
let str = "";
for (let i = 0; i < 5; i++) {
  str += "*";
  console.log(str);
}

// *****
// ****
// ***
// **
// *
console.log(" ");
let str1 = "*";
for (let i = 5; i > 0; i--) {
  console.log(str1.repeat(i));
}

// 1
// 12
// 123
// 1234
// 12345
let numStr = "";
for (let i = 1; i <= 5; i++) {
  numStr += i;
  console.log(numStr);
}

// 1;
// 22;
// 333;
// 4444;
// 55555;

for (let i = 1; i <= 5; i++) {
  let n = "";
  n += i;
  console.log(n.repeat(i));
}

// A;
// AB;
// ABC;
// ABCD;
// ABCDE;

let str2 = "";
for (let i = 0; i < 5; i++) {
  str2 += String.fromCharCode(65 + i);
  console.log(str2);
}

//     *
//    ***
//   *****
//  *******
// *********

for (let i = 1; i <= 5; i++) {
  let str3 = "";
  str3 += " ".repeat(5 - i) + "*".repeat(2 * i - 1);
  console.log(str3);
}

// *********
//  *******
//   *****
//    ***
//     *

for (let i = 5; i > 0; i--) {
  let str3 = "";
  str3 += " ".repeat(5 - i) + "*".repeat(2 * i - 1);
  console.log(str3);
}
/*1
2 3
4 5 6
7 8 9 10 */

let count = 1;
for (let i = 0; i < 4; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += count + " ";
    count++;
  }
  console.log(str);
}
