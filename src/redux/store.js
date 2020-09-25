import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/adminMoviesManagementSlice";
import ticketsReducer from "./slice/adminTicketsManagementSlice";
import usersReducer from "./slice/adminUsersManagementSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    movies: moviesReducer,
    tickets: ticketsReducer,
  },
});

export default store;
