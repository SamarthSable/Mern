import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../reducer/todoSlice";

export default function TodoList() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  function handleToggle(id) {
    dispatch(toggleTodo(id));
  }
  return (
    <div>
      {todo.map((task) => (
        <div key={task.id}>
          <p
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </p>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <button
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
