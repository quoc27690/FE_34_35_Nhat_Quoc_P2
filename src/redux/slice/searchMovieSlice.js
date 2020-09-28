import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from "../../api/moviesApi";

export const getMovieSearch = createAsyncThunk("getSearch", async (search) => {
  const currentMovies = await moviesApi.getMovieSearch(search);
  return currentMovies;
});

const searchMovieSlice = createSlice({
  name: "searchMovieSlice",
  initialState: {
    listMovie: "",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getMovieSearch.pending]: (state) => {
      state.loading = true;
    },

    [getMovieSearch.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMovieSearch.fulfilled]: (state, action) => {
      state.listMovie = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: searchMovieReducer } = searchMovieSlice;
export default searchMovieReducer;
