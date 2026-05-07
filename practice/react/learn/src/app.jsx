import "./app.css";
import TodoProvider from "./context/TodoProvider";
import AddTod from "./pages/AddTod";
import TodoList from "./pages/TodoList";

export default function App() {
  return (
    <>
      <TodoProvider>
        <AddTod />
        <TodoList />
      </TodoProvider>
    </>
  );
}
