// print the name and score of highest scoring student

let name1 = "Suresh";
let name2 = "Ranesh";
let marks1 = 20;
let marks2 = 30;
/* Method 1
if(marks1>marks2){
    score=marks1;
    names= name1

}else{
    score=marks2;
    names= name2;
}
console.log(`${names} has scored highest no = ${score}`);

*/

//This is best Method
let names = name1;
let score = marks1;

if (marks2 > marks1) {
  names = name1;
  score = marks2;
}
console.log(`${names} has scored highest no = ${score}`);

//Ternary Operator: ?
// False Part is Necessary

// Number is even or odd

let num1 = 3;
let mssg = num1 % 2 != 0 ? "Odd" : "Even";
console.log(mssg);

/* Check if Number is Positive or Negative */

let number = 5;
let isPositiveNegative =
  number > 0 ? "Positive" : number == 0 ? "zero" : "Negative";
console.log(isPositiveNegative);

/* HomeWork: Try all yesterdays's Questions with Ternary operator */

// print the name and score of highest scoring student using ternary operator

let student1 = "suresh";
let student2 = "ramesh";
let mark1 = 40;
let mark2 = 60;
let winnerN;
let wineerS;
let winner =
  mark2 > mark1
    ? ((winnerN = student2), (wineerS = mark2))
    : ((winnerN = student1), (wineerS = mark2));
console.log(`${winnerN} has scored highest no = ${wineerS}`);

// Greates Among Three Numbers

const number1 = 10,
  number2 = 20,
  number3 = 30;
const max = number1;
if (number1 >= number2 && number1 >= number3) {
}
// max min of two number

const max1 = Math.max(number1, number2);
const min = Math.min(number1, number2);
// Explore max of three or more numbers

/* Print 1-7 into Weekdays
1 -> Monday
2 -> Tuesday
3 -> Wednesday and so on..
*/

const dayNumber = 5; //Print Wednesday

let day =
  dayNumber == 1
    ? "Monday"
    : dayNumber == 2
    ? "Tuesday"
    : dayNumber == 3
    ? "Wednesday"
    : dayNumber == 4
    ? "Thursday"
    : dayNumber == 5
    ? "Friday"
    : dayNumber == 6
    ? "Saturday"
    : "Sunday";
console.log(day);

//Switch case
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid");
}

//Make Grading System Using Swithc Statement 

let marks=90;
let grade;
switch(true){
    case (marks>=80):
        grade="A";
        break;
    case (marks >=60):
        grade="B";
        break;
    case (marks >=40):
        grade="c";
        break;
    case (marks >=20):
        grade="D";
        break;
    default:
        grade="F"
}
console.log(`Grade is ${grade}`);


