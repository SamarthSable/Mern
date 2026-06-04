import React, { useContext, useState } from "react";
import { TodoContext } from "../provider/TodoProvider";

export default function Todo() {
  const { todo, dispatch } = useContext(TodoContext);
  const [value, setValue] = useState("");

  if (todo.length === 0)
    return (
      <>
        <p> "No Todo Yet....";</p>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button
          onClick={() => {
            dispatch({ type: "add", payload: value });
            setValue("");
          }}
        >
          Add ToDo
        </button>
      </>
    );

  return (
    <div>
      <div>
        {todo.map((t) => (
          <div key={t.id}>
            <p>{t.title}</p>
            <button onClick={() => dispatch({ type: "del", payload: t.id })}>
              delete
            </button>
          </div>
        ))}
      </div>
      <div>
        {" "}
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button
          onClick={() => {
            dispatch({ type: "add", payload: value });
            setValue("");
          }}
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
}
