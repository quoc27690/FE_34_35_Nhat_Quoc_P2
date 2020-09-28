import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import seatsApi from "../../api/seatsApi";

export const getSeats = createAsyncThunk("getSeats", async () => {
  const currentSeats = await seatsApi.getSeats();
  return currentSeats;
});

const seatsSlice = createSlice({
  name: "seatsSlice",
  initialState: {
    seats: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getSeats.pending]: (state) => {
      state.loading = true;
    },

    [getSeats.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getSeats.fulfilled]: (state, action) => {
      state.seats = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: seatsReducer } = seatsSlice;
export default seatsReducer;
