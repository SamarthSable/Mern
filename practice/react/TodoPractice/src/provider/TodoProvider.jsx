import React, { createContext, useState } from "react";
export const TodoContext = createContext();
export default function TodoProvider({ children }) {
  const [todo, setTodo] = useState([]);
  return <TodoContext value={{ todo, setTodo }}>{children}</TodoContext>;
}
