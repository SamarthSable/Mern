let matrix1= [
    [1,4,3],
    [2,7,9],
    [5,8,6],
    [3,2,7],
];

let matrix2=[[1,2,3,4]];
let matrix3=[[1],[2],[3],[4]];
/* Boundray traversal - 18th sep Assignment */
function boundaryTraversal(n,m,matrix){
    /* printing 1st row -> row number is same for all elements */

    for(let j=0; j<m;j++){
        console.log(matrix[0][j]);
    }

    /* Printing last column j is same for all elements */
    for(let i=1;i<n;i++){
        console.log(matrix[i][m-1]);
    }

    if(n==1) return;
    /* Printing last row in reverse order 
    for this all elemetns row will br (n-1) i.e i =n-1 ,
    and we just need to loop through j, in reverse order*/

    for(let j = m-2;j >=0; j--){
        console.log(matrix[n-1][j]);
    }

    if(m==1) return; //Handing edge cases i.e (if first and last columns are same then it will print ths last column again exapmle matrix3)

    /* printing first column in revers order j will be 0 */
    for(let i=n-2;i>0;i--){
        console.log(matrix[i][0])
    }

}


boundaryTraversal(4,3,matrix1);
console.log("==========");
boundaryTraversal(1,4,matrix2);
console.log("==========");
boundaryTraversal(4,1,matrix3);



/* Traspose matrix row to column , column to row */

function transposematrix(matrix4,n){
    //let newmatrix =[...matrix4]; it is wrong write why 
    // let newMatrix=[];
    // for(let i=0;i<n;i++){
    //     newMatrix = [...matrix4[i]];
    // }
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            [matrix4[i][j], matrix4[j][i]]=[matrix4[j][i], matrix4[i][j]];
        }
    }
    for(let i=0;i<n;i++){
      console.log(matrix4[i].join(" "));
    }

}
let matrix4=[[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15], 
[16,17,18,19,20],
[21,22,23,24,25],
];

transposematrix(matrix4,5);


//90 degree rotate

function rotatmatrix(matrix) {

  let n=matrix.length;
  let newMatrix=[];
  for(let i=0;i<n;i++){
    newMatrix[i]=[];
    for(let j=0;j<n;j++){
      newMatrix[i][j]=0;
    }
  }

  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      newMatrix[j][n-1-i]=matrix[i][j];
    }
  }

  console.log("90Degree Rotated Matrix");

  console.log(newMatrix);
}

rotatmatrix(matrix4);

/* ============ Strings ============ */

let str = "Hi, I'm Samarth";
let str2= "Hi, I'm Samarth";
let str3= `Hi I'm "Samarth"`;
let str4 = `Hi I'm "Samarth"`;
console.log(typeof str);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4);


console.log(str);

str[4]="Y"  //It will not work strings are immutable
console.log(str4);
str4 ="Y"; //Whole String can be changed;
console.log(str4);

//number of words
let words = "Hi how was your day";
let count=0;
for(let i=0;i<words.length;i++){
    if(words[i]===" "){
        count++;
    }
}

console.log("count of words is", count+1);




/* Methos in string */

//include() -> chekcs if substring present

console.log("baloon".includes("oon"));
console.log("baloon".includes("ooN"));//it is case sensitive

//replace() => only replace first value of the target string
str ="shoes";
console.log(str.replace("s", "d"));

//replaceAll() -> replaces all targets

str= "shows";
console.log(str.replaceAll("s","a"));

//trim()=> removes all spaces only leading and trailling

str ="      hi      i   am    samarth ";
console.log(str.trim());

// substring() -> gives a substring based on  various ternms and consitions

console.log("Beginner".substring(2));  //substring form index =2
console.log("Beginner".substring(2,6));// substring from index=2 to index=5
console.log("Beginner".substring(-2));//substring from index 0 ( convets -ve to 0)
console.log("Beginner".substring(-2 ,6));//(0,6)
console.log("Beginner".substring(5, 2));//(2,5)
console.log("Beginner".substring(5,-3));//(0,5)

//slice() -> same as substrin() only differ when -ve range

console.log("SubString".slice(2)); //(2,n)
console.log("SubString".slice(-2)); // gives lst 2 charactrt
console.log("SubString".slice(4,-2)); // from index 4 to index -2
console.log("SubString".slice(-7,-2)); //start from 7th ele from end before 2nd ele

//Practice
console.log("SubString".slice(-12,-1)); // for outbond values alway start from index 0 for -ve
console.log("SubString".slice(-18));
console.log("SubString".slice(12)); ///for +ve outbound values return nothing
console.log("new");
console.log("SubString".slice(-4,0));
// repeat()
console.log("abcd".repeat(4)); // repeats sting upto given taregt
console.log("abcd".repeat(4.5));

//console.log("abcd".repeat(-4));// for -ve valude its Rangeerror

console.log("abcd".__proto__); // console the wrapper pbject details

//char at
console.log("vscode".charAt(2));

console.log("vscode".charAt(-2));//dosent work for -ve indexvalues

//indexOf()
console.log("stringMethodsring".indexOf("ring"));
console.log("stringMethodsring".indexOf("ring", 7)); //finds the string starting from index 7 afterwords
console.log("stringMethodsring".indexOf("ring", -7)); // -ve values treated as 0
console.log("stringMethodsring".indexOf("ring", -1)); 
// toLowerCase()
console.log("AbCd".toLowerCase());

// toUpperCase()
console.log("AbCd".toUpperCase());