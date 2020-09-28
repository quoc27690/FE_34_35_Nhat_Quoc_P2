import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import ticketsApi from "../../api/ticketsApi";
import {
  getCurrentPayment,
  getMovieCinema,
  getMovieImage,
  getMovieName,
  getMovieTime,
  getPayment,
  getTimeSet,
  getSeat,
  getTotalCombo1,
  getTotalCombo2,
  getTotalTicket,
  getEmail,
} from "../../redux/slice/currentChoose";
import InfoPayment from "../infopayment/InfoPayment";

const PaysChild = () => {
  const { t } = useTranslation("common");

  const history = useHistory();

  const dispatch = useDispatch();
  const location = useLocation();

  const {
    currentPayment,
    payment,
    timeSet,
    movieName,
    movieCinema,
    movieTime,
    movieImage,
    seat,
    totalTicket,
    totalCombo1,
    totalCombo2,
    email,
  } = useSelector((state) => state.currentChoose);

  const handleSelect = (value) => {
    dispatch(getCurrentPayment(value));
    dispatch(getPayment());
    dispatch(getTimeSet());
    dispatch(getMovieName());
    dispatch(getMovieCinema());
    dispatch(getMovieTime());
    dispatch(getMovieImage());
    dispatch(getSeat());
    dispatch(getTotalTicket());
    dispatch(getTotalCombo1());
    dispatch(getTotalCombo2());
    dispatch(getEmail());
  };

  const handlePay = async () => {
    if (currentPayment) {
      const newTicket = {
        payment,
        timeSet,
        movieName,
        movieCinema,
        movieTime,
        movieImage,
        seat,
        totalTicket,
        totalCombo1,
        totalCombo2,
        email,
      };

      await ticketsApi.postTicket(newTicket);
      alert(t("pays.success"));
      localStorage.removeItem("payment");
      localStorage.removeItem("timeSet");
      localStorage.removeItem("movieName");
      localStorage.removeItem("movieCinema");
      localStorage.removeItem("movieTime");
      localStorage.removeItem("movieImage");
      localStorage.removeItem("seat");
      localStorage.removeItem("totalTicket");
      localStorage.removeItem("totalCombo1");
      localStorage.removeItem("totalCombo2");
      localStorage.removeItem("email");
      localStorage.removeItem("ticket");

      history.push("/");
      window.location.reload();
    } else {
      alert(t("pays.pleaseChoose"));
    }
  };

  const handleBack = () => {
    history.push("/choose-seats");
  };

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to="/">{t("breadcrumbs.listDetails")}</Link>
            <Link to="/choose-tickets">{t("breadcrumbs.buyTicket")}</Link>
            <Link to="/choose-seats">{t("breadcrumbs.chooseSeats")}</Link>
            <Link to={location.pathname}>{t("breadcrumbs.pays")}</Link>
          </div>
        </div>
      </div>
      <div className="pay">
        <div className="container">
          <div className="pay__grid">
            <div className="frame-choose">
              <div className="frame-choose__inner">
                <h3 className="frame-choose__title">
                  {t("titleBooking.choosePays")}
                </h3>
                <div className="pay__form">
                  <div className="pay__group">
                    <label>{t("pays.payments")}:</label>
                    <select
                      value={currentPayment}
                      onChange={(e) => handleSelect(e.target.value)}
                    >
                      <option value="" disabled></option>
                      <option value="cash">{t("pays.cash")}</option>
                      <option value="visa">{t("pays.card")}</option>
                    </select>
                  </div>
                  <div className="pay__button">
                    <button onClick={handleBack}>{t("button.back")}</button>
                    <button onClick={handlePay}>{t("button.pay")}</button>
                  </div>
                </div>
              </div>
            </div>
            <InfoPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaysChild;
