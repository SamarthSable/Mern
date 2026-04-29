import React, { useState } from "react";

export default function Task({ sendData }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>this is task component</h1>
      <input
        type="text"
        name="task"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          sendData(input);
          setInput("");
        }}
      >
        Add
      </button>
    </div>
  );
}
