import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../redux/slice/adminTicketsManagementSlice";
import AdminSlideBar from "../partials/AdminSlideBar";
import HeaderTopBar from "../partials/HeaderTopBar";
import AdminAction from "../admin/AdminAction";
import { useHistory } from "react-router-dom";

export default function AdminTicketsManagement() {
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

  const ADMIN_TICKETS_MANAGEMENT = [
    t("admin.id"),
    t("admin.email"),
    t("admin.movieName"),
    t("admin.movieCinema"),
    t("admin.timeSet"),
    t("admin.action"),
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
              <div className="admin-tickets-management">
                <table>
                  <thead>
                    <tr>
                      {ADMIN_TICKETS_MANAGEMENT.map((e, i) => (
                        <th key={i}>{e}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((e, i) => (
                      <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.email}</td>
                        <td>{e.movieName}</td>
                        <td>{e.movieCinema}</td>
                        <td>{e.timeSet}</td>
                        <td>
                          <AdminAction ticketId={e.id} />
                        </td>
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
