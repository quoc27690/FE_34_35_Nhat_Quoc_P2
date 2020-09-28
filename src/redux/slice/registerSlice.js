import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";

export const postUserRegister = createAsyncThunk(
  "postUserRegister",
  async (user) => {
    const currentUser = await authApi.postUserRegister(user);
    return currentUser;
  }
);

const registerSlice = createSlice({
  name: "registerSlice",
  initialState: {
    successError: "",
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [postUserRegister.pending]: (state) => {
      state.loading = true;
    },

    [postUserRegister.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postUserRegister.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: registerReducer } = registerSlice;
export default registerReducer;
