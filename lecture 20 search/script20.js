function frequencyCounter(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return true;
        }
    }

    return false;
}

let arr=[2,5,7,8];
console.log(frequencyCounter(arr,5));
console.log(frequencyCounter(arr,9));


function stringSearch(str,target){
    for(let i=0;i<str.length;i++){
        if(str[i] === target){
            return 1;
        }
    }
    return -1;
}

let str="hello";
console.log(stringSearch(str,"e"));
console.log(stringSearch(str,"z"));


let arr1=str.split("");
console.log(typeof(arr1[1]));


/* Searching in Objrct */
let users =[
    {id:1,name:"Ujjwal",city:"Pune"},
    {id:2,name:"Ravi",city:"Latur"},
    {id:3,name:"Rakesh",city:"Mumbai"},
    {id:4,name:"Ram",city:"Sambhajinagr"},
    {id:5,name:"Ayan",city:"Baramati"},
    {id:6,name:"Rakesh",city:"Beed"}
];

function findUSerByName(arr,name){
    for(let i=0;i<arr.length;i++){
        if(arr[i].name===name){
            return arr[i];
        }
    }
    return null;
}


console.log(findUSerByName(users,"Ayan"));
console.log(findUSerByName(users,"Rakesh"));


/* Map in JavaScript */


// let myMap = new Map();

// myMap.set(name,"Ajay");
// myMap.set(name,"Ram");

// myMap.get(name);

// myMap.has();
// myMap.delete();


let StudentMap = new Map();

StudentMap.set("101","jay");
StudentMap.set("102","Rajesh");
StudentMap.set("103","Sham");
console.log(StudentMap);

console.log(StudentMap.get("101"));
console.log(StudentMap.has("103"));

StudentMap.delete("102");
console.log(StudentMap);


function countFrequency(myStr){
    myStr = myStr.trim();
    let frequencyMap = new Map();
    for(let i=0;i<myStr.length;i++){
        if(frequencyMap.has(myStr[i])){
            let count = frequencyMap.get(myStr[i])+1;
            frequencyMap.set(myStr[i],count);
        }else{
            frequencyMap.set(myStr[i],1);
        }
    }

    console.log(frequencyMap);
}

let arr3=[10,20,30,40,30,50];
let arr4=[1,2,3,4,3,2,1];
// countFrequency(arr3);
// countFrequency(arr4);


let myStr= "hello world";
countFrequency(myStr);

let myStr1="learning map in javascript";
countFrequency(myStr1);



// Sets in javascript

let fruits = new Set();

fruits.add("Apple");
fruits.add("banana");
fruits.add("Apple");

console.log(fruits);

console.log(fruits.has("banana"));
fruits.delete("Apple");
console.log(fruits);

// Anagram

function isAnagram(str1,str2){
    if(str1.length !== str2.length) return false;

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("listen","silent"));
console.log(isAnagram("hello","world"));


//Aother methos to solve anagram

function isAnagram1(str1,str2){
    if(str1.length !== str2.length) return false;

    let freqCount ={};

    for (let char of str1){
        freqCount[char] = (freqCount[char] || 0) + 1;
    }
    //console.log(freqCount);

    for(let char of str2){
        if(!freqCount[char]){
            return false;
        }

        freqCount[char] -= 1;
    }

    return true;
}
console.log(isAnagram1("listen","silent"));
console.log(isAnagram1("hello","world"));
console.log(isAnagram1("triangle","integral"));
