import React, { useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSlides } from "../../redux/slice/slidesSlice";

const Slider = () => {
  const dispatch = useDispatch();

  const { slides, loading, error } = useSelector((state) => state.slides);

  useEffect(() => {
    dispatch(getSlides());
  }, [dispatch]);

  return (
    <div className="slider">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <Fade>
          {slides.map((e, i) => (
            <div className="slider__image" key={i}>
              <img src={e.image} alt="images" />
            </div>
          ))}
        </Fade>
      )}
    </div>
  );
};

export default Slider;
