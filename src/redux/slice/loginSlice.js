import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";

export const postUserLogin = createAsyncThunk("postUserLogin", async (user) => {
  const currentUser = await authApi.postUserLogin(user);
  return currentUser;
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    successError: "",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [postUserLogin.pending]: (state) => {
      state.loading = true;
    },

    [postUserLogin.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postUserLogin.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: loginReducer } = loginSlice;
export default loginReducer;
