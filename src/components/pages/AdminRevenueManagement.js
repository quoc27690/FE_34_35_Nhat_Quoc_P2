import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTickets } from "../../redux/slice/adminTicketsManagementSlice";
import AdminSlideBar from "../partials/AdminSlideBar";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function AdminRevenueManagement() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const history = useHistory();
  const { tickets, loading, error } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const base64Url = token.split(".")[1];
      const getValueToToken = JSON.parse(atob(base64Url));
      const getEmailToToken = getValueToToken.email;
      if (getEmailToToken !== "admin@gmail.com") {
        history.push("/");
      }
    } else {
      history.push("/");
    }
  }, [history]);

  const ADMIN_REVENUE_MANAGEMENT = [
    t("admin.id"),
    t("admin.dayBuy"),
    t("admin.movieMoney"),
    t("admin.movieFood"),
    t("admin.total"),
  ];

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div>
          <HeaderTopBar />
          <div className="admin">
            <div className="admin__left">
              <AdminSlideBar />
            </div>
            <div className="admin__right">
              <div className="admin-revenue-management">
                <table>
                  <thead>
                    <tr>
                      {ADMIN_REVENUE_MANAGEMENT.map((e, i) => (
                        <th key={i}>{e}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((e, i) => (
                      <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.timeSet}</td>
                        <td>{e.totalTicket}</td>
                        <td>{e.totalCombo1 + e.totalCombo2}</td>
                        <td>{e.totalTicket + e.totalCombo1 + e.totalCombo2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
