import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "searchMovieSlice",
  initialState: {
    searchMovie: "",
    listMovie: "",
  },
  reducers: {
    getSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
    getListMovie: (state, action) => {
      state.listMovie = action.payload;
    },
  },
});

const { reducer: searchMovieReducer, actions } = searchMovieSlice;
export const { getSearchMovie, getListMovie } = actions;
export default searchMovieReducer;
