import React from "react";
import Card from "react-bootstrap/Card";
import "./Product.scss";
import { currency } from "../../util/currency.js";

const Product = ({ productData, handlerProductDetail }) => {
  const handleClick = () => {
    if (handlerProductDetail) handlerProductDetail(productData._id.$oid);
  };
  return (
    <Card
      className="product"
      onClick={handleClick}
    >
      <Card.Img
        variant="top"
        src={productData.img1}
      />
      <Card.Body>
        <Card.Title className="product__name">{productData.name}</Card.Title>
        <Card.Text className="product__price">
          {currency(productData.price)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
