import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../reducers/todoReducer";

export default function Todo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  function handleAdd(title) {
    const newTodo = {
      title,
    };
    dispatch(add(newTodo));
    setTitle("");
  }
  if (todo.length === 0)
    return (
      <>
        <p>"No Todo Yet...."</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => handleAdd(title)}>Add Todo</button>
      </>
    );
  return (
    <div>
      {todo.map((t) => (
        <p>{t.title}</p>
      ))}
    </div>
  );
}
