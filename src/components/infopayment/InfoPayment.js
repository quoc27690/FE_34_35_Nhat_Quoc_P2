import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  getTotalCombo1,
  getTotalCombo2,
  getTotalTicket,
} from "../../redux/slice/currentChoose";

export default function InfoPayment() {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const {
    currentTicket,
    currentChooseSeat,
    totalTicket,
    totalCombo1,
    totalCombo2,
    timeSet,
    movieName,
    movieCinema,
    movieTime,
    movieImage,
    ticket,
  } = useSelector((state) => state.currentChoose);

  useEffect(() => {
    dispatch(getTotalTicket());
    dispatch(getTotalCombo1());
    dispatch(getTotalCombo2());
  }, [dispatch]);

  const handleContinue = () => {
    if (location.pathname === "/choose-tickets") {
      if (currentTicket === 0) {
        alert(t("chooseTiket.pleaseChoose"));
      } else {
        history.push("/choose-seats");
      }
    }

    if (location.pathname === "/choose-seats") {
      if (currentChooseSeat.length < ticket) {
        alert(t("chooseSeat.pleaseChoose"));
      } else {
        history.push("/pays");
      }
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="buy-ticket__sidebar">
      <div className="ticket-movie__wrap">
        <div className="ticket-movie__feature">
          <img src={movieImage} alt="images" />
        </div>
        <div className="ticket-movie__detail">
          <h3 className="ticket-movie__movie-name">{movieName}</h3>
          <ul className="ticket-movie__info">
            <li className="ticket-movie__theater">
              <span className="ticket-movie__title">
                {t("buyTicket.cinema")} {movieCinema}
              </span>
              <span></span>
            </li>
            <li className="ticket-movie__time">
              <span className="ticket-movie__title">
                {t("buyTicket.time")} {movieTime}
              </span>
              <span></span>
            </li>
            <li className="ticket-movie__date">
              <span className="ticket-movie__title">
                {t("buyTicket.date")} {timeSet}
              </span>
              <span></span>
            </li>
            <li className="ticket-movie__seat">
              <span className="ticket-movie__title">
                {t("buyTicket.seat")}{" "}
                {currentChooseSeat.map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
              </span>
              <span></span>
            </li>
            <li className="ticket-movie__total">
              <span className="ticket-movie__title">
                {t("buyTicket.total")} {totalTicket + totalCombo1 + totalCombo2}
              </span>
              <span></span>
            </li>
          </ul>
          {location.pathname === "/pays" ? (
            ""
          ) : (
            <div className="ticket-movie__button">
              <button onClick={handleBack}>{t("button.back")}</button>
              <button onClick={handleContinue}>{t("button.continue")}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
