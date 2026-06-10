import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    del: (state, action) => {
      return state.filter((u) => u.id !== action.payload);
    },
  },
});

export const { add, del } = cartSlice.actions;

export default cartSlice.reducer;
