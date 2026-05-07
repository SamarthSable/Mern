import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

export default function TodoList() {
  const { todo } = useContext(TodoContext);
  if (todo.length === 0) return "No todo Yet";
  return (
    <div>
      {todo.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        );
      })}
    </div>
  );
}
