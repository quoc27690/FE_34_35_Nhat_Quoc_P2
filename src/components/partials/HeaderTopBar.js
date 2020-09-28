import React from "react";
import { useTranslation } from "react-i18next";

const HeaderTopBar = () => {
  const { i18n } = useTranslation();

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__flex">
          <div className="topbar__search">
            <form className="topbar__search--form">
              <div className="input-append">
                <input placeholder="Movie search..." type="search" />
                <button>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="topbar__dkris">
            <div className="topbar__lr">
              <button className="topbar__lr--login">
                <i className="fa fa-user" aria-hidden="true"></i>Login
              </button>
              <button className="topbar__lr--register">
                <i className="fa fa-user-plus" aria-hidden="true"></i>Register
              </button>
            </div>
            <div className="topbar__language">
              <button
                className="topbar__language--vn"
                onClick={() => i18n.changeLanguage("vi")}
              >
                VN
              </button>
              <button
                className="topbar__language--en"
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
