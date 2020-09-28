import { createSlice } from "@reduxjs/toolkit";

const currentChoose = createSlice({
  name: "currentChoose",
  initialState: {
    idMovieTime: "",
    currentChooseSeat: [],
    currentPayment: "",

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

    timeSet: "",
    movieName: "",
    movieCinema: "",
    movieTime: "",
    movieImage: "",
    seat: [],
    payment: "",
    email: "",

    choosedSeat: "",
  },
  reducers: {
    getIdMovieTime: (state, action) => {
      state.idMovieTime = action.payload;
    },
    getCurrentChooseSeat: (state, action) => {
      const current = state.currentChooseSeat.indexOf(action.payload);
      if (current === -1) {
        state.currentChooseSeat.push(action.payload);
      } else {
        state.currentChooseSeat.splice(current, 1);
      }
      if (state.currentChooseSeat.length > state.ticket) {
        state.currentChooseSeat.splice(0, 1);
      }
      localStorage.setItem("seat", JSON.stringify(state.currentChooseSeat));
    },
    getCurrentPayment: (state, action) => {
      state.currentPayment = action.payload;
      localStorage.setItem("payment", state.currentPayment);
    },
    getChoosedSeat: (state, action) => {
      state.choosedSeat = action.payload;
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

    // timeSet
    getTimeSet: (state, action) => {
      const date = localStorage.getItem("timeSet");
      state.timeSet = date;
    },

    // movieName
    getMovieName: (state, action) => {
      const movieName = localStorage.getItem("movieName");
      state.movieName = movieName;
    },

    // movieCinema
    getMovieCinema: (state, action) => {
      const movieCinema = localStorage.getItem("movieCinema");
      state.movieCinema = movieCinema;
    },

    // movieTime
    getMovieTime: (state, action) => {
      const movieTime = localStorage.getItem("movieTime");
      state.movieTime = movieTime;
    },

    // movieImage
    getMovieImage: (state, action) => {
      const movieImage = localStorage.getItem("movieImage");
      state.movieImage = movieImage;
    },

    // ticket
    getTicket: (state, action) => {
      const ticket = localStorage.getItem("ticket");
      state.ticket = ticket;
    },

    // seat
    getSeat: (state, action) => {
      const seat = JSON.parse(localStorage.getItem("seat"));
      state.seat = seat;
    },

    // payment
    getPayment: (state, action) => {
      const payment = localStorage.getItem("payment");
      state.payment = payment;
    },

    // totalTicket
    getTotalTicket: (state, action) => {
      if (localStorage.getItem("totalTicket")) {
        const totalTicket = localStorage.getItem("totalTicket");
        state.totalTicket = parseInt(totalTicket);
      }
    },

    // totalCombo1
    getTotalCombo1: (state, action) => {
      if (localStorage.getItem("totalCombo1")) {
        const totalCombo1 = localStorage.getItem("totalCombo1");
        state.totalCombo1 = parseInt(totalCombo1);
      }
    },

    // totalCombo2
    getTotalCombo2: (state, action) => {
      if (localStorage.getItem("totalCombo1")) {
        const totalCombo2 = localStorage.getItem("totalCombo2");
        state.totalCombo2 = parseInt(totalCombo2);
      }
    },

    // email
    getEmail: (state, action) => {
      const email = localStorage.getItem("email");
      state.email = email;
    },
  },
});

const { reducer: currentChooseReducer, actions } = currentChoose;
export const {
  getIdMovieTime,
  getCurrentChooseSeat,
  getCurrentPayment,

  getCurrentTicket,
  getAddTicket,
  getRemoveTicket,
  getCurrentCombo1,
  getAddCombo1,
  getRemoveCombo1,
  getCurrentCombo2,
  getAddCombo2,
  getRemoveCombo2,

  getTicket,

  getTimeSet,
  getMovieCinema,
  getMovieImage,
  getMovieTime,
  getMovieName,
  getSeat,
  getPayment,
  getTotalTicket,
  getTotalCombo1,
  getTotalCombo2,
  getEmail,

  getChoosedSeat,
} = actions;
export default currentChooseReducer;
