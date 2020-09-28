import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import comboApi from "../../api/comboApi";

export const getCombo = createAsyncThunk("getCombo", async () => {
  const currentCombo = await comboApi.getCombo();
  return currentCombo;
});

const comboSlice = createSlice({
  name: "comboSlice",
  initialState: {
    combo: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getCombo.pending]: (state) => {
      state.loading = true;
    },

    [getCombo.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getCombo.fulfilled]: (state, action) => {
      state.combo = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: comboReducer } = comboSlice;
export default comboReducer;
