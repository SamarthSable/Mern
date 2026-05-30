import "./App.css";
import TodoList from "./pages/TodoList";
import TodoProvider from "./provider/TodoProvider";

function App() {
  return (
    <>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
