import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketsApi from "../../api/ticketsApi";

export const getTickets = createAsyncThunk("users/getTickets", async () => {
  const currentTickets = await ticketsApi.getTickets();
  return currentTickets;
});

const adminTicketsManagementSlice = createSlice({
  name: "adminTicketsManagementSlice",
  initialState: {
    tickets: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getTickets.pending]: (state) => {
      state.loading = true;
    },

    [getTickets.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getTickets.fulfilled]: (state, action) => {
      state.tickets = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: ticketsReducer, actions } = adminTicketsManagementSlice;
export const { getUser } = actions;
export default ticketsReducer;
