import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__grid">
            <div className="widget__col">
              <div className="widget__logo">
                <Link to="/" title="Logo">
                  <img src="../assets/images/logo/02.png" alt="images" />
                </Link>
              </div>
              <p className="widget__description">{t("widget.description")}</p>
              <div className="widget__list-social">
                <Link to="/">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            {/*widget__col*/}
            <div className="widget__col">
              <h3 className="widget__title">{t("widget.introduce")}</h3>
              <ul className="widget__menu">
                <li className="widget__menu--items">
                  <Link to="/" className="widget__menu--link">
                    {t("widget.aboutUs")}
                  </Link>
                </li>
                <li className="widget__menu--items">
                  <Link to="/" className="widget__menu--link">
                    {t("widget.convenient")}
                  </Link>
                </li>
                <li className="widget__menu--items">
                  <Link to="/" className="widget__menu--link">
                    {t("widget.regulation")}
                  </Link>
                </li>
                <li className="widget__menu--items">
                  <Link to="/" className="widget__menu--link">
                    {t("widget.privacyPolicy")}
                  </Link>
                </li>
              </ul>
            </div>
            {/*widget__col*/}
            <div className="widget__col">
              <h3 className="widget__title">{t("widget.cinemaCorner")}</h3>
              <ul className="widget__menu">
                <li className="widget__menu--items">
                  <Link to="/" className="widget__menu--link">
                    {t("widget.movieGenre")}
                  </Link>
                </li>
                <li className="widget__menu--items">
                  <Link to="/" className="widget__menu--link">
                    {t("widget.movieCommentary")}
                  </Link>
                </li>
                <li className="widget__menu--items">
                  <Link to="/" className="widget__menu--link">
                    {t("widget.blogMovies")}
                  </Link>
                </li>
                <li className="widget__menu--items">
                  <Link to="/" className="widget__menu--link">
                    {t("widget.movieMonth")}
                  </Link>
                </li>
              </ul>
            </div>
            {/*widget__col*/}
            <div className="widget__col">
              <h3 className="widget__title">{t("widget.support")}</h3>
              <ul className="widget__contacts">
                <li className="widget__contacts--list">
                  <Link to="/" className="widget__contacts--address">
                    {t("widget.address")}
                  </Link>
                </li>
                <li className="widget__contacts--list">
                  <Link to="/" className="widget__contacts--email">
                    {t("widget.gmail")}
                  </Link>
                </li>
                <li className="widget__contacts--list">
                  <Link to="/" className="widget__contacts--phone">
                    {t("widget.phone")}
                  </Link>
                </li>
              </ul>
            </div>
            {/*widget__col*/}
          </div>
        </div>
      </div>
      <div className="bottom text-center">
        <h4 className="bottom__name">CINEMA</h4>
      </div>
    </footer>
  );
};

export default Footer;
