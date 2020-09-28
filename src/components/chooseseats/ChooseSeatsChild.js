import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCurrentMovieCinema,
  getCurrentMovieImage,
  getCurrentMovieName,
  getCurrentMovieTime,
  getCurrentTimeSet,
  getIdCurrentChooseSeat,
  getTicket,
} from "../../redux/slice/currentChoose";
import { getSeats } from "../../redux/slice/seatsSlice";

const ChooseSeatsChild = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { seats, loading, error } = useSelector((state) => state.seats);
  const {
    idCurrentChooseSeat,
    totalTicket,
    totalCombo1,
    totalCombo2,
    currentTimeSet,
    currentMovieName,
    currentMovieCinema,
    currentMovieTime,
    currentMovieImage,
  } = useSelector((state) => state.currentChoose);

  useEffect(() => {
    dispatch(getSeats());
    dispatch(getCurrentTimeSet());
    dispatch(getCurrentMovieName());
    dispatch(getCurrentMovieCinema());
    dispatch(getCurrentMovieTime());
    dispatch(getCurrentMovieImage());
    dispatch(getTicket());
  }, [dispatch]);

  const handleChooseSeat = (seat) => {
    dispatch(getIdCurrentChooseSeat(seat.codeSeat));
  };

  console.log(idCurrentChooseSeat);

  const handleContinue = (params) => {};

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to="/">{t("breadcrumbs.listDetails")}</Link>
            <Link to="/">{t("breadcrumbs.buyTicket")}</Link>
            <Link to="/">{t("breadcrumbs.chooseSeats")}</Link>
          </div>
        </div>
      </div>
      <div className="choose-seat">
        <div className="container">
          <div className="choose-seat__grid">
            <div className="frame-choose">
              <div className="frame-choose__inner">
                <h3 className="frame-choose__title">
                  {t("titleBooking.chooseSeats")}
                </h3>
                <div className="choose-seat__scope">
                  <div className="choose-seat__row">
                    {loading ? (
                      <p>Loading...</p>
                    ) : error ? (
                      <p>{error.message}</p>
                    ) : (
                      seats.map((e, i) => (
                        <button
                          key={i}
                          className={
                            idCurrentChooseSeat.findIndex(
                              (s) => s === e.codeSeat
                            ) !== -1
                              ? "active"
                              : ""
                          }
                          onClick={() => handleChooseSeat(e)}
                        >
                          {e.codeSeat}
                        </button>
                      ))
                    )}
                  </div>
                  <div className="screen">{t("chooseSeat.screen")}</div>
                  <div className="seats-cinema">
                    <span className="seat-cinema-selected">
                      {t("chooseSeat.selected")}
                    </span>
                    <span className="seat-cinema-sold">
                      {t("chooseSeat.sold")}
                    </span>
                    <span className="seat-cinema-choose">
                      {t("chooseSeat.choose")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-ticket__sidebar">
              <div className="ticket-movie__wrap">
                <div className="ticket-movie__feature">
                  <img src={currentMovieImage} alt="images" />
                </div>
                <div className="ticket-movie__detail">
                  <h3 className="ticket-movie__movie-name">
                    {currentMovieName}
                  </h3>
                  <ul className="ticket-movie__info">
                    <li className="ticket-movie__theater">
                      <span className="ticket-movie__title">
                        {t("buyTicket.cinema")} {currentMovieCinema}
                      </span>
                      <span></span>
                    </li>
                    <li className="ticket-movie__time">
                      <span className="ticket-movie__title">
                        {t("buyTicket.time")} {currentMovieTime}
                      </span>
                      <span></span>
                    </li>
                    <li className="ticket-movie__date">
                      <span className="ticket-movie__title">
                        {t("buyTicket.date")} {currentTimeSet}
                      </span>
                      <span></span>
                    </li>
                    <li className="ticket-movie__seat">
                      <span className="ticket-movie__title">
                        {t("buyTicket.seat")}{" "}
                        {idCurrentChooseSeat.map((e, i) => (
                          <p key={i}>{e}</p>
                        ))}
                      </span>
                      <span></span>
                    </li>
                    <li className="ticket-movie__total">
                      <span className="ticket-movie__title">
                        {t("buyTicket.total")}{" "}
                        {totalTicket + totalCombo1 + totalCombo2}
                      </span>
                      <span></span>
                    </li>
                  </ul>
                  <div className="ticket-movie__button">
                    <button onClick={handleContinue}>
                      {t("button.continue")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSeatsChild;
