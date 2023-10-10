import React from "react";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js";
import { useDispatch } from "react-redux";

import "./ProductInfo.scss";
import AddToCard from "../../../../components/Form/AddToCard/AddToCard.jsx";
import { currency } from "../../../../util/currency.js";
import { cartActions } from "../../../../features/cart/cartSlice.js";

const ProductInfo = ({ productData }) => {
  const dispatch = useDispatch();

  const handlerAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <Row className="product__info">
      <Col className="product__info-left">
        <Row>
          <Col lg={3}>
            {productData.images?.map((img, i) => (
              <img key={i} src={img} alt={productData.name} />
            ))}
          </Col>
          <Col lg={9}>
            <img src={productData.images[0]} alt={productData.name} />
          </Col>
        </Row>
      </Col>
      <Col className="product__info-right">
        <h3>{productData.name}</h3>
        <p>{currency(productData.price)}</p>
        <p dangerouslySetInnerHTML={{ __html: productData.short_desc }} />
        <div>
          <span>Category: </span>
          <span>{productData.category}</span>
        </div>
        <div>
          <AddToCard product={productData} onSubmit={handlerAddToCart} />
        </div>
      </Col>
    </Row>
  );
};

export default ProductInfo;
