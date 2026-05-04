import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTod: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      return state.map(
        (task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task,
        {},
      );
    },
  },
});

export const { addTod, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
