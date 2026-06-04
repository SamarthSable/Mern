import { createContext, useReducer, useState } from "react";
import reducer from "./reducer";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todo, dispatch] = useReducer(reducer, []);
  return <TodoContext value={{ todo, dispatch }}>{children}</TodoContext>;
}
