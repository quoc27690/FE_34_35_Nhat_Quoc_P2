import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, putUser } from "../../redux/slice/adminUserAddEditSlice";

const MemberChild = () => {
  const { t } = useTranslation("common");
  const history = useHistory();
  const dispatch = useDispatch();
  const { loadingGetUser, loading, error } = useSelector(
    (state) => state.userAddEdit
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    region: "",
    birthday: "",
    gender: "",
  });
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    } else {
      const base64Url = token.split(".")[1];
      const getValueToToken = JSON.parse(atob(base64Url));
      const getIdToToken = getValueToToken.sub;
      async function getDataUser() {
        const res = await dispatch(getUser(getIdToToken));
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
      getDataUser();
      setUserId(getIdToToken);
    }
  }, [dispatch, history]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await dispatch(putUser({ userId, user }));
    alert(t("member.success"));
    history.push("/");
  };

  return (
    <div className="member__bg">
      {loadingGetUser ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div className="container">
          <div className="member__info">
            <form onSubmit={onSubmit}>
              <label>{t("member.name")}</label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <label>{t("member.email")}</label>
              <input
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label>{t("member.password")}</label>
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label>{t("member.phone")}</label>
              <input
                type="text"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
              <label>{t("member.region")}</label>
              <select
                value={user.region}
                onChange={(e) => setUser({ ...user, region: e.target.value })}
              >
                <option value="" disabled></option>
                <option value={t("member.hcm")}>{t("member.hcm")}</option>
                <option value={t("member.hn")}>{t("member.hn")}</option>
                <option value={t("member.dn")}>{t("member.dn")}</option>
              </select>
              <label>{t("member.birthday")}</label>
              <input
                type="date"
                value={user.birthday}
                onChange={(e) => setUser({ ...user, birthday: e.target.value })}
              />
              <label>{t("member.gender")}</label>
              <select
                value={user.gender}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              >
                <option value="" disabled></option>
                <option value="male">{t("member.male")}</option>
                <option value="female">{t("member.female")}</option>
              </select>
              <div>
                <button type="submit">
                  {loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : error ? (
                    t("authentication.retry")
                  ) : (
                    t("member.save")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberChild;
