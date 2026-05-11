export default function productReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "add": {
      return payload;
    }

    case "addToCart": {
      return [...state, payload];
    }

    case "removeCart": {
      return state.filter((p) => p.id !== payload);
    }
  }
}
