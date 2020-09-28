import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketsApi from "../../api/ticketsApi";

export const getTickets = createAsyncThunk("tickets/getTickets", async () => {
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
  reducers: {
    removeTicket: (state, action) => {
      const removeTicketId = action.payload;
      state.tickets = state.tickets.filter((e) => e.id !== removeTicketId);
    },
  },
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
export const { removeTicket } = actions;
export default ticketsReducer;
