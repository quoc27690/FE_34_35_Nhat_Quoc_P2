import { createSlice } from "@reduxjs/toolkit";

const adminMovieAddEditSlice = createSlice({
  name: "adminMovieAddEditSlice",
  initialState: {
    image: "",
    name: "",
    ratings: "",
    time: "",
    producer: "",
    type: "",
    actor: "",
    releaseDate: "",
  },
  reducers: {
    getAll: (state, action) => {
      state.image = action.payload.image;
      state.name = action.payload.name;
      state.ratings = action.payload.ratings;
      state.time = action.payload.time;
      state.producer = action.payload.producer;
      state.type = action.payload.type;
      state.actor = action.payload.actor;
      state.releaseDate = action.payload.releaseDate;
    },
    getImage: (state, action) => {
      state.image = action.payload;
    },
    getName: (state, action) => {
      state.name = action.payload;
    },
    getratings: (state, action) => {
      state.ratings = action.payload;
    },
    getTime: (state, action) => {
      state.time = action.payload;
    },
    getproducer: (state, action) => {
      state.producer = action.payload;
    },
    getType: (state, action) => {
      state.type = action.payload;
    },
    getActor: (state, action) => {
      state.actor = action.payload;
    },
    getReleaseDate: (state, action) => {
      state.releaseDate = action.payload;
    },
  },
});

const { reducer: movieAddEditReducer, actions } = adminMovieAddEditSlice;
export const {
  getAll,
  getImage,
  getName,
  getratings,
  getTime,
  getproducer,
  getType,
  getActor,
  getReleaseDate,
} = actions;
export default movieAddEditReducer;
