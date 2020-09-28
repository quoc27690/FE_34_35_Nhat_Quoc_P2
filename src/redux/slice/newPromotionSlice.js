import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newPromotionApi from "../../api/newPromotionApi";

export const getNewPromotion = createAsyncThunk("getNewPromotion", async () => {
  const currentNewPromotion = await newPromotionApi.getNewPromotion();
  return currentNewPromotion;
});

const newPromotionSlice = createSlice({
  name: "newPromotionSlice",
  initialState: {
    promotion: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getNewPromotion.pending]: (state) => {
      state.loading = true;
    },

    [getNewPromotion.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getNewPromotion.fulfilled]: (state, action) => {
      state.promotion = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: newPromotionReducer } = newPromotionSlice;
export default newPromotionReducer;
