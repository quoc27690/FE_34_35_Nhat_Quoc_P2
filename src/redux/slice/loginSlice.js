import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    getAll: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

const { reducer: loginReducer, actions } = loginSlice;
export const { getEmail, getPassword, getAll } = actions;
export default loginReducer;
