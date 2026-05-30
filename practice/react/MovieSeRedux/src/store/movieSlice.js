import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: [],
  favMovies: [],
  loading: false,
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    add: (state, action) => {
      state.movies = action.payload;
    },
    addToMyFav: (state, action) => {
      state.favMovies.push(action.payload);
    },
    rmFromMyFav: (state, action) => {
      state.favMovies = state.favMovies.filter(
        (m) => m.show.id !== action.payload,
      );
    },
  },
});

export const { add, addToMyFav, rmFromMyFav } = movieSlice.actions;

export default movieSlice.reducer;
