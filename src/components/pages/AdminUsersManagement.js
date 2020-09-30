import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../redux/slice/adminUsersManagementSlice";
import AdminSlideBar from "../partials/AdminSlideBar";
import HeaderTopBar from "../partials/HeaderTopBar";
import AdminAction from "../admin/AdminAction";

export default function AdminUsersManagement() {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const history = useHistory();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
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

  const ADMIN_USERS_MANAGEMENT = [
    t("admin.id"),
    t("admin.name"),
    t("admin.email"),
    t("admin.phone"),
    t("admin.region"),
    t("admin.birthday"),
    t("admin.gender"),
    t("admin.action"),
  ];

  const handleAddUser = () => {
    const addUserUrl = `/admin/usersManagement/add`;
    history.push(addUserUrl);
  };

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
              <div className="admin-users-management">
                <button
                  className="admin-users-management__add-user"
                  onClick={handleAddUser}
                >
                  {t("admin.addUser")}
                </button>
                <table>
                  <thead>
                    <tr>
                      {ADMIN_USERS_MANAGEMENT.map((e, i) => (
                        <th key={i}>{e}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((e, i) => (
                      <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                        <td>{e.region}</td>
                        <td>{e.birthday}</td>
                        <td>{e.gender}</td>
                        <td>
                          <AdminAction userId={e.id} />
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
