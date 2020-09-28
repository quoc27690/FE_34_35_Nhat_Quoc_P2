import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCombo } from "../../redux/slice/comboSlice";
import {
  getAddCombo1,
  getAddCombo2,
  getAddTicket,
  getCurrentCombo1,
  getCurrentCombo2,
  getCurrentTicket,
  getRemoveCombo1,
  getRemoveCombo2,
  getRemoveTicket,
  getMovieCinema,
  getMovieImage,
  getMovieName,
  getMovieTime,
  getTimeSet,
} from "../../redux/slice/currentChoose";
import InfoPayment from "../infopayment/InfoPayment";

const ChooseTicketChild = () => {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const { combo, loading, error } = useSelector((state) => state.combo);
  const {
    ticketPrice,
    combo1Price,
    combo2Price,
    currentTicket,
    currentCombo1,
    currentCombo2,
    totalTicket,
    totalCombo1,
    totalCombo2,
  } = useSelector((state) => state.currentChoose);

  useEffect(() => {
    dispatch(getCombo());

    dispatch(getTimeSet());
    dispatch(getMovieName());
    dispatch(getMovieCinema());
    dispatch(getMovieTime());
    dispatch(getMovieImage());
  }, [dispatch]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to="/">{t("breadcrumbs.listDetails")}</Link>
            <Link to="/">{t("breadcrumbs.buyTicket")}</Link>
          </div>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div className="buy-ticket">
          <div className="container">
            <div className="buy-ticket__grid">
              <div className="frame-choose">
                <div className="frame-choose__inner">
                  <h3 className="frame-choose__title">
                    {t("titleBooking.chooseTiketFood")}
                  </h3>
                  <table className="table buy-ticket__table">
                    <thead>
                      <tr className="buy-ticket__title">
                        <th>{t("chooseTiket.ticketType")}</th>
                        <th>{t("chooseTiket.number")}</th>
                        <th>{t("chooseTiket.price")}</th>
                        <th>{t("chooseTiket.totalItem")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>
                            <b>{t("chooseTiket.adults")}</b>
                          </div>
                          <div>{t("chooseTiket.ticket2D")}</div>
                        </td>
                        <td>
                          <div className="buy-ticket__booking">
                            <button
                              className="btn-addminus"
                              onClick={() => dispatch(getRemoveTicket())}
                            >
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <input
                              type="number"
                              value={currentTicket}
                              onChange={(e) =>
                                dispatch(getCurrentTicket(e.target.value))
                              }
                            />
                            <button
                              className="btn-addminus"
                              onClick={() => dispatch(getAddTicket())}
                            >
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </td>
                        <td>{ticketPrice}</td>
                        <td>{ticketPrice * currentTicket}</td>
                      </tr>
                      <tr className="total">
                        <td colSpan="3">{t("chooseTiket.totalAllItems")}</td>
                        <td>{totalTicket}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table buy-ticket__table">
                    <thead>
                      <tr className="buy-ticket__title">
                        <th>{t("chooseTiket.combo")}</th>
                        <th>{t("chooseTiket.number")}</th>
                        <th>{t("chooseTiket.price")}</th>
                        <th>{t("chooseTiket.totalItem")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {combo.map((e, i) => (
                        <tr key={i}>
                          <td>
                            <div className="buy-ticket__combo">
                              <div className="buy-ticket__feature">
                                <img src={e.image} alt="images" />
                              </div>
                              <div className="buy-ticket__content">
                                <b>{e.title}</b>
                                <div>{e.name}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="buy-ticket__booking">
                              <button
                                className="btn-addminus"
                                onClick={
                                  e.id === 1
                                    ? () => {
                                        dispatch(getRemoveCombo1());
                                      }
                                    : () => {
                                        dispatch(getRemoveCombo2());
                                      }
                                }
                              >
                                <i
                                  className="fa fa-minus"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <input
                                type="number"
                                value={
                                  e.id === 1 ? currentCombo1 : currentCombo2
                                }
                                onChange={(event) =>
                                  e.id === 1
                                    ? dispatch(
                                        getCurrentCombo1(event.target.value)
                                      )
                                    : dispatch(
                                        getCurrentCombo2(event.target.value)
                                      )
                                }
                              />
                              <button
                                className="btn-addminus"
                                onClick={
                                  e.id === 1
                                    ? () => {
                                        dispatch(getAddCombo1());
                                      }
                                    : () => {
                                        dispatch(getAddCombo2());
                                      }
                                }
                              >
                                <i
                                  className="fa fa-plus"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </td>
                          <td>{e.id === 1 ? combo1Price : combo2Price}</td>
                          <td>{e.id === 1 ? totalCombo1 : totalCombo2}</td>
                        </tr>
                      ))}
                      <tr className="total">
                        <td colSpan="3">{t("chooseTiket.totalAllItems")}</td>
                        <td>{totalCombo1 + totalCombo2}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <InfoPayment />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseTicketChild;
