const section = document.createElement("section");
const para = document.createElement("p");

para.id = "title";
para.textContent = "Some Random text apper here";

const para2 = document.createElement("p");

para2.id = "title2";
para2.textContent = "another paragraph";

const link = document.createElement("a");

link.href = "https://google.com";
link.textContent = "Visit goole";

section.append(para2, link);

section.appendChild(para);

document.body.appendChild(section);

const button = document.createElement("button");
button.id = "remove-button";
button.textContent = "Remove first child";
button.addEventListener("click", function () {
  if (section.firstChild && section.firstChild.id !== button.id) {
    section.firstChild.remove();
  } else {
    alert("All Elements Removed");
  }
});

section.append(button);

const newpara = document.createElement("P");
newpara.textContent = "This will replace all exixsting Children";

const newLink = document.createElement("a");
newLink.textContent = "new link";
newLink.href = "https://mail.google.com";

section.replaceChildren(newpara, newLink);
