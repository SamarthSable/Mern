const addbtn = document.querySelector("#add");
const title = document.querySelector("#title");
const note = document.querySelector("#note");
const notelist = document.querySelector("#notelist");
const search = document.querySelector("#search");

// Load notes on start
let notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();

// Add Note
addbtn.addEventListener("click", () => {
  if (title.value.trim() === "" || note.value.trim() === "") {
    alert("Please enter title and note");
    return;
  }

  const newNote = {
    id: Date.now(),
    title: title.value,
    note: note.value,
    pinned: false,
  };

  notes.push(newNote);
  saveNotes();
  renderNotes();

  title.value = "";
  note.value = "";
});

// Render Notes
function renderNotes() {
  notelist.innerHTML = "";

  if (notes.length === 0) {
    notelist.innerHTML = "<p>No notes available</p>";
    return;
  }

  // pinned first
  const sorted = [...notes].sort((a, b) => b.pinned - a.pinned);

  sorted.forEach((n) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="note-card ${n.pinned ? "pinned" : ""}">
        <h3>${n.title}</h3>
        <p>${n.note}</p>
        <button class="pin" data-id="${n.id}">📌</button>
        <button class="del" data-id="${n.id}">Delete</button>
      </div>
    `;

    notelist.append(li);
  });
}

// Delete & Pin (Event Delegation)
notelist.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("del")) {
    notes = notes.filter((n) => n.id !== id);
    saveNotes();
    renderNotes();
  }

  if (e.target.classList.contains("pin")) {
    notes = notes.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n));
    saveNotes();
    renderNotes();
  }
});

// Search
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const items = document.querySelectorAll("#notelist li");

  items.forEach((li) => {
    const text = li.innerText.toLowerCase();
    li.style.display = text.includes(value) ? "block" : "none";
  });
});

// Save to LocalStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}
