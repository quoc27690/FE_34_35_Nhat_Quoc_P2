import { createSlice } from "@reduxjs/toolkit";

const currentChoose = createSlice({
  name: "currentChoose",
  initialState: {
    idCurrentMovieTime: "",
    idCurrentChooseSeat: [],
    currentTimeSet: "",
    currentMovieName: "",
    currentMovieCinema: "",
    currentMovieTime: "",
    currentMovieImage: "",
    ticketPrice: 45000,
    combo1Price: 77000,
    combo2Price: 99000,
    currentTicket: 0,
    currentCombo1: 0,
    currentCombo2: 0,
    totalTicket: 0,
    totalCombo1: 0,
    totalCombo2: 0,
    ticket: 0,
  },
  reducers: {
    getIdCurrentMovieTime: (state, action) => {
      state.idCurrentMovieTime = action.payload;
    },
    getIdCurrentChooseSeat: (state, action) => {
      const current = state.idCurrentChooseSeat.indexOf(action.payload);
      if (current === -1) {
        state.idCurrentChooseSeat.push(action.payload);
      } else {
        state.idCurrentChooseSeat.splice(current, 1);
      }
      if (state.idCurrentChooseSeat.length > state.ticket) {
        state.idCurrentChooseSeat.splice(0, 1);
      }
    },

    // Ticket
    getCurrentTicket: (state, action) => {
      if (action.payload <= 0) {
        state.currentTicket = 0;
      } else {
        state.currentTicket = action.payload;
      }
      state.totalTicket = state.ticketPrice * state.currentTicket;
      localStorage.setItem("ticket", state.currentTicket);
      localStorage.setItem("totalTicket", state.totalTicket);
    },
    getAddTicket: (state, action) => {
      state.currentTicket = parseInt(state.currentTicket) + 1;
      state.totalTicket = state.ticketPrice * state.currentTicket;
      localStorage.setItem("ticket", state.currentTicket);
      localStorage.setItem("totalTicket", state.totalTicket);
    },
    getRemoveTicket: (state, action) => {
      if (state.currentTicket <= 0) {
        state.currentTicket = 0;
      } else {
        state.currentTicket = parseInt(state.currentTicket) - 1;
      }
      state.totalTicket = state.ticketPrice * state.currentTicket;
      localStorage.setItem("ticket", state.currentTicket);
      localStorage.setItem("totalTicket", state.totalTicket);
    },

    // Combo 1
    getCurrentCombo1: (state, action) => {
      if (action.payload <= 0) {
        state.currentCombo1 = 0;
      } else {
        state.currentCombo1 = action.payload;
      }
      state.totalCombo1 = state.combo1Price * state.currentCombo1;
      localStorage.setItem("totalCombo1", state.totalCombo1);
    },
    getAddCombo1: (state, action) => {
      state.currentCombo1 = parseInt(state.currentCombo1) + 1;
      state.totalCombo1 = state.combo1Price * state.currentCombo1;
      localStorage.setItem("totalCombo1", state.totalCombo1);
    },
    getRemoveCombo1: (state, action) => {
      if (state.currentCombo1 <= 0) {
        state.currentCombo1 = 0;
      } else {
        state.currentCombo1 = parseInt(state.currentCombo1) - 1;
      }
      state.totalCombo1 = state.combo1Price * state.currentCombo1;
      localStorage.setItem("totalCombo1", state.totalCombo1);
    },

    // Combo 2
    getCurrentCombo2: (state, action) => {
      if (action.payload <= 0) {
        state.currentCombo2 = 0;
      } else {
        state.currentCombo2 = action.payload;
      }
      state.totalCombo2 = state.combo2Price * state.currentCombo2;
      localStorage.setItem("totalCombo2", state.totalCombo2);
    },
    getAddCombo2: (state, action) => {
      state.currentCombo2 = parseInt(state.currentCombo2) + 1;
      state.totalCombo2 = state.combo2Price * state.currentCombo2;
      localStorage.setItem("totalCombo2", state.totalCombo2);
    },
    getRemoveCombo2: (state, action) => {
      if (state.currentCombo2 <= 0) {
        state.currentCombo2 = 0;
      } else {
        state.currentCombo2 = parseInt(state.currentCombo2) - 1;
      }
      state.totalCombo2 = state.combo2Price * state.currentCombo2;
      localStorage.setItem("totalCombo2", state.totalCombo2);
    },

    // CurrentTimeSet
    getCurrentTimeSet: (state, action) => {
      const date = localStorage.getItem("currentTimeSet");
      state.currentTimeSet = date;
    },

    // CurrentMovieName
    getCurrentMovieName: (state, action) => {
      const movieName = localStorage.getItem("currentMovieName");
      state.currentMovieName = movieName;
    },

    // CurrentMovieCinema
    getCurrentMovieCinema: (state, action) => {
      const movieCinema = localStorage.getItem("currentMovieCinema");
      state.currentMovieCinema = movieCinema;
    },

    // CurrentMovieTime
    getCurrentMovieTime: (state, action) => {
      const movieTime = localStorage.getItem("currentMovieTime");
      state.currentMovieTime = movieTime;
    },

    // CurrentMovieImage
    getCurrentMovieImage: (state, action) => {
      const movieImage = localStorage.getItem("currentMovieImage");
      state.currentMovieImage = movieImage;
    },

    // Ticket
    getTicket: (state, action) => {
      const ticket = localStorage.getItem("ticket");
      state.ticket = ticket;
    },
  },
});

const { reducer: currentChooseReducer, actions } = currentChoose;
export const {
  getIdCurrentMovieTime,
  getIdCurrentChooseSeat,
  getCurrentTicket,
  getAddTicket,
  getRemoveTicket,
  getCurrentCombo1,
  getAddCombo1,
  getRemoveCombo1,
  getCurrentCombo2,
  getAddCombo2,
  getRemoveCombo2,
  getCurrentTimeSet,
  getCurrentMovieName,
  getCurrentMovieCinema,
  getCurrentMovieTime,
  getCurrentMovieImage,
  getTicket,
} = actions;
export default currentChooseReducer;
