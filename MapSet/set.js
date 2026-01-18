let set0=new Set();

set0.add(1);
set0.add(4);
set0.add(5);
set0.add(7);
set0.add(6);
set0.add(8);
console.log(set0);


//set traversal

for(let val of set0){
    console.log(val);
}

//converting set to array

//using spread operator
let arr1= [...set0];
console.log(arr1);

//using Array.form() method

let arr2=  Array.from(set0);

console.log(arr2);

console.log(set0.has(7));

//operations of set

let firstSet= new Set([1,2,3,4,5,6]);
let secondSet = new Set([1,2,5,7,8,6]);

console.log("Union of two sets", firstSet.union(secondSet));

//difference

console.log("Difference of two sets",firstSet.difference(secondSet));

//intersection

console.log("Intersection",firstSet.intersection(secondSet));


//how to implement differnce between two sets without using built in funciton;



function difference(firstSet,secondSet){
    let differenceSet = new Set(firstSet);
    for(let item of secondSet){
        if(differenceSet.has(item)){
            differenceSet.delete(item);
        }
    }

    console.log("Differnece is",differenceSet);
}

difference(firstSet,secondSet);

//Union set
function unionSet(firstSet,secondSet){
    let unionset = new Set(firstSet);
    for(let item of secondSet){
            unionset.add(item);
    }

    console.log("Union is",unionset);
}

unionSet(firstSet,secondSet);


//intersection set



function intersection(firstSet,secondSet){
    let intersectionSet = new Set();
    for(let item of secondSet){
        if(firstSet.has(item)){
            intersectionSet.add(item);
        }
    }

    console.log("Intersection is",intersectionSet);
}

intersection(firstSet,secondSet);


//union of two sets using spread operator

const newUnionSet = new Set([...firstSet, ...secondSet]);
console.log("newset is:",newUnionSet);