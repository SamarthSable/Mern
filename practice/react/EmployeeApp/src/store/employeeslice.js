import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const employeeslice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    add: (state, action) => {
      return action.payload;
    },
  },
});

export const { add } = employeeslice.actions;

export default employeeslice.reducer;
