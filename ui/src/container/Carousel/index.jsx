import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { PAGE_URL } from "../../constants";
import "./carousel.scss";

const Carousel = ({ banners }) => {
  const [currentIndex, updateCurrentIndex] = useState(0);

  const changeImage = (index) => {
    if (index === -1 && currentIndex > 0) updateCurrentIndex(0);
    if (index === banners.length && currentIndex < banners.length - 1) {
      updateCurrentIndex(banners.length - 1);
    }
    if (index >= 0 && index < banners.length && updateCurrentIndex !== index) {
      updateCurrentIndex(index);
    }
  };

  const dots = banners.map((banner, index) => {
    return (
      <button
        className={`dot ${currentIndex === index ? "dot-fill" : ""}`}
        onClick={() => changeImage(index)}
        key={`dots-${banner.id}`}
      >
        &nbsp;
      </button>
    );
  });

  return (
    <div className="carousel">
      <Link to={PAGE_URL.PRODUCT_LIST} className="link">
        <img
          src={banners[currentIndex].bannerImageUrl}
          alt={banners[currentIndex].bannerImageAlt}
          className="background-image"
        />
      </Link>
      <button
        className="buttons prev"
        onClick={() => changeImage(currentIndex - 1)}
      >
        PREV
      </button>
      <button
        className="buttons next"
        onClick={() => changeImage(currentIndex + 1)}
      >
        NEXT
      </button>
      <div className="dots">{dots}</div>
    </div>
  );
};

Carousel.propTypes = {
  banners: PropTypes.array.isRequired,
};

export default Carousel;
