import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducer/taskslice";
export const store = configureStore({
  reducer: {
    todo: taskReducer,
  },
});
