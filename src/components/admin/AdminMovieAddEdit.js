import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  postMovie,
  getMovieDetail,
  putMovie,
} from "../../redux/slice/adminMovieAddEditSlice";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function AdminMovieAddEdit() {
  const { t } = useTranslation("common");
  const { movieId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    image: "",
    name: "",
    ratings: "",
    time: "",
    producer: "",
    type: "",
    actor: "",
    releaseDate: "",
  });
  const { successError, loading, loadingGetMovie, error } = useSelector(
    (state) => state.movieAddEdit
  );

  useEffect(() => {
    if (movieId) {
      async function getDataMovie() {
        const res = await dispatch(getMovieDetail(movieId));
        if (!res.error) {
          setMovie({
            image: res.payload.image,
            name: res.payload.name,
            ratings: res.payload.ratings,
            time: res.payload.time,
            producer: res.payload.producer,
            type: res.payload.type,
            actor: res.payload.actor,
            releaseDate: res.payload.releaseDate,
          });
        }
      }
      getDataMovie();
    }
  }, [dispatch, movieId]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!movieId) {
      const res = await dispatch(postMovie(movie));
      if (res.error) {
        alert(res.error.message);
      } else if (res.payload.length) {
        alert(res.payload);
      } else {
        alert("Create Movie Success");
        history.push("/admin/moviesManagement");
      }
    } else {
      await dispatch(putMovie({ movieId, movie }));
      alert("Edit Success");
      history.push("/admin/moviesManagement");
    }
  };

  return (
    <div>
      <HeaderTopBar />
      <div className="admin-movie-add-edit">
        {loadingGetMovie ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <form onSubmit={onSubmit}>
            <label>{t("admin.image")}</label>
            <input
              type="text"
              value={movie.image}
              onChange={(e) => setMovie({ ...movie, image: e.target.value })}
            />
            <label>{t("admin.name")}</label>
            <input
              type="text"
              value={movie.name}
              onChange={(e) => setMovie({ ...movie, name: e.target.value })}
            />
            <label>{t("admin.ratings")}</label>
            <input
              type="text"
              value={movie.ratings}
              onChange={(e) => setMovie({ ...movie, ratings: e.target.value })}
            />
            <label>{t("admin.time")}</label>
            <input
              type="text"
              value={movie.time}
              onChange={(e) => setMovie({ ...movie, time: e.target.value })}
            />
            <label>{t("admin.producer")}</label>
            <input
              type="text"
              value={movie.producer}
              onChange={(e) => setMovie({ ...movie, producer: e.target.value })}
            />
            <label>{t("admin.type")}</label>
            <input
              type="text"
              value={movie.type}
              onChange={(e) => setMovie({ ...movie, type: e.target.value })}
            />
            <label>{t("admin.actor")}</label>
            <input
              type="text"
              value={movie.actor}
              onChange={(e) => setMovie({ ...movie, actor: e.target.value })}
            />
            <label>{t("admin.releaseDate")}</label>
            <input
              type="date"
              value={movie.releaseDate}
              onChange={(e) =>
                setMovie({ ...movie, releaseDate: e.target.value })
              }
            />

            <button className="submit" type="submit">
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : error ? (
                t("authentication.retry")
              ) : successError.length ? (
                t("authentication.retry")
              ) : movieId ? (
                t("admin.editMovie")
              ) : (
                t("admin.addMovie")
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
