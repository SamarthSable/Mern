// let arr = [4, 5, 6, 7, 8, 9, 10];

// const { createElement } = require("react");

// for (let i = 0; i < arr.length; i++) {
//   arr.pop();
// }
// console.log(arr); //4,5,6,7,

// const button = document.querySelector("#aptitude");
// const modal = document.querySelector(".container");
// const close = document.querySelector("#close");

// button.addEventListener("click", function () {
//   modal.style.display = "flex";
// });

// modal.addEventListener("click", function (e) {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });

// const add = document.querySelector(".add");
// const sub = document.querySelector(".sub");
// const count = document.querySelector(".count");
// const reset = document.querySelector(".reset");
// let countValue = 0;
// function addValue() {
//   countValue++;
//   count.textContent = countValue;
// }
// function subValue() {
//   countValue--;
//   count.textContent = countValue;
// }
// function resetValue() {
//   countValue = 0;
//   count.textContent = countValue;
// }

// add.addEventListener("click", addValue);
// sub.addEventListener("click", subValue);
// reset.addEventListener("click", resetValue);

// const input = document.querySelector("#input");
// const para = document.querySelector(".para");

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);
//     setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// function updateHandle() {
//   para.textContent = input.value;
// }

// let useHandle = debounce(updateHandle, 3000);

// input.addEventListener("input", () => {
//   useHandle();
// });

// const add = document.querySelector(".add");
// const list = document.querySelector(".list");
// const input = document.querySelector(".input");

// add.addEventListener("click", function () {
//   const listitem = document.createElement("li");
//   const para = document.createElement("p");
//   const del = document.createElement("button");
//   const chk = document.createElement("input");
//   chk.type = "checkbox";
//   del.textContent = "Remove";
//   del.classList.add("del-btn");
//   listitem.append(para, chk, del);
//   listitem.classList.add("list-item");
//   para.textContent = input.value;
//   list.append(listitem);
// });

// list.addEventListener("click", (e) => {
//   if (e.target.classList.contains("del-btn")) {
//     e.target.closest("li").remove();
//   }

//   if (e.target.type === "checkbox") {
//     e.target.closest("li").classList.toggle("complete");
//   }
// });
// const surveyform = document.querySelector(".survey-form");

// surveyform.addEventListener("submit", function (e) {
//   e.preventDefault();
//   FormData = new FormData(surveyform);

//   console.log(FormData.get("name"));
//   console.log(FormData.get("email"));
//   console.log(FormData.get("age"));
//   console.log(FormData.get("feedback"));
// });

// function getuserData(userID, callback) {
//   if (!userID) {
//     callback("user not found", null);
//   } else {
//     callback(null, userID);
//   }
// }

// function fetchPost(userID) {

// }

// document.querySelector("#outer").addEventListener("click", () => {
//   console.log("Outer clicked");
// });

// document.querySelector("#middle").addEventListener("click", () => {
//   console.log("Middle clicked");
// });

// document.querySelector("#inner").addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Inner clicked");
// });
