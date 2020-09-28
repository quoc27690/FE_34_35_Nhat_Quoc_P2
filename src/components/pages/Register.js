import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUserRegister } from "../../redux/slice/registerSlice";
import HeaderMenu from "../partials/HeaderMenu";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function Register() {
  const { t } = useTranslation("common");
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
  const { successError, loading, error } = useSelector(
    (state) => state.register
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(postUserRegister(user));

    if (res.error) {
      alert(res.error.message);
    } else if (res.payload.length) {
      alert(res.payload);
    } else {
      alert("Register Success");
      history.push("/login");
    }
  };

  return (
    <div>
      <HeaderTopBar />
      <HeaderMenu />
      <div className="register">
        <div className="register__wrap">
          <div className="register__inner">
            <div className="register__name">{t("authentication.register")}</div>
            <form className="register__form" onSubmit={onSubmit}>
              <input
                placeholder={t("admin.name")}
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
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
              <input
                placeholder={t("admin.phone")}
                type="text"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
              <select
                value={user.region}
                onChange={(e) => setUser({ ...user, region: e.target.value })}
              >
                <option value="" disabled>
                  {t("admin.region")}
                </option>
                <option value={t("admin.hcm")}>{t("admin.hcm")}</option>
                <option value={t("admin.hn")}>{t("admin.hn")}</option>
                <option value={t("admin.dn")}>{t("admin.dn")}</option>
              </select>
              <input
                type="date"
                value={user.birthday}
                onChange={(e) => setUser({ ...user, birthday: e.target.value })}
              />
              <select
                value={user.gender}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              >
                <option value="" disabled>
                  {t("admin.gender")}
                </option>
                <option value={t("admin.male")}>{t("admin.male")}</option>
                <option value={t("admin.female")}>{t("admin.female")}</option>
              </select>
              <button className="register__button--submit" type="submit">
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : error ? (
                  t("authentication.retry")
                ) : successError.length ? (
                  t("authentication.retry")
                ) : (
                  t("authentication.register")
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
