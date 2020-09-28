import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../redux/slice/moviesSlice";

const MovieListChild = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to="/">{t("breadcrumbs.listMovie")}</Link>
          </div>
        </div>
      </div>
      <div className="list-movie">
        <div className="container">
          <div className="list-movie__grid">
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
    </div>
  );
};

export default MovieListChild;
