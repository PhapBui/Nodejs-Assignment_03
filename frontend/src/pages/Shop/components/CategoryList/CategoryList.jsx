import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../../features/product/productSlice.js";
import { NavLink } from "react-router-dom";

import "./CategoryList.scss";

const Cates = [
  {
    title: "Iphone & Mac",
    items: [
      {
        name: "Iphone",
        value: "iPhone",
      },
      {
        name: "Ipad",
        value: "iPad",
      },
      {
        name: "Macbook",
        value: "Macbook",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        name: "Mouse",
        value: "Mouse",
      },
      {
        name: "Keyboard",
        value: "Keyboard",
      },
      {
        name: "Other",
        value: "Other",
      },
    ],
  },
  {
    title: "Wireless",
    items: [
      {
        name: "Air Pods",
        value: "Air Pods",
      },
      {
        name: "Watch",
        value: "Watch",
      },
    ],
  },
];

const CategoryList = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.products.activeCategory);

  const handlerFilterProduct = (e) => {
    const { value } = e.target.dataset;
    dispatch(productActions.getProductsByCategory(value));
  };
  return (
    <div className="sidebar">
      <h1 className="page-title">Category</h1>
      <h2 className="brand">Apple</h2>
      <li>
        <NavLink
          data-value={"all"}
          onClick={handlerFilterProduct}
          className={`${activeCategory === "all" ? "active-cate" : ""}`}
        >
          All
        </NavLink>
      </li>
      {Cates.map((cate) => (
        <div key={cate.title}>
          <h3>{cate.title}</h3>
          {cate.items.map((item) => (
            <li key={item.value}>
              <NavLink
                to={`?${item.value}`}
                data-value={item.value}
                onClick={handlerFilterProduct}
                className={`${
                  activeCategory === item.value ? "active-cate" : ""
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
/**  */
