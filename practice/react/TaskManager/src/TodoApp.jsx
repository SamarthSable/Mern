import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import TodoReducer from "./TodoReducer";

export default function TodoApp() {
  const [todo, dispatch] = useReducer(TodoReducer, []);

  function addTodo(newTodo) {
    dispatch({ type: "add", title: newTodo });
  }

  function deleteTodo(id) {
    dispatch({ type: "delete", id });
  }

  function toggleTodo(id) {
    dispatch({ type: "toggle", id });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App</h1>
      <AddTask onAddTodo={addTodo} />
      <TodoList todo={todo} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
}
