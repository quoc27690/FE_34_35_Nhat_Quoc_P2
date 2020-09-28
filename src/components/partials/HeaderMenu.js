import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const HeaderMenu = () => {
  const { t } = useTranslation("common");

  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__flex">
          <div className="header__logo">
            <Link to="/" title="Logo">
              <img src="../assets/images/logo/01.png" alt="images" />
            </Link>
          </div>
          <div className="menu__content">
            <div className="menu__nav">
              <nav>
                <ul className="menu">
                  <li className="menu__list">
                    <Link
                      to="/"
                      className={
                        location.pathname === "/"
                          ? "menu__list--link active"
                          : "menu__list--link"
                      }
                    >
                      {t("menu.home")}
                    </Link>
                  </li>
                  <li className="menu__list">
                    <Link
                      to="/movies-list"
                      className={
                        location.pathname === "/movies-list"
                          ? "menu__list--link active"
                          : "menu__list--link"
                      }
                    >
                      {t("menu.movie")}
                    </Link>
                  </li>
                  <li className="menu__list">
                    <Link
                      to="/member"
                      className={
                        location.pathname === "/member"
                          ? "menu__list--link active"
                          : "menu__list--link"
                      }
                    >
                      {t("menu.member")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
