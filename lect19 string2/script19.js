/* Split */

let str = "mern stack course";
console.log(str.split(" "));

let str2 = "mern stackaaacourse";
console.log(str2.split("aa"));

let str3 = "mern stack course";
console.log(str3.split(""));

/* count number of words */
let words= "   hi this is samarth and we are learning mern stsck  ";
console.log(words.trim().split(" ").length);

/* join() */

let arr =[1,2,3,4];
console.log("Sum of arr [",arr.join(" "),"] is", 10);


/* Questions on strings */

/* Given a string , toggle its case
input : HelLo
output: hELlo
 */

function toggleCase(str){
    let n= str.length;
    let toggledStr="";
/*     for(let i= 0; i<n;i++){
        if(str[i]  >= 'a' && str[i] <='z'){
            toggledStr += str[i].toUpperCase();
        }else if(str[i]  >= 'A' && str[i] <='Z'){
            toggledStr += str[i].toLowerCase();
        }else{
            toggledStr += str[i];
        }
    }
     */

    for(let i= 0; i<n;i++){
        if(str[i]  === str[i].toLowerCase()){
            toggledStr += str[i].toUpperCase();
        }else if(str[i]  === str[i].toUpperCase()){
            toggledStr += str[i].toLowerCase();
        }else{
            toggledStr += str[i];
        }
    }

    
    return toggledStr;
}

console.log(toggleCase("HelLo"));


/* write a funtion to convert camelCase to snake_case */
// TC => O(N), SC => O(N);
function cmlTosnkCase(str){
    let n=str.length;
    let newStr="";
    for(let i=0;i<n;i++){
        if(str[i]==str[i].toUpperCase()){
            newStr +="_"+ str[i].toLowerCase();
        }else{
            newStr +=str[i];
        }
    }
    return newStr;
}

console.log(cmlTosnkCase("camelCase"));



/* write a function to convert snake_case to camelCase */
function snkTocmlCase(str){
    let n=str.length;
    let newStr="";
    for(let i=0;i<n;i++){
        if(str[i]=="_"){
            newStr +=str[i+1].toUpperCase();
            i++;
        }else{
            newStr +=str[i];
        }
    }
    return newStr;
}

console.log(snkTocmlCase("snake_case"));


/* Question : Extract Jungle from below string using string methods */

str ="  How_are_you_in Jungle! ";


//console.log(str.trim().split(" ").charAt(str.trim().split(" ").indexOf("Jungle")));


/* Only use replace() & replaceAll() methods and replace "in" with "on" in below  string*/
// Note : Spain should remain as is

str = "Hi are you in Spain, which city are you in?";
console.log(str.replaceAll("in","on").replace("on","in").replace("on","in").replace("in","on"));

str = "Hi are you in Spain, which city are you in? How's your pain?";
console.log(str.replaceAll("in","on").replace("on","in").replace("on","in").replace("in","on"));

str = "Hi are you in Spain, which city are you in? How's your pain?";
console.log(str.replace("Spain","x").replaceAll("in","on").replace("x","Spain"));


/* dunction to reverse a strin */

function reverse(str){
    let reverse="";
    let n=str.length;
    for(let i=0;i<n;i++){
        reverse += str[n-1-i];
    }

    return reverse;
}
console.log(reverse("abcde"));

/* function to check palidrom  */

function isPalidrome(str){
    str.trim();
    let n=str.length;
    for(let i=0;i<n;i++){
        if(str[i]!=str[n-1-i])return false;
    }
    return true;
}
console.log(isPalidrome("abcde"));
console.log(isPalidrome("abcba"));

/* check if a string is palindrome or not , ignore cases(upper/lower) & spaces */
str="Nurses run";
//str = str.replaceAll(" ","").toLowerCase();
console.log(isPalidrome(str.replaceAll(" ","").toLowerCase()));


/* H.W---> find the length of longest word
input: str="Pune is the most loved city for its weather" 
output: 7
*/
str="Pune is the most loved city for its weather"
str= str.trim().split(" ");
console.log(str);
let max=0;
for(let i=0;i<str.length;i++){
    let count=0;
     for(let j=0;j<str[i].length;j++){
        count++;  
     }
     if(count>max){
        max=count;
     }
}

console.log(max);

/* write a function to find the first non-repeating chatacter in a strig 
input: "stringMethodsring"
output="M"
*/
str="stringMethodsring"
function nonRepeatingChar(str){
    let n= str.length;
    for(let i=0;i<n;i++){
        let firstindex=str.indexOf(str[i]);
        let lastindex= str.lastIndexOf(str[i]);

        if(firstindex===lastindex){
            return str[i];
        }
    }
}

console.log(nonRepeatingChar(str));

/* Write a function to count frequency of each character */

function frequencyOfEachChar(str){

}

console.log(frequencyOfEachChar("stringMethodsring"));