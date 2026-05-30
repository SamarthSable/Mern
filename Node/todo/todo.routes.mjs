import express from "express";
import { todo } from "./db.mjs";
const router = express.Router();

router
  .get("/", (req, res) => {
    res.send(todo);
  })
  .post("/", (req, res) => {
    const { title } = req.body;
    const created = createTodo(title);
    res.status(201).send(created);
  })
  .patch("/:id", (req, res) => {
    const id = req.params.id;
    const update = req.body;
    const updatedTodo = updateTodo(id, update);
    if (!updatedTodo) {
      res.status(404).send("Todo Not Found");
    }

    res.status(200).json(updatedTodo);
  });

function createTodo(title) {
  const newTodo = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    date: new Date().toISOString(),
  };

  todo.push(newTodo);
  return newTodo;
}

function updateTodo(id, update) {
  const index = todo.findIndex((t) => t.id === id);
  if (index === -1) {
    return null;
  }
  todo[index] = {
    ...todo[index],
    ...update,
  };

  return todo[index];
}
export default router;
