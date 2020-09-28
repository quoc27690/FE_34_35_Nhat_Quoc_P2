import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMoviesHome } from "../../redux/slice/moviesSlice";

const Movie = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMoviesHome());
  }, [dispatch]);

  return (
    <div className="newest-movie">
      <div className="container">
        <div className="title-section">
          <span className="seperator"></span>
          <h2 className="flat-title">
            <span className="flat-title__default">
              {t("titleSection.newest")}{" "}
            </span>
            <span className="flat-title__color">{t("titleSection.movie")}</span>
          </h2>
          <span className="seperator"></span>
        </div>
        <div className="newest-movie__gird">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            movies.map((e, i) => (
              <div className="movie__box" key={i}>
                <div className="movie__poster">
                  <Link to="/">
                    <img src={e.image} alt="images" />
                  </Link>
                  <div className="movie__overlay">
                    <div className="movie__buy">
                      <Link
                        to={`/movie-detail/${e.id}`}
                        className="movie__buy--ticket"
                      >
                        BUY TICKET
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="movie__content">
                  <h3 className="movie__title">
                    <Link to="/">{e.name}</Link>
                  </h3>
                  <p className="movie__date">{e.releaseDate}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
