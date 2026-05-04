import { createContext, useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import listReducer from "./reducer/listReducer";
export const ListProvider = createContext();
function App() {
  const [todo, dispatch] = useReducer(listReducer, []);
  return (
    <>
      <ListProvider value={{ todo, dispatch }}>
        <AddTodo />
        <TodoList />
      </ListProvider>
    </>
  );
}

export default App;
