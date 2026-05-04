import React, { useState, useEffect, useContext } from "react";
import { ListProvider } from "../App";
import { useDispatch } from "react-redux";
import { addTod } from "../reducer/todoSlice";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  function handleChange(e) {
    setTitle(e.target.value);
  }
  function handleAdd() {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    dispatch(addTod(newTodo));
    setTitle("");
  }

  return (
    <div>
      <input value={title} onChange={handleChange} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}
