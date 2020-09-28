import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersApi from "../../api/usersApi";

export const postUser = createAsyncThunk("postUser", async (user) => {
  const currentPostUser = await usersApi.postUser(user);
  return currentPostUser;
});

export const getUser = createAsyncThunk("getUser", async (userId) => {
  const currentGetUser = await usersApi.getUser(userId);
  return currentGetUser;
});

export const putUser = createAsyncThunk("putUser", async ({ userId, user }) => {
  const currentPutUser = await usersApi.putUser(userId, user);
  return currentPutUser;
});

const adminUserAddEditSlice = createSlice({
  name: "adminUserAddEditSlice",
  initialState: {
    successError: "",
    loading: false,
    loadingGetUser: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    // post user
    [postUser.pending]: (state) => {
      state.loading = true;
    },

    [postUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postUser.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // put user
    [putUser.pending]: (state) => {
      state.loading = true;
    },

    [putUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [putUser.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // get user
    [getUser.pending]: (state) => {
      state.loadingGetUser = true;
    },

    [getUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loadingGetUser = false;
    },

    [getUser.fulfilled]: (state, action) => {
      state.loadingGetUser = false;
    },
  },
});

const { reducer: userAddEditReducer } = adminUserAddEditSlice;
export default userAddEditReducer;
