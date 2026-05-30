import React, { useContext, useState } from "react";
import { TodoContext } from "../provider/TodoProvider";

export default function TodoList() {
  const { setTodo, todo } = useContext(TodoContext);
  const [input, setInput] = useState("");
  function handleAddTodo() {
    setTodo([
      ...todo,
      {
        id: Date.now(),
        title: input,
        completed: false,
      },
    ]);

    setInput("");
  }
  function delTodo(id) {
    setTodo(todo.filter((t) => t.id !== id));
  }
  function toggleTodo(id) {
    setTodo(
      todo.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border"
      />
      <button onClick={handleAddTodo}>Add Todo </button>
      <div>
        <h1>TOdo List</h1>
        <div>
          {todo.map((t) => (
            <div key={t.id}>
              <p
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                }}
              >
                {t.title}
              </p>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTodo(t.id)}
              />
              <button onClick={() => delTodo(t.id)}>Remove Todo</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
