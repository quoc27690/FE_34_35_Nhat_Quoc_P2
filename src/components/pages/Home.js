import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Slider from "../home/Slider";
import Movie from "../home/Movie";
import MovieVideo from "../home/MovieVideo";
import NewPromotion from "../home/NewPromotion";
import Blog from "../home/Blog";

const Home = () => {
  return (
    <div className="home-pages">
      <Header />
      <div className="main">
        <Slider />
        <Movie />
        <MovieVideo />
        <NewPromotion />
        <Blog />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
