import React from "react";
import AdminMovieAddEdit from "./components/admin/AdminMovieAddEdit";
import AdminUserAddEdit from "./components/admin/AdminUserAddEdit";
import AdminMoviesManagement from "./components/pages/AdminMoviesManagement";
import AdminRevenueManagement from "./components/pages/AdminRevenueManagement";
import AdminTicketsManagement from "./components/pages/AdminTicketsManagement";
import AdminUsersManagement from "./components/pages/AdminUsersManagement";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import HeaderTopBar from "./components/partials/HeaderTopBar";

const routersAdmin = [
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
    path: "/",
    exact: true,
    main: () => <HeaderTopBar />,
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

export default routersAdmin;
