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
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
    },

    removeUser: (state, action) => {
      const removeUserId = action.payload;
      state.users = state.users.filter((e) => e.id !== removeUserId);
    },

    updateUser: (state, action) => {
      const newUser = action.payload;
      const newUserIndex = state.users.findIndex((e) => e.id === newUser.id);
      if (newUserIndex >= 0) {
        state.users[newUserIndex] = newUser;
      }
    },
  },
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
export const { addUser, removeUser, updateUser } = actions;
export default usersReducer;
