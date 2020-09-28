import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCinemas } from "../../redux/slice/cinemasSlice";
import { getIdMovieTime } from "../../redux/slice/currentChoose";

const ShowTime = () => {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const history = useHistory();

  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const { idMovieTime } = useSelector((state) => state.currentChoose);
  const { cinemas, loading, error } = useSelector((state) => state.cinemas);
  const { movieDetail } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getCinemas());
  }, [dispatch]);

  const handleMovieTime = (movieTime, cinema, id) => {
    let index = cinema.session.findIndex((x) => x.id === id);

    const token = localStorage.getItem("token");
    if (token) {
      const base64Url = token.split(".")[1];
      const getValueToToken = JSON.parse(atob(base64Url));
      const getEmailToToken = getValueToToken.email;
      localStorage.setItem("email", getEmailToToken);
    }

    if (index !== -1) {
      dispatch(getIdMovieTime(id));
      localStorage.setItem("movieTime", movieTime);
      localStorage.setItem("movieCinema", cinema.name);
      localStorage.setItem("movieName", movieDetail[0].name);
      localStorage.setItem("movieImage", movieDetail[0].image);
      localStorage.setItem("timeSet", date);
    }
  };

  const handleContinue = () => {
    if (localStorage.getItem("movieTime")) {
      history.push("/choose-tickets");
    } else {
      alert(t("movieDetail.pleaseChoose"));
    }
  };

  return (
    <div className="movie-detail__st">
      <h3 className="movie-detail__title">{t("movieDetail.title")}</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        cinemas.map((e, i) => (
          <div className="cinema__wrap" key={i}>
            <h4 className="cinema__name">{e.name}</h4>
            <div className="cinema__showtime">
              <div className="cinema__item">
                <label>{date}</label>
                <div className="cinema__list">
                  {e.session.map((el, id) => (
                    <button
                      key={id}
                      className={
                        idMovieTime === el.id
                          ? "cinema__link active"
                          : "cinema__link"
                      }
                      onClick={() => handleMovieTime(el.time, e, el.id)}
                    >
                      {el.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <button className="movie-detail__btn" onClick={handleContinue}>
        {t("movieDetail.continue")}
      </button>
    </div>
  );
};

export default ShowTime;
