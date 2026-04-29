const add = document.querySelector("#add");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

add.addEventListener("click", (e) => {
  let listItem = document.createElement("li");
  let delBtn = document.createElement("button");
  listItem.textContent = input.value;
  delBtn.textContent = "Delete";
  delBtn.classList.add("deleteBtn");
  listItem.append(delBtn);
  list.append(listItem);
  const deleteButton = document.querySelector(".deleteBtn");

  // deleteButton.addEventListener("click", (e) => {
  //   console.log(e.target.closest("li"));
  // });
  list.addEventListener("click", (e) => {
    e.target.closest("li").remove();
  });
});
