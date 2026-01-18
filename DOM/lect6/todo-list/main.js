const add = document.querySelector("#addbtn");
let count = 0;
add.addEventListener("click", function () {
  count++;
  const todo = document.querySelector("#input");
  const listfunction = document.querySelector(".listfun");

  const check = document.createElement("input");
  check.type = "checkbox";

  const para = document.createElement("p");
  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.className = "btn";
  btn.id = "del";

  const div = document.createElement("div");
  div.className = "added-list";
  div.id = count;
  //delet
  btn.addEventListener("click", function (event) {
    listfunction.remove(document.querySelector(`#{event}`));
  });

  //append
  para.textContent = todo.value;
  div.append(check, para, btn);
  listfunction.append(div);
  todo.value = "";
});
