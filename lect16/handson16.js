
let motheName = "Priya singh";
let motherAge = 32;
let motherAddress ="Baner Pune";

let StdName="Pratik Patil";
let StdClass="10th";
let StdGender = "Male";
let StdAddress = "Viman Nagar, Pune";


let mother ={
    name: "Priya Singh",
    age: 33,
    address: "Baner, Pune",
    city: "Pune",
};

let student ={
    name: "Pratik Patil",
    age: 15,
    gender: "Male",
    address: "Viman Nagar, Pune",
    section: "C",
};

mother.occupation ="Housewife"; // occupation was not there, so we have added
mother.age= 34;  // age was there so it get updated

console.log({mother,student});

// Create a vehicle object that has following properties: number of seats, top speed, mileage, number of airbages

let vehicle1={
    name:"Thar",
    noOfSeats:4,
    topSpeed: 200,
    mileage: 22,
    noOfAirbag: 4,
};

console.log(vehicle1);

// updating seats

vehicle1.noOfSeats=5;

// adding a property in vehicle
vehicle1.colors=["white","black","grey"];

console.log({vehicle1});

//deleting property

delete vehicle1.noOfAirbag;
console.log({vehicle1});


vehicle1.address={
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra",
};

console.log({vehicle1});
console.log("City of Vehicle address: ",vehicle1?.address?.city);

//accessing the property that is not defiend

let vehicle2={
    noOfSeats:4,
    topSpeed: 200,
    mileage: 22,
    noOfAirbag: 4,
    address:{
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra",
}
};

//Array Of objects

const vehicles=[vehicle1,vehicle2];
console.log({vehicles});


// Question: print name of vehicle and it's city from arry

for(let val of vehicles){
    console.log("vehicle name: ",vehicle1?.name,"vehicle City:",vehicle1?.address?.city);
}


//for in loop in object

console.log("Printing vehicles data by using for .... in loop");
for(let key in vehicle1){
    console.log(key + ":" + vehicle1[key]);
}

// Objet.keys(object name) gives the arry of keys

const vehicleObjKeys = Object.keys(vehicle1);
const addressObjectKeys= Object.keys(vehicle1.address);
console.log({vehicleObjKeys,addressObjectKeys});

//change the calue of city to mumbai if it is pune

for(let value of vehicles){
    if(value?.address?.city==="Pune"){
        value.address.city="Mumbai";
    }
}
console.log(vehicles);



let vehicle3={
    noOfSeats:4,
    topSpeed: 200,
    currentSpeed:30,
    mileage: 22,
    noOfAirbag: 4,
    address:{
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra",
},
    isRunning: function(){
        if(this.currentSpeed >0){
            console.log("XUV is running at speed " + this.currentSpeed);
        }else{
            console.log("XUV is not running");
        }


       }
};


vehicle3.isRunning();
vehicle3.currentSpeed=0;
vehicle3.isRunning();


// implement this resume managemnet system

const resume ={
    name: "Samarth",
    email: "samarthsable02@gmail.com",
    phone: "9420471702",
    skills: ["Javascript","HTML","CSS"],
    WorkExperoence: ["College Projects", "Intership"],
  display: function () {
    // display all the details of the resume in any format
    console.log(resume);
  },
  addSkills: function (newSkill) {
    //add this new skill to skills array
    resume.skills.push(newSkill);
    console.log(resume);
  },
  addWorkExperience: function (newExperience) {
    //add this new experience to work experience array
    resume.workExperience.push(newExperience);
    console.log(resume);
  },
  showSkills: function () {
    //shows all the skills
    for(let val of resume.skills){
        console.log(val);
    }
  },
};

resume.display();
resume.addSkills("React");
resume.addWorkExperience("AccioJob");
resume.showSkills();
