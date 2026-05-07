import React, { createContext, useReducer } from "react";
import todoReducer from "../reducer/todoreducer";
export const TodoContext = createContext();
export default function TodoProvider({ children }) {
  const initialState = [];
  const [todo, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
