import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import moviesApi from "../../api/moviesApi";
import {
  getSearchMovie,
  getListMovie,
} from "../../redux/slice/searchMovieSlice";

const HeaderTopBar = () => {
  const { t, i18n } = useTranslation("common");

  const history = useHistory();

  const dispatch = useDispatch();

  const { searchMovie, listMovie } = useSelector((state) => state.searchMovie);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getMovieSearch() {
      const movieListSearch = await moviesApi.getMovieSearch(searchMovie);
      dispatch(getListMovie(movieListSearch));
    }
    getMovieSearch();
  }, [dispatch, searchMovie]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const showMovieSearch = () => {
    return listMovie.map((e, i) => (
      <li key={i}>
        <Link to={`/movie/${e.id}`}>
          <img src={e.image} alt="" />
          <p>{e.name}</p>
        </Link>
      </li>
    ));
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__flex">
          <div className="topbar__search">
            <form className="topbar__search--form">
              <div className="input-append">
                <input
                  placeholder={t("headerTopBar.search")}
                  type="search"
                  value={searchMovie}
                  onChange={(e) => dispatch(getSearchMovie(e.target.value))}
                />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
            {searchMovie ? <ul>{showMovieSearch()}</ul> : ""}
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
