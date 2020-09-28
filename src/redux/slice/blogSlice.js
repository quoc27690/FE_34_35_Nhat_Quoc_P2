import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogApi from "../../api/blogApi";

export const getBlog = createAsyncThunk("getBlog", async () => {
  const currentBlog = await blogApi.getBlog();
  return currentBlog;
});

const blogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    blogs: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getBlog.pending]: (state) => {
      state.loading = true;
    },

    [getBlog.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getBlog.fulfilled]: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: blogReducer } = blogSlice;
export default blogReducer;
