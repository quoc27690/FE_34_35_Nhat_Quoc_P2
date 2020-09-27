import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from "../../api/moviesApi";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const currentMovies = await moviesApi.getMovies();
  return currentMovies;
});

const adminMoviesManagementSlice = createSlice({
  name: "adminMoviesManagementSlice",
  initialState: {
    movies: [],
    loading: false,
    error: "",
  },
  reducers: {
    addMovie: (state, action) => {
      const newMovie = action.payload;
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      const removeMoveId = action.payload;
      state.movies = state.movies.filter((e) => e.id !== removeMoveId);
    },
    updateMovie: (state, action) => {
      const newMovie = action.payload;
      const newMovieIndex = state.movies.findIndex((e) => e.id === newMovie.id);
      if (newMovieIndex >= 0) {
        state.movies[newMovieIndex] = newMovie;
      }
    },
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
    },

    [getMovies.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: moviesReducer, actions } = adminMoviesManagementSlice;
export const { addMovie, removeMovie, updateMovie } = actions;
export default moviesReducer;
