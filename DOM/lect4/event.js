function handleClick() {
  alert("button clicked");
}

function handleClick2() {
  console.log("button clicked on handle 2");
}

const buttonElement = document.querySelector("button");

//It will overide by second function
// buttonElement.onclick = handleClick;

// buttonElement.onclick = handleClick2;

//solution for above problem

buttonElement.addEventListener("click", handleClick);
buttonElement.addEventListener("click", handleClick2);

function handleMouseMove() {
  console.log("Mouse is moving");
}

// document.addEventListener("mousemove", handleMouseMove);

document.querySelector("input").addEventListener("keydown", function (event) {
  console.log(event);
});
document.querySelector("input").addEventListener("keypress", function (event) {
  console.log(event);
});
document.querySelector("input").addEventListener("keyup", function (event) {
  console.log(event);
});

function handleStart() {
  alert("Start");
}

function handleStart() {
  document.addEventListener("mousemove", handleMouseMove);
}

function handleStop() {
  document.removeEventListener("mousemove", handleMouseMove);
}
const startButton = document.querySelector("#start");

startButton.addEventListener("click", handleStart);

const startStop = document.querySelector("#stop");

startStop.addEventListener("click", handleStop);

// Mouse Tracking

// function handleMouseover(event) {
//   console.log(event.clientX, event.clientY);
//   circleMove.style.top = `${event.clientY} px`;
//   circleMove.style.left = `${event.clientX} px`;
// }
// const circleMove = document.querySelector(".circle");

// document.addEventListener("mousemove", function (event) {
//   const { clientX, clientY } = event;
//   circleMove.style.top = `${clientY - 25}px`;
//   circleMove.style.left = `${clientX - 25}px`;
// });

///Counter

let count = document.querySelector("#count");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let countnum = 0;
function updateCount() {
  count.textContent = countnum;
}
add.addEventListener("click", function () {
  countnum++;
  updateCount();
});

sub.addEventListener("click", function () {
  if (countnum > 0) {
    countnum--;
  } else {
    alert("cannot decrese below 0");
  }

  updateCount();
});
