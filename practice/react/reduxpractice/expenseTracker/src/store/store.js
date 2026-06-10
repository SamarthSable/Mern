import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../slices/expenseslice.js";
export const store = configureStore({
  reducer: {
    tracker: expenseReducer,
  },
});
