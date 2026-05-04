export default function listReducer(state, action) {
  const { type, payload } = action;
  const id = payload.id;
  switch (type) {
    case "add": {
      return [...state, payload];
    }

    case "delete": {
      return state.filter((task) => task.id !== id);
    }

    case "toggle":
      return state.map(
        (task) =>
          task.id === id ? { ...task, completed: !task.completed } : task,
        {},
      );
  }
}
