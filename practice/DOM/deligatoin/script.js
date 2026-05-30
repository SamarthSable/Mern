// const outer = document.querySelector(".outer");
// const inner = document.querySelector(".inner");
// const middle = document.querySelector(".middle");

// outer.addEventListener("click", function () {
//   console.log("Outer called");
// });
// inner.addEventListener("click", function () {
//   console.log("inner called");
// });
// middle.addEventListener("click", function () {
//   console.log("middle called");
// });
const main = document.querySelector(".container");

main.addEventListener("click", (e) => {
  if (e.target.matches(".button")) {
    console.log("Button clicked", e.target);
  }
});
