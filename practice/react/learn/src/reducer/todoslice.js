import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return state.push(action.payload);
    },
  },
});

export const { add } = todoSlice.actions;

export default todoSlice.reducer;
