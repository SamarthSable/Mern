// provider/taskProvider.jsx
import { createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/reducer";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [task, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  // Save to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <TaskContext.Provider value={{ task, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
