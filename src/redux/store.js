import { configureStore } from "@reduxjs/toolkit";
import movieAddEditReducer from "./slice/adminMovieAddEditSlice";
import moviesReducer from "./slice/adminMoviesManagementSlice";
import ticketsReducer from "./slice/adminTicketsManagementSlice";
import userAddEditReducer from "./slice/adminUserAddEditSlice";
import usersReducer from "./slice/adminUsersManagementSlice";
import loginReducer from "./slice/loginSlice";
import registerReducer from "./slice/registerSlice";
import searchMovieReducer from "./slice/searchMovieSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    movies: moviesReducer,
    tickets: ticketsReducer,
    userAddEdit: userAddEditReducer,
    movieAddEdit: movieAddEditReducer,
    register: registerReducer,
    login: loginReducer,
    searchMovie: searchMovieReducer,
  },
});

export default store;
