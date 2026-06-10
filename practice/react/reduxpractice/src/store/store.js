import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoReducer.js";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
