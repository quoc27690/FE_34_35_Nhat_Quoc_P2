import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getChange } from "../../redux/slice/i18nSlice";
import { getMovieSearch } from "../../redux/slice/searchMovieSlice";

const HeaderTopBar = () => {
  const { t, i18n } = useTranslation("common");
  const history = useHistory();
  const dispatch = useDispatch();
  const { listMovie, loading, error } = useSelector(
    (state) => state.searchMovie
  );
  const { status } = useSelector((state) => state.i18n);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getMovieSearch(search));
  }, [dispatch, search]);

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
  };

  const showMovieSearch = () => {
    return listMovie.map((e, i) => (
      <li key={i}>
        <Link to={`/movie-detail/${e.id}`}>
          <img src={e.image} alt="" />
          <p>{e.name}</p>
        </Link>
      </li>
    ));
  };

  const handleVi = () => {
    i18n.changeLanguage("vi");
    dispatch(getChange(true));
  };

  const handleEn = () => {
    i18n.changeLanguage("en");
    dispatch(getChange(false));
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__flex">
          <div className="topbar__search">
            {error ? (
              <p>
                {t("headerTopBar.search")} : {error.message}
              </p>
            ) : (
              <form className="topbar__search--form">
                <div className="input-append">
                  <input
                    placeholder={
                      loading
                        ? t("headerTopBar.loading")
                        : t("headerTopBar.search")
                    }
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button>
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            )}

            {search ? <ul>{showMovieSearch()}</ul> : ""}
          </div>
          <div className="topbar__dkris">
            {token ? (
              <div className="topbar__lr">
                <Link to="/" onClick={handleLogOut}>
                  <i className="fa fa-sign-out"></i>
                  {t("authentication.logout")}
                </Link>
              </div>
            ) : (
              <div className="topbar__lr">
                <Link to="/login" className="topbar__lr--login">
                  <i className="fa fa-user"></i>
                  {t("authentication.login")}
                </Link>

                <Link to="/register" className="topbar__lr--register">
                  <i className="fa fa-user-plus"></i>
                  {t("authentication.register")}
                </Link>
              </div>
            )}

            <div className="topbar__language">
              <button
                className={
                  status === true
                    ? "topbar__language--vn active"
                    : "topbar__language--vn"
                }
                onClick={handleVi}
              >
                VN
              </button>
              <button
                className={
                  status === false
                    ? "topbar__language--en active"
                    : "topbar__language--en"
                }
                onClick={handleEn}
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
