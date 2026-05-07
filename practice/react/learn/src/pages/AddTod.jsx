import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

export default function AddTod() {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(TodoContext);
  function handleAdd(input) {
    dispatch({ type: "add", payload: input });
    setInput("");
  }
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleAdd(input)}>Add Todo</button>
    </div>
  );
}
