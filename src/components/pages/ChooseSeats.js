import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ChooseSeatsChild from "../chooseseats/ChooseSeatsChild";

const ChooseSeats = () => {
  return (
    <div className="choose-seat-pages">
      <Header />
      <ChooseSeatsChild />
      <Footer />
    </div>
  );
};
export default ChooseSeats;
