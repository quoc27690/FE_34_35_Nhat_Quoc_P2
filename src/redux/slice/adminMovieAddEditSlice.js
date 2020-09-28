import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from "../../api/moviesApi";

export const postMovie = createAsyncThunk("postMovie", async (movie) => {
  const currentPostMovie = await moviesApi.postMovie(movie);
  return currentPostMovie;
});

export const getMovieDetail = createAsyncThunk(
  "getMovieDetail",
  async (movieId) => {
    const currentGetMovieDetail = await moviesApi.getMovieDetail(movieId);
    return currentGetMovieDetail;
  }
);

export const putMovie = createAsyncThunk(
  "putMovie",
  async ({ movieId, movie }) => {
    const currentPutMovie = await moviesApi.putMovie(movieId, movie);
    return currentPutMovie;
  }
);

const adminMovieAddEditSlice = createSlice({
  name: "adminMovieAddEditSlice",
  initialState: {
    successError: "",
    loading: false,
    loadingGetMovie: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    // post movie
    [postMovie.pending]: (state) => {
      state.loading = true;
    },

    [postMovie.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postMovie.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // put movie
    [putMovie.pending]: (state) => {
      state.loading = true;
    },

    [putMovie.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [putMovie.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // get movie
    [getMovieDetail.pending]: (state) => {
      state.loadingGetUser = true;
    },

    [getMovieDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loadingGetUser = false;
    },

    [getMovieDetail.fulfilled]: (state, action) => {
      state.loadingGetUser = false;
    },
  },
});

const { reducer: movieAddEditReducer } = adminMovieAddEditSlice;
export default movieAddEditReducer;
