// pages/Board.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
// import { TaskContext } from "../provider/taskProvider";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteTask, complete, progress } from "../reducer/taskslice";

export default function Board() {
  // const { task, dispatch } = useContext(TaskContext);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const task = useSelector((state) => state.todo);
  function handleAdd() {
    if (!input.trim()) return alert("Enter Task");

    const newTask = {
      id: crypto.randomUUID(),
      title: input,
      progress: false,
      completed: false,
    };

    dispatch(add(newTask));
    setInput("");
  }

  return (
    <div>
      <Link to="/stats">
        <button>Stats</button>
      </Link>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <div className="container">
        {/* TODO */}
        <div>
          <h2>Todo</h2>
          {task
            .filter((t) => !t.completed && !t.progress)
            .map((t) => (
              <div key={t.id}>
                <p>{t.title}</p>
                <button onClick={() => dispatch(progress(t.id))}>
                  Move to Progress
                </button>
                <button onClick={() => dispatch(complete(t.id))}>
                  Complete
                </button>
                <button onClick={() => dispatch(deleteTask(t.id))}>
                  Delete
                </button>
              </div>
            ))}
        </div>

        {/* IN PROGRESS */}
        <div>
          <h2>In Progress</h2>
          {task
            .filter((t) => t.progress)
            .map((t) => (
              <div key={t.id}>
                <p>{t.title}</p>
                <button onClick={() => dispatch(complete(t.id))}>
                  Complete
                </button>
                <button onClick={() => dispatch(deleteTask(t.id))}>
                  Delete
                </button>
              </div>
            ))}
        </div>

        {/* COMPLETED */}
        <div>
          <h2>Completed</h2>
          {task
            .filter((t) => t.completed)
            .map((t) => (
              <div key={t.id}>
                <p>{t.title}</p>
                <button onClick={() => dispatch(deleteTask(t.id))}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
