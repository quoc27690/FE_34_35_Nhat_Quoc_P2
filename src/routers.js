import React from "react";
import AdminMovieAddEdit from "./components/admin/AdminMovieAddEdit";
import AdminUserAddEdit from "./components/admin/AdminUserAddEdit";
import AdminMoviesManagement from "./components/pages/AdminMoviesManagement";
import AdminRevenueManagement from "./components/pages/AdminRevenueManagement";
import AdminTicketsManagement from "./components/pages/AdminTicketsManagement";
import AdminUsersManagement from "./components/pages/AdminUsersManagement";
import ChooseSeats from "./components/pages/ChooseSeats";
import ChooseTickets from "./components/pages/ChooseTickets";
import Error404 from "./components/pages/Error404";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Member from "./components/pages/Member";
import MovieDetail from "./components/pages/MovieDetail";
import MovieList from "./components/pages/MovieList";
import Pays from "./components/pages/Pays";
import Register from "./components/pages/Register";

const routers = [
  {
    path: "/admin/moviesManagement",
    exact: true,
    main: () => <AdminMoviesManagement />,
  },
  {
    path: "/admin/moviesManagement/edit/:movieId",
    exact: true,
    main: () => <AdminMovieAddEdit />,
  },
  {
    path: "/admin/moviesManagement/add",
    exact: true,
    main: () => <AdminMovieAddEdit />,
  },
  {
    path: "/admin/revenueManagement",
    exact: true,
    main: () => <AdminRevenueManagement />,
  },
  {
    path: "/admin/ticketsManagement",
    exact: true,
    main: () => <AdminTicketsManagement />,
  },
  {
    path: "/admin/usersManagement",
    exact: true,
    main: () => <AdminUsersManagement />,
  },
  {
    path: "/admin/usersManagement/edit/:userId",
    exact: true,
    main: () => <AdminUserAddEdit />,
  },
  {
    path: "/admin/usersManagement/add",
    exact: true,
    main: () => <AdminUserAddEdit />,
  },
  {
    path: "/member",
    exact: true,
    main: () => <Member />,
  },
  {
    path: "/pays",
    exact: true,
    main: () => <Pays />,
  },
  {
    path: "/choose-seats",
    exact: true,
    main: () => <ChooseSeats />,
  },
  {
    path: "/choose-tickets",
    exact: true,
    main: () => <ChooseTickets />,
  },
  {
    path: "/movie-detail/:movieId",
    exact: true,
    main: () => <MovieDetail />,
  },
  {
    path: "/movies-list",
    exact: true,
    main: () => <MovieList />,
  },
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/login",
    exact: true,
    main: () => <Login />,
  },
  {
    path: "/register",
    exact: true,
    main: () => <Register />,
  },
  {
    path: "/*",
    exact: true,
    main: () => <Error404 />,
  },
];

export default routers;
