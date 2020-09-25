import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersApi from "../../api/usersApi";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const currentUsers = await usersApi.getUsers();
  return currentUsers;
});

const adminUsersManagementSlice = createSlice({
  name: "adminUsersManagementSlice",
  initialState: {
    users: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },

    [getUsers.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: usersReducer, actions } = adminUsersManagementSlice;
export const { getUser } = actions;
export default usersReducer;
