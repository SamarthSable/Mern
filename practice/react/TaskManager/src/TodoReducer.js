export default function TodoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];

    case "delete":
      return state.filter((item) => item.id !== action.id);

    case "toggle":
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item,
      );

    default:
      return state;
  }
}
