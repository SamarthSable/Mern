document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#name");
  const box = document.querySelector(".box");

  //   input.addEventListener("keydown", (event) => {
  //     console.log("Key is pressed down");
  //   });

  //   input.addEventListener("keypress", (event) => {
  //     console.log("Key is pressed");
  //   });

  //   input.addEventListener("keyup", () => {
  //     console.log("Key is up after pressing");
  //   });

  //   box.addEventListener("mouseover", () => {
  //     console.log("Mouse is over the Box");
  //   });
  //   box.addEventListener("mouseout", () => {
  //     console.log("Mouse is out of the Box");
  //   });

  // Differnece betwenn clinet-x,y & page-x,y
  //   let isDragging = false;
  //   box.addEventListener("mousedown", () => {
  //     isDragging = true;
  //   });

  //   document.addEventListener("mousemove", (event) => {
  //     let x = event.clientX;
  //     let y = event.clientY;
  //     if (isDragging) {
  //       box.style.top = `${y}px`;
  //       box.style.left = `${x}px`;
  //     }
  //   });

  //   box.addEventListener("mouseup", () => {
  //     isDragging = false;
  //   });
  // });

  let isDragging = false;
  box.addEventListener("touchstart", () => {
    isDragging = true;
  });

  document.addEventListener("touchmove", (event) => {
    let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    if (isDragging) {
      box.style.top = `${y}px`;
      box.style.left = `${x}px`;
    }
  });

  box.addEventListener("touchend", () => {
    isDragging = false;
  });
});
