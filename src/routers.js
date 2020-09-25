import React from "react";
import AdminMoviesManagement from "./components/admin/AdminMoviesManagement";
import AdminRevenueManagement from "./components/admin/AdminRevenueManagement";
import AdminTicketsManagement from "./components/admin/AdminTicketsManagement";
import AdminUsersManagement from "./components/admin/AdminUsersManagement";

const routers = [
  {
    path: "/admin/moviesManagement",
    exact: true,
    main: ({ location, history }) => (
      <AdminMoviesManagement location={location} history={history} />
    ),
  },
  {
    path: "/admin/revenueManagement",
    exact: true,
    main: ({ location, history }) => (
      <AdminRevenueManagement location={location} history={history} />
    ),
  },
  {
    path: "/admin/ticketsManagement",
    exact: true,
    main: ({ location, history }) => (
      <AdminTicketsManagement location={location} history={history} />
    ),
  },
  {
    path: "/admin/usersManagement",
    exact: true,
    main: ({ location, history }) => (
      <AdminUsersManagement location={location} history={history} />
    ),
  },
];

export default routers;
