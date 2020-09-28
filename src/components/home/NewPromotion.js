import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNewPromotion } from "../../redux/slice/newPromotionSlice";

const NewPromotion = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { promotion, loading, error } = useSelector((state) => state.promotion);

  useEffect(() => {
    dispatch(getNewPromotion());
  }, [dispatch]);

  return (
    <section className="new-promotion">
      <div className="container">
        <div className="title-section">
          <span className="seperator"></span>
          <h2 className="flat-title">
            <span className="flat-title__default">
              {t("titleSection.new")}{" "}
            </span>
            <span className="flat-title__color">
              {t("titleSection.promotion")}
            </span>
          </h2>
          <span className="seperator"></span>
        </div>
        <div className="new-promotion__grid">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            promotion.map((e, i) => (
              <div className="new-promotion__box" key={i}>
                <Link to="/">
                  <img src={e.image} alt="images" />
                </Link>
                <div className="new-promotion__decription">
                  <div className="new-promotion__info">
                    <h3 className="new-promotion__title">
                      <Link to="/">{e.name}</Link>
                    </h3>
                    <p>{e.content}</p>
                  </div>
                  <div className="new-promotion__button">
                    <Link to="/">DETAIL</Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default NewPromotion;
