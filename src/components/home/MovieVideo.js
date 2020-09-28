import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MovieVideo = () => {
  const { t } = useTranslation("common");
  return (
    <section className="movie-video text-center">
      <div className="movie-video__overlay"></div>
      <div className="container">
        <div className="movie-video__content">
          <h2 className="movie-video__title">{t("video.videoPlay")}</h2>
          <p className="movie-video__bymoviak">{t("video.bymoviak")}</p>
          <Link to="/">
            <span className="fa fa-play" aria-hidden="true"></span>
            <span className="movie-video__ripple"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieVideo;
