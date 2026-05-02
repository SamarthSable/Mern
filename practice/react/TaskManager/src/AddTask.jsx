import React, { useState } from "react";

export default function AddTask({ onAddTodo }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") return;
    onAddTodo(input);
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
