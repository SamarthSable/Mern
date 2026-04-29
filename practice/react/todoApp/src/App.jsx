import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function handleAdd() {
    setTodo([...todo, { id: Date.now(), name: task }]);
    setTask("");
  }

  function handleDelete(id) {
    setTodo(todo.filter((item) => item.id !== id));
  }
  return (
    <>
      <h1 className="text-center">My Todo App</h1>
      <div className="container">
        <input
          type="text"
          // className="form-control w-25 mx-auto"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        ></input>
        <ul className="list-group w-25 mx-auto ">
          {todo.map((item) => {
            return (
              <li
                key={item.id}
                className="d-flex justify-content-between form-control"
              >
                <p>{item.name}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn btn-primary mt-3" onClick={handleAdd}>
          Add Todo
        </button>
      </div>
    </>
  );
}

export default App;
