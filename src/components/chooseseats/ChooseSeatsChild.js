import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ticketsApi from "../../api/ticketsApi";
import {
  getMovieCinema,
  getMovieImage,
  getMovieName,
  getMovieTime,
  getTimeSet,
  getCurrentChooseSeat,
  getTicket,
  getChoosedSeat,
} from "../../redux/slice/currentChoose";
import { getSeats } from "../../redux/slice/seatsSlice";
import InfoPayment from "../infopayment/InfoPayment";

const ChooseSeatsChild = () => {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();
  const location = useLocation();

  const { seats, loading, error } = useSelector((state) => state.seats);
  const { currentChooseSeat, choosedSeat } = useSelector(
    (state) => state.currentChoose
  );

  useEffect(() => {
    dispatch(getSeats());

    dispatch(getTicket());

    dispatch(getTimeSet());
    dispatch(getMovieName());
    dispatch(getMovieCinema());
    dispatch(getMovieTime());
    dispatch(getMovieImage());
  }, [dispatch]);

  useEffect(() => {
    async function getAllTickets() {
      const allTickets = await ticketsApi.getTickets();
      const allSeat = [];
      allTickets.forEach((el) => el.seat.forEach((e) => allSeat.push(e)));
      dispatch(getChoosedSeat(allSeat));
    }
    getAllTickets();
  }, [dispatch]);

  const handleChooseSeat = (seat) => {
    dispatch(getCurrentChooseSeat(seat.codeSeat));
  };

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to="/">{t("breadcrumbs.listDetails")}</Link>
            <Link to="/choose-tickets">{t("breadcrumbs.buyTicket")}</Link>
            <Link to={location.pathname}>{t("breadcrumbs.chooseSeats")}</Link>
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
                            choosedSeat &&
                            choosedSeat.findIndex((c) => c === e.codeSeat) !==
                              -1
                              ? "choosed"
                              : currentChooseSeat.findIndex(
                                  (s) => s === e.codeSeat
                                ) !== -1
                              ? "active"
                              : ""
                          }
                          disabled={
                            choosedSeat &&
                            choosedSeat.findIndex((c) => c === e.codeSeat) !==
                              -1
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
            <InfoPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSeatsChild;
