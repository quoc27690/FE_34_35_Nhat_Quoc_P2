import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cinemasApi from "../../api/cinemasApi";

export const getCinemas = createAsyncThunk("getCinemas", async () => {
  const currentCinemas = await cinemasApi.getCinemas();
  return currentCinemas;
});

const cinemasSlice = createSlice({
  name: "cinemasSlice",
  initialState: {
    cinemas: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getCinemas.pending]: (state) => {
      state.loading = true;
    },

    [getCinemas.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getCinemas.fulfilled]: (state, action) => {
      state.cinemas = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: cinemasReducer } = cinemasSlice;
export default cinemasReducer;
