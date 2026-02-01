document.addEventListener("DOMContentLoaded", () => {
  console.log("processing");
  const status = document.getElementById("status");

  status.textContent = "Processing...";

  const start = Date.now();

  while (Date.now() - start < 4000) {}

  console.log("This line executes first.");

  setTimeout(() => {
    console.log("Code inside setTimeout executed.");
  }, 2000);

  setInterval(() => {
    console.log("Code inside setInterval executed.");
  }, 6000);

  console.log("Next Line Executed");

  document.getElementById("myButton").addEventListener("click", () => {
    console.log("Button Clicked!");
  });

  console.log("done");

  status.textContent = "Done";

  function heavyFFn() {
    console.log("Heavy function started.");
    // Simulate a heavy computation

    while (true) {
      console.log("Heavy function is running...");
    }
  }
});
