import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getBlog } from "../../redux/slice/blogSlice";
import {
  getMovieDetail,
  getMovieDetailEmpty,
} from "../../redux/slice/moviesSlice";
import ShowTime from "./ShowTime";

const MovieDetailChild = () => {
  const { t } = useTranslation("common");
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { movieDetail, loading, error } = useSelector((state) => state.movies);
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getMovieDetailEmpty());
    dispatch(getMovieDetail(movieId));
    dispatch(getBlog());
  }, [dispatch, movieId]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to={location.pathname}>{t("breadcrumbs.listDetails")}</Link>
          </div>
        </div>
      </div>
      <div className="movie-detail">
        <div className="container">
          <div className="movie-detail__grid">
            <div className="movie-detail__feature">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error.message}</p>
              ) : (
                movieDetail.map((e, i) => (
                  <div className="list-movie__box" key={i}>
                    <div className="list-movie__poster">
                      <img src={e.image} alt="images" />
                    </div>
                    <div className="list-movie__content">
                      <h3 className="list-movie__title">
                        <Link to="/">{e.name}</Link>
                      </h3>
                      <div className="list-movie__rating">
                        <span className="list-movie__rating--icon">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className={
                              e.ratings >= 2 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              e.ratings >= 3 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              e.ratings >= 4 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              e.ratings >= 5 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                      <div className="list-movie__time">
                        <span className="list-movie__time--slot">G</span>
                        <span className="list-movie__time--icon">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        <span className="list-movie__time--text">
                          {e.time} {t("movieDetail.minutes")}
                        </span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">
                          {t("movieDetail.releaseDate")}:
                        </label>
                        <span className="text">{e.releaseDate}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">
                          {t("movieDetail.genre")}:
                        </label>
                        <span className="text">{e.type}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">
                          {t("movieDetail.actor")}:
                        </label>
                        <span className="text">{e.actor}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">
                          {t("movieDetail.director")}:
                        </label>
                        <span className="text">{e.producer}</span>
                      </div>
                      <div className="list-movie__button">
                        <Link to="/" className="list-movie__trailer">
                          {t("movieDetail.trailer")}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
              <ShowTime />
            </div>
            <div className="movie-detail__sidebar">
              <div className="widget-mg widget-sidebar__image">
                <Link to="/">
                  <img src="../assets/images/sidebar/01.jpg" alt="images" />
                </Link>
              </div>
              <div className="widget-mg widget-sidebar__posts">
                <h3 className="widget-sidebar__title">
                  {t("widget.recentPosts")}
                </h3>
                {blogs.map((e, i) => (
                  <div className="blog__box small" key={i}>
                    <div className="blog__poster">
                      <img src={e.image} alt="images" />
                    </div>
                    <div className="blog__content">
                      <h3 className="blog__title">
                        <a href="/">{e.name}</a>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailChild;
