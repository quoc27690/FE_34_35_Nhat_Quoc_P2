import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../redux/slice/adminTicketsManagementSlice";

export default function AdminRevenueManagement() {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const { tickets, loading, error } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

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
                  <td>{e.movieName}</td>
                  <td>{e.movieCinema}</td>
                  <td>{e.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
