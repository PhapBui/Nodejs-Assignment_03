import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";
import { images } from "../../../../assets/img/index.js";
const Banner = () => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${images.banner})` }}
    >
      <div className="content">
        <div className="title">New Inspiration 2020</div>
        <h3 className="sologan">20% Off On New Season</h3>
        <Link
          className="cta"
          to="/shop"
        >
          Browse collections
        </Link>
      </div>
    </div>
  );
};

export default Banner;
