export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "add": {
      return [...state, { id: Date.now(), title: payload }];
    }
    case "del": {
      return state.filter((t) => t.id !== payload);
    }
  }
}
