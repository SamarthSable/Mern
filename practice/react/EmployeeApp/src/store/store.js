import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeslice";
export const Store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
