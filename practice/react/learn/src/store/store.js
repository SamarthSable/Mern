import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../reducer/todoslice";
export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
