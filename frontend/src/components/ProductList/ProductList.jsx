import React from "react";
import "./ProductList.scss";
import { useDispatch, useSelector } from "react-redux";

import Product from "../Product/Product.jsx";
import {
  isShowDetailPopup,
  productActions,
} from "../../features/product/productSlice.js";
import Overlay from "../Modal/RootOverlay.jsx";
import ProductModal from "../Modal/ProductModal.jsx";
import RootModal from "../Modal/RootModal.jsx";
import { Link } from "react-router-dom";

const ProductList = ({ productList, col, title = false, modal = false }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.product);
  const isShow = useSelector(isShowDetailPopup);

  const handlerProductDetail = (productId) => {
    dispatch(productActions.getProductDetail(productId));
    dispatch(productActions.showProductDetailPopup());
  };

  const El = () => (
    <Overlay>
      <ProductModal product={product} />
    </Overlay>
  );
  return (
    <div className="product__list">
      {title && (
        <header>
          <div className="subtitle">Made The Hard Way</div>
          <div className="title">Top Trending Products</div>
        </header>
      )}
      <div className="products">
        {productList &&
          productList.map((product) =>
            modal ? (
              <div style={{ width: 100 / col + "%" }} key={product._id}>
                <Product
                  productData={product}
                  handlerProductDetail={() => handlerProductDetail(product._id)}
                  col={col}
                />
              </div>
            ) : (
              <Link
                key={product._id}
                to={`/detail/${product._id}`}
                style={{ width: 100 / col + "%" }}
              >
                <Product productData={product} col={col} />
              </Link>
            )
          )}
      </div>
      {isShow && modal && RootModal(El)}
    </div>
  );
};

export default ProductList;
