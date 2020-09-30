import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import authApi from "../../api/authApi";
import { getAll, getEmail, getPassword } from "../../redux/slice/loginSlice";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function Login() {
  const { t } = useTranslation("common");

  const history = useHistory();

  const dispatch = useDispatch();

  const { email, password } = useSelector((state) => state.login);

  useEffect(() => {
    const emptyUser = {
      email: "",
      password: "",
    };
    dispatch(getAll(emptyUser));
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };
    const res = await authApi.postUserLogin(newUser);

    if (res.length) {
      alert(res);
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
      <div className="login">
        <div className="login__wrap">
          <div className="login__inner">
            <div className="login__name">{t("authentication.login")}</div>
            <form className="login__form" onSubmit={onSubmit}>
              <input
                placeholder={t("admin.email")}
                type="text"
                value={email}
                onChange={(e) => dispatch(getEmail(e.target.value))}
              />
              <input
                placeholder={t("admin.password")}
                type="password"
                value={password}
                onChange={(e) => dispatch(getPassword(e.target.value))}
              />
              <button className="login__button--submit" type="submit">
                {t("authentication.login")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
