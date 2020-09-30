import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "registerSlice",
  initialState: {
    name: "",
    email: "",
    password: "",
    phone: "",
    region: "",
    birthday: "",
    gender: "",
  },
  reducers: {
    getAll: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.phone = action.payload.phone;
      state.region = action.payload.region;
      state.birthday = action.payload.birthday;
      state.gender = action.payload.gender;
    },
    getName: (state, action) => {
      state.name = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getPassword: (state, action) => {
      state.password = action.payload;
    },
    getPhone: (state, action) => {
      state.phone = action.payload;
    },
    getRegion: (state, action) => {
      state.region = action.payload;
    },
    getBirthday: (state, action) => {
      state.birthday = action.payload;
    },
    getGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

const { reducer: registerReducer, actions } = registerSlice;
export const {
  getAll,
  getName,
  getEmail,
  getPassword,
  getPhone,
  getRegion,
  getBirthday,
  getGender,
} = actions;
export default registerReducer;
