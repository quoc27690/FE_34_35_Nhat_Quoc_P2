import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersApi from "../../api/usersApi";

export const getMember = createAsyncThunk("getMember", async (userId) => {
  const currentMember = await usersApi.getUser(userId);
  return currentMember;
});

const memberSlice = createSlice({
  name: "memberSlice",
  initialState: {
    loading: false,
    error: "",
    loadingGetMember: false,
    errorGetMember: "",
  },
  reducers: {},
  extraReducers: {
    [getMember.pending]: (state) => {
      state.loading = true;
    },

    [getMember.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMember.fulfilled]: (state, action) => {
      state.loading = false;
    },
  },
});

const { reducer: memberReducer } = memberSlice;
export default memberReducer;
