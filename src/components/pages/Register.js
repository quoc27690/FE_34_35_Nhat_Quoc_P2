import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import authApi from "../../api/authApi";
import {
  getAll,
  getBirthday,
  getEmail,
  getGender,
  getName,
  getPassword,
  getPhone,
  getRegion,
} from "../../redux/slice/adminUserAddEditSlice";
import HeaderMenu from "../partials/HeaderMenu";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function Register() {
  const { t } = useTranslation("common");

  const history = useHistory();

  const dispatch = useDispatch();

  const {
    name,
    email,
    password,
    phone,
    region,
    birthday,
    gender,
  } = useSelector((state) => state.register);

  useEffect(() => {
    const emptyUser = {
      name: "",
      email: "",
      password: "",
      phone: "",
      region: "",
      birthday: "",
      gender: "",
    };
    dispatch(getAll(emptyUser));
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      phone,
      region,
      birthday,
      gender,
    };
    const res = await authApi.postUserRegister(newUser);

    if (res.length) {
      alert(res);
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
                value={name}
                onChange={(e) => dispatch(getName(e.target.value))}
              />
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
              <input
                placeholder={t("admin.phone")}
                type="text"
                value={phone}
                onChange={(e) => dispatch(getPhone(e.target.value))}
              />
              <select
                value={region}
                onChange={(e) => dispatch(getRegion(e.target.value))}
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
                value={birthday}
                onChange={(e) => dispatch(getBirthday(e.target.value))}
              />
              <select
                value={gender}
                onChange={(e) => dispatch(getGender(e.target.value))}
              >
                <option value="" disabled>
                  {t("admin.gender")}
                </option>
                <option value={t("admin.male")}>{t("admin.male")}</option>
                <option value={t("admin.female")}>{t("admin.female")}</option>
              </select>
              <button className="register__button--submit" type="submit">
                {t("authentication.register")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
