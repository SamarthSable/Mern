import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productsSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
