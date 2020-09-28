import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moviesApi from "../../api/moviesApi";
import ticketsApi from "../../api/ticketsApi";
import usersApi from "../../api/usersApi";
import { removeMovie } from "../../redux/slice/moviesSlice";
import { removeTicket } from "../../redux/slice/adminTicketsManagementSlice";
import { removeUser } from "../../redux/slice/adminUsersManagementSlice";

export default function AdminAction(props) {
  const { t } = useTranslation("common");

  const { userId, movieId, ticketId } = props;

  const dispatch = useDispatch();

  const history = useHistory();

  const handleRemove = (userId, movieId, ticketId) => {
    if (userId) {
      if (window.confirm(t("admin.confirmUser"))) {
        dispatch(removeUser(userId));
        usersApi.deleteUser(userId);
      }
    }
    if (movieId) {
      if (window.confirm(t("admin.confirmMovie"))) {
        dispatch(removeMovie(movieId));
        moviesApi.deleteMovie(movieId);
      }
    }
    if (ticketId) {
      if (window.confirm(t("admin.confirmTicket"))) {
        dispatch(removeTicket(ticketId));
        ticketsApi.deleteTicket(ticketId);
      }
    }
  };

  const handleEdit = (userId, movieId) => {
    if (userId) {
      const editUserUrl = `/admin/usersManagement/edit/${userId}`;
      history.push(editUserUrl);
    }
    if (movieId) {
      const editMovieUrl = `/admin/moviesManagement/edit/${movieId}`;
      history.push(editMovieUrl);
    }
  };

  return (
    <div className="admin-action">
      {ticketId ? (
        ""
      ) : (
        <button
          className="admin-action--edit"
          onClick={() => handleEdit(userId, movieId)}
        >
          {t("admin.edit")}
        </button>
      )}
      <button
        className="admin-action--remove"
        onClick={() => handleRemove(userId, movieId, ticketId)}
      >
        {t("admin.remove")}
      </button>
    </div>
  );
}
