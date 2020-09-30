import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import moviesApi from "../../api/moviesApi";
import {
  getActor,
  getAll,
  getImage,
  getName,
  getproducer,
  getratings,
  getReleaseDate,
  getTime,
  getType,
} from "../../redux/slice/adminMovieAddEditSlice";

export default function AdminMovieAddEdit() {
  const { t } = useTranslation("common");

  const { movieId } = useParams();

  const history = useHistory();

  const dispatch = useDispatch();

  const movieEdit = useSelector((state) =>
    state.movies.movies.find((e) => e.id === parseInt(movieId))
  );

  const {
    image,
    name,
    ratings,
    time,
    producer,
    type,
    actor,
    releaseDate,
  } = useSelector((state) => state.movieAddEdit);

  useEffect(() => {
    if (movieId) {
      dispatch(getAll(movieEdit));
    } else {
      const emptyMovie = {
        image: "",
        name: "",
        ratings: "",
        time: "",
        producer: "",
        type: "",
        actor: "",
        releaseDate: "",
      };
      dispatch(getAll(emptyMovie));
    }
  }, [dispatch, movieEdit, movieId]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newMovie = {
      image,
      name,
      ratings,
      time,
      producer,
      type,
      actor,
      releaseDate,
    };

    if (!movieId) {
      await moviesApi.postMovie(newMovie);
    } else {
      await moviesApi.putMovie(movieId, newMovie);
    }

    history.push("/admin/moviesManagement");
  };

  return (
    <div className="admin-movie-add-edit">
      <form onSubmit={onSubmit}>
        <label>{t("admin.image")}</label>
        <input
          type="text"
          value={image}
          onChange={(e) => dispatch(getImage(e.target.value))}
        />
        <label>{t("admin.name")}</label>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(getName(e.target.value))}
        />
        <label>{t("admin.ratings")}</label>
        <input
          type="text"
          value={ratings}
          onChange={(e) => dispatch(getratings(e.target.value))}
        />
        <label>{t("admin.time")}</label>
        <input
          type="text"
          value={time}
          onChange={(e) => dispatch(getTime(e.target.value))}
        />
        <label>{t("admin.producer")}</label>
        <input
          type="text"
          value={producer}
          onChange={(e) => dispatch(getproducer(e.target.value))}
        />
        <label>{t("admin.type")}</label>
        <input
          type="text"
          value={type}
          onChange={(e) => dispatch(getType(e.target.value))}
        />
        <label>{t("admin.actor")}</label>
        <input
          type="text"
          value={actor}
          onChange={(e) => dispatch(getActor(e.target.value))}
        />
        <label>{t("admin.releaseDate")}</label>
        <input
          type="date"
          value={releaseDate}
          onChange={(e) => dispatch(getReleaseDate(e.target.value))}
        />

        <button className="submit" type="submit">
          {movieId ? t("admin.editMovie") : t("admin.addMovie")}
        </button>
      </form>
    </div>
  );
}
