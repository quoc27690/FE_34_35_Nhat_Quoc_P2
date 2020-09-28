import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MovieListChild from "../moviesList/MovieListChild";

const MovieList = () => {
  return (
    <div className="movies-page">
      <Header />
      <div className="main">
        <MovieListChild />
      </div>
      <Footer />
    </div>
  );
};
export default MovieList;
