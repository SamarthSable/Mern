import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add } = todoslice.actions;
export default todoslice.reducer;
