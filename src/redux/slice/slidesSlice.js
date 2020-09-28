import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import slidesApi from "../../api/slidesApi";

export const getSlides = createAsyncThunk("getSlides", async () => {
  const currentSlides = await slidesApi.getSlides();
  return currentSlides;
});

const slidesSlice = createSlice({
  name: "slidesSlice",
  initialState: {
    slides: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getSlides.pending]: (state) => {
      state.loading = true;
    },

    [getSlides.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getSlides.fulfilled]: (state, action) => {
      state.slides = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: slidesReducer } = slidesSlice;
export default slidesReducer;
