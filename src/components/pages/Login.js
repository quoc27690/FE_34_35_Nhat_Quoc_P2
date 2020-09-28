import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postUserLogin } from "../../redux/slice/loginSlice";
import HeaderMenu from "../partials/HeaderMenu";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function Login() {
  const { t } = useTranslation("common");
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const { successError, loading, error } = useSelector((state) => state.login);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(postUserLogin(user));

    if (res.error) {
      alert(res.error.message);
    } else if (res.payload.length) {
      alert(res.payload);
    } else {
      alert("Login Success");
      const token = localStorage.getItem("token");
      if (token) {
        const base64Url = token.split(".")[1];
        const getValueToToken = JSON.parse(atob(base64Url));
        const getEmailToToken = getValueToToken.email;
        if (getEmailToToken === "admin@gmail.com") {
          history.push("/admin/usersManagement/");
        } else {
          history.push("/");
        }
      }
    }
  };

  return (
    <div>
      <HeaderTopBar />
      <HeaderMenu />
      <div className="login">
        <div className="login__wrap">
          <div className="login__inner">
            <div className="login__name">{t("authentication.login")}</div>
            <form className="login__form" onSubmit={onSubmit}>
              <input
                placeholder={t("admin.email")}
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                placeholder={t("admin.password")}
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button className="login__button--submit" type="submit">
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : error ? (
                  t("authentication.retry")
                ) : successError.length ? (
                  t("authentication.retry")
                ) : (
                  t("authentication.login")
                )}
              </button>
            </form>
            <button className="register__button--submit">
              <Link to="/register">{t("authentication.register")}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
