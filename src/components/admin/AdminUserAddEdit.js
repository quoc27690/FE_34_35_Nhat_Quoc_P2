import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getUser,
  postUser,
  putUser,
} from "../../redux/slice/adminUserAddEditSlice";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function AdminUserAddEdit() {
  const { t } = useTranslation("common");
  const { userId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    region: "",
    birthday: "",
    gender: "",
  });
  const [token, setToken] = useState("");
  const { successError, loading, loadingGetUser, error } = useSelector(
    (state) => state.userAddEdit
  );

  useEffect(() => {
    if (userId) {
      async function getDataUser() {
        const res = await dispatch(getUser(userId));
        if (!res.error) {
          setUser({
            name: res.payload.name,
            email: res.payload.email,
            password: res.payload.password,
            phone: res.payload.phone,
            region: res.payload.region,
            birthday: res.payload.birthday,
            gender: res.payload.gender,
          });
        }
      }
      getDataUser();
    } else {
      const tokenAdmin = localStorage.getItem("token");
      setToken(tokenAdmin);
    }
  }, [dispatch, userId]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      const res = await dispatch(postUser(user));
      if (res.error) {
        alert(res.error.message);
      } else if (res.payload.length) {
        alert(res.payload);
      } else {
        alert("Register Success");
        // reset again to add token admin
        localStorage.setItem("token", token);
        history.push("/admin/usersManagement");
      }
    } else {
      await dispatch(putUser({ userId, user }));
      alert("Edit Success");
      history.push("/admin/usersManagement");
    }
  };

  return (
    <div>
      <HeaderTopBar />
      <div className="admin-user-add-edit">
        {loadingGetUser ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <form onSubmit={onSubmit}>
            <label>{t("admin.name")}</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <label>{t("admin.email")}</label>
            <input
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label>{t("admin.password")}</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <label>{t("admin.phone")}</label>
            <input
              type="text"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <label>{t("admin.region")}</label>
            <select
              value={user.region}
              onChange={(e) => setUser({ ...user, region: e.target.value })}
            >
              <option value="" disabled></option>
              <option value={t("admin.hcm")}>{t("admin.hcm")}</option>
              <option value={t("admin.hn")}>{t("admin.hn")}</option>
              <option value={t("admin.dn")}>{t("admin.dn")}</option>
            </select>
            <label>{t("admin.birthday")}</label>
            <input
              type="date"
              value={user.birthday}
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
            />
            <label>{t("admin.gender")}</label>
            <select
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option value="" disabled></option>
              <option value={t("admin.male")}>{t("admin.male")}</option>
              <option value={t("admin.female")}>{t("admin.female")}</option>
            </select>

            <button className="submit" type="submit">
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : error ? (
                t("authentication.retry")
              ) : successError.length ? (
                t("authentication.retry")
              ) : userId ? (
                t("admin.editUser")
              ) : (
                t("admin.addUser")
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
