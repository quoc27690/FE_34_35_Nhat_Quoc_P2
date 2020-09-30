import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import usersApi from "../../api/usersApi";
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
import {
  addUser,
  updateUser,
} from "../../redux/slice/adminUsersManagementSlice";

export default function AdminUserAddEdit() {
  const { t } = useTranslation("common");

  const { userId } = useParams();

  const history = useHistory();

  const dispatch = useDispatch();

  const userEdit = useSelector((state) =>
    state.users.users.find((e) => e.id === parseInt(userId))
  );

  const {
    name,
    email,
    password,
    phone,
    region,
    birthday,
    gender,
  } = useSelector((state) => state.userAddEdit);

  useEffect(() => {
    if (userId) {
      dispatch(getAll(userEdit));
    } else {
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
    }
  }, [dispatch, userEdit, userId]);

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

    if (!userId) {
      dispatch(addUser(newUser));
      await usersApi.postUser(newUser);
    } else {
      dispatch(updateUser(newUser));
      await usersApi.putUser(userId, newUser);
    }

    history.push("/admin/usersManagement");
  };

  return (
    <div className="admin-user-add-edit">
      <form onSubmit={onSubmit}>
        <label>{t("admin.name")}</label>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(getName(e.target.value))}
        />
        <label>{t("admin.email")}</label>
        <input
          type="text"
          value={email}
          onChange={(e) => dispatch(getEmail(e.target.value))}
        />
        <label>{t("admin.password")}</label>
        <input
          type="password"
          value={password}
          onChange={(e) => dispatch(getPassword(e.target.value))}
        />
        <label>{t("admin.phone")}</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => dispatch(getPhone(e.target.value))}
        />
        <label>{t("admin.region")}</label>
        <select
          value={region}
          onChange={(e) => dispatch(getRegion(e.target.value))}
        >
          <option value="" disabled></option>
          <option value={t("admin.hcm")}>{t("admin.hcm")}</option>
          <option value={t("admin.hn")}>{t("admin.hn")}</option>
          <option value={t("admin.dn")}>{t("admin.dn")}</option>
        </select>
        <label>{t("admin.birthday")}</label>
        <input
          type="date"
          value={birthday}
          onChange={(e) => dispatch(getBirthday(e.target.value))}
        />
        <label>{t("admin.gender")}</label>
        <select
          value={gender}
          onChange={(e) => dispatch(getGender(e.target.value))}
        >
          <option value="" disabled></option>
          <option value="male">{t("admin.male")}</option>
          <option value="female">{t("admin.female")}</option>
        </select>

        <button className="submit" type="submit">
          {userId ? t("admin.editUser") : t("admin.addUser")}
        </button>
      </form>
    </div>
  );
}
