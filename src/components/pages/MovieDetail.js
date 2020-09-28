import React, { useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MovieDetailChild from "../moviedetail/MovieDetailChild";
import { useHistory } from "react-router-dom";

const MovieDetail = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
  }, [history]);

  return (
    <div className="movie-detail-pages">
      <Header />
      <div className="main">
        <MovieDetailChild />
      </div>
      <Footer />
    </div>
  );
};
export default MovieDetail;
