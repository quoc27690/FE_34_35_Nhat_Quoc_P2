import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMovies } from "../../redux/slice/adminMoviesManagementSlice";
import AdminSlideBar from "../partials/AdminSlideBar";
import HeaderTopBar from "../partials/HeaderTopBar";
import AdminAction from "../admin/AdminAction";

export default function AdminMoviesManagement() {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const history = useHistory();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const base64Url = token.split(".")[1];
      const getValueToToken = JSON.parse(atob(base64Url));
      const getEmailToToken = getValueToToken.email;
      if (getEmailToToken !== "admin@gmail.com") {
        history.push("/");
      }
    } else {
      history.push("/");
    }
  }, [history]);

  const ADMIN_MOVIES_MANAGEMENT = [
    t("admin.id"),
    t("admin.image"),
    t("admin.name"),
    t("admin.ratings"),
    t("admin.time"),
    t("admin.producer"),
    t("admin.type"),
    t("admin.actor"),
    t("admin.releaseDate"),
    t("admin.action"),
  ];

  const handleAddMovie = () => {
    const addMovieUrl = `/admin/moviesManagement/add`;
    history.push(addMovieUrl);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div>
          <HeaderTopBar />
          <div className="admin">
            <div className="admin__left">
              <AdminSlideBar />
            </div>
            <div className="admin__right">
              <div className="admin-movies-management">
                <button
                  className="admin-movies-management__add-user"
                  onClick={handleAddMovie}
                >
                  {t("admin.addMovie")}
                </button>
                <table>
                  <thead>
                    <tr>
                      {ADMIN_MOVIES_MANAGEMENT.map((e, i) => (
                        <th key={i}>{e}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((e, i) => (
                      <tr key={i}>
                        <td>{e.id}</td>
                        <td>
                          <img src={e.image} alt="" />
                        </td>
                        <td>{e.name}</td>
                        <td>{e.ratings}</td>
                        <td>{e.time}</td>
                        <td>{e.producer}</td>
                        <td>{e.type}</td>
                        <td>{e.actor}</td>
                        <td>{e.releaseDate}</td>
                        <td>
                          <AdminAction movieId={e.id} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
