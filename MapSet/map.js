//map is an object with key value pairs


let map = new Map();

map.set("a",1);
map.set("b",2);
map.set("c",3);
map.set("d",4);


console.log(map);


//Loops on map

for(let [key,value] of map){
    console.log(key,value);
}



map.forEach((value,key)=>{
    console.log("Using foreach",key,value);
})
//Methods

console.log(map.has('a'));//true

map.delete("d");
console.log(map);


//converting map to array

console.log(Array.from(map));

let dictonaryFruits= new Map([
    ["a",["apple","apricot"]],
    ["b",["banana"]],
    ["g",["grpas","guava"]]
])

console.log(dictonaryFruits);


//counting frequency of words

let sentence ="how many repeating words are there in this sentence which has repeating words";
let arr= sentence.split(" ");
let frequencyMap=new Map();
let count=1;
for(let word of arr){
    // if(frequencyMap.has(word)){
    //     frequencyMap.set(word,count+1);
    // }else{
    //     frequencyMap.set(word,count);
    // }

    frequencyMap.set(word,frequencyMap.get(word)+1||1);
}

for(let [key,value] of frequencyMap){
    if(value>1){
        console.log(key,value);
    }
}
