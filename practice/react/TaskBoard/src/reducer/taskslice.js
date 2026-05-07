import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    complete: (state, action) => {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed, progress: false }
          : task,
      );
    },

    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    progress: (state, action) => {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, progress: !task.progress, completed: false }
          : task,
      );
    },
  },
});

export const { add, deleteTask, complete, progress } = todoSlice.actions;

export default todoSlice.reducer;
