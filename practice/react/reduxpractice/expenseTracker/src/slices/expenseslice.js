import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  income: [],
};
const expenseSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    add: (state, action) => {
      state.income.push(action.payload);
    },
  },
});

export const { add } = expenseSlice.actions;
export default expenseSlice.reducer;
