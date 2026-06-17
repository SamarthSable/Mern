const add = document.querySelector("#add");
const input = document.querySelector("#task");
const list = document.querySelector("#list");

add.addEventListener("click", () => {
  const text = input.value;
  list.innerHTML += `<li>${text}<button id="del" class="del">Delete</button><button>Edit</button></li>`;
  input.value = "";
  console.log("Add Clicked");
});

list.addEventListener("click", (e) => {
  //   console.log("clicked List");
  if (e.target.classList.contains("del")) {
    console.log("Del clicked");
  }
});
//   const del = document.querySelector("#del");

// });
