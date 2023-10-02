import React from "react";
import { Link } from "react-router-dom";

import { images } from "../../../../assets/img/index.js";

import "./Category.scss";

const Category = () => {
  return (
    <div className="category__list">
      <header>
        <div className="subtitle">Carefully Created Collections</div>
        <div className="title">Browse Our Categories</div>
      </header>
      <div className="categories">
        <div className="category__item">
          <Link to="/shop">
            <img
              src={images.product1}
              alt="category1"
            />
          </Link>
        </div>
        <div className="category__item">
          <Link to="/shop">
            <img
              src={images.product2}
              alt="category2"
            />
          </Link>
        </div>
        <div className="category__item">
          <Link to="/shop">
            <img
              src={images.product3}
              alt="category3"
            />
          </Link>
        </div>
        <div className="category__item">
          <Link to="/shop">
            <img
              src={images.product4}
              alt="category4"
            />
          </Link>
        </div>
        <div className="category__item">
          <Link to="/shop">
            <img
              src={images.product5}
              alt="category5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
