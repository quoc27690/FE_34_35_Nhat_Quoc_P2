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
  reducers: {},
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
export const { getUser } = actions;
export default moviesReducer;
