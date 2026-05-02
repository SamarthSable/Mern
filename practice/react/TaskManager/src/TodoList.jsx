import React from "react";

export default function TodoList({ todo, onDelete, onToggle }) {
  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} style={{ margin: "10px" }}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggle(item.id)}
          />

          <span
            style={{
              margin: "0 10px",
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.title}
          </span>

          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
