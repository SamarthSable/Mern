export default function todoReducer(state, action) {
  const { type } = action;
  switch (type) {
    case "add": {
      return [...state, { id: Date.now(), title: action.payload }];
    }
  }
}
