// pages/Stats.jsx
import { useContext } from "react";
import { TaskContext } from "../provider/taskProvider";

export default function Stats() {
  const { task } = useContext(TaskContext);

  const total = task.length;
  const completed = task.filter((t) => t.completed).length;
  const progress = task.filter((t) => t.progress).length;
  const pending = total - completed - progress;

  return (
    <div>
      <h1>Stats</h1>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
      <p>In Progress: {progress}</p>
      <p>Pending: {pending}</p>
    </div>
  );
}
