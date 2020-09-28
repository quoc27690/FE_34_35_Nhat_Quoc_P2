import { configureStore } from "@reduxjs/toolkit";
import movieAddEditReducer from "./slice/adminMovieAddEditSlice";
import ticketsReducer from "./slice/adminTicketsManagementSlice";
import userAddEditReducer from "./slice/adminUserAddEditSlice";
import usersReducer from "./slice/adminUsersManagementSlice";
import blogReducer from "./slice/blogSlice";
import cinemasReducer from "./slice/cinemasSlice";
import comboReducer from "./slice/comboSlice";
import currentChooseReducer from "./slice/currentChoose";
import i18nReducer from "./slice/i18nSlice";
import loginReducer from "./slice/loginSlice";
import memberReducer from "./slice/memberSlice";
import moviesReducer from "./slice/moviesSlice";
import newPromotionReducer from "./slice/newPromotionSlice";
import registerReducer from "./slice/registerSlice";
import searchMovieReducer from "./slice/searchMovieSlice";
import seatsReducer from "./slice/seatsSlice";
import slidesReducer from "./slice/slidesSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    tickets: ticketsReducer,
    userAddEdit: userAddEditReducer,
    movieAddEdit: movieAddEditReducer,
    register: registerReducer,
    login: loginReducer,
    searchMovie: searchMovieReducer,
    promotion: newPromotionReducer,
    blogs: blogReducer,
    slides: slidesReducer,
    movies: moviesReducer,
    cinemas: cinemasReducer,
    combo: comboReducer,
    currentChoose: currentChooseReducer,
    seats: seatsReducer,
    member: memberReducer,
    i18n: i18nReducer,
  },
});
export default store;
