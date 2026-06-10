import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/reducer.js";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
