//Import redux library
const redux = require("redux");

const INITIAL_VALUE = { counter: 0 };
//created reducer for the store

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  }
  return newStore;
};

//created store using the reducer
const store = redux.createStore(reducer);

//create a subscriber function
//subscriber in a redux it can either used to read vlaues or to update the values
const subscriber = () => {
  // store retrun the current state to subscriber function
  const state = store.getState();
  console.log("Updated State", state);
};

//subscribe to the store
store.subscribe(subscriber);

//dispatch action to the store
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
