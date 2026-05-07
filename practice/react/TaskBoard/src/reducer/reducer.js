// reducer/reducer.js
export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "add":
      return [...state, payload];

    case "delete":
      return state.filter((task) => task.id !== payload);

    case "complete":
      return state.map((task) =>
        task.id === payload
          ? { ...task, completed: !task.completed, progress: false }
          : task,
      );

    case "progress":
      return state.map((task) =>
        task.id === payload
          ? { ...task, progress: !task.progress, completed: false }
          : task,
      );

    default:
      return state;
  }
}
