import { createSlice } from "@reduxjs/toolkit";

const i18nSlice = createSlice({
  name: "i18nSlice",
  initialState: {
    status: false,
  },
  reducers: {
    getChange: (state, action) => {
      state.status = action.payload;
    },
  },
});

const { reducer: i18nReducer, actions } = i18nSlice;
export const { getChange } = actions;
export default i18nReducer;
