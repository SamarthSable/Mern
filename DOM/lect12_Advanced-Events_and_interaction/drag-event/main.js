document.addEventListener("DOMContentLoaded", () => {
  let insideDropTarget = false;
  const target = document.querySelector("#target");
  const draggableElements = document.querySelectorAll("[draggable='true']");

  draggableElements.forEach((element) => {
    element.addEventListener("dragstart", (e) => {
      console.log("element has started dragging");
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });

  target.addEventListener("dragenter", (e) => {
    console.log("draggable element has entered");
    console.log(e);

    insideDropTarget = true;
    // if (insideDropTarget) {
    //     let newPara = document.createElement("p");
    //     newPara.textContent = e.target.textContent;
    //     target.append(newPara);
    //     e.target.remove();
    // }
  });

  target.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("draggable element is over the target");
  });

  target.addEventListener("drop", (e) => {
    e.preventDefault();
    const elementId = e.dataTransfer.getData("text/plain");
    console.log(elementId);
    const draggedElement = document.getElementById(elementId);
    console.log(draggedElement);
    target.append(draggedElement);
  });

  target.addEventListener("dragleave", (e) => {
    console.log("draggable element has left");
    console.log(e);
    insideDropTarget = false;
  });
  // draggableElements.addEventListener("dragend", (e) => {
  //   console.log("element has stopped dragging", e);
  // });
});

const fileInput = document.querySelector("#file-input");

fileInput.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.target.style.borderStyle = "dashed";
  console.log("FIles is over the input");
});

fileInput.addEventListener("dragleave", (e) => {
  e.target.style.borderStyle = "none";
});

fileInput.addEventListener("drop", (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  e.target.style.borderStyle = "none";
});
