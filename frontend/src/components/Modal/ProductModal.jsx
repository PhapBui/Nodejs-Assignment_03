import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productActions } from "../../features/product/productSlice.js";
import "./ProductModal.scss";

const ProductModal = ({ product }) => {
  const dispatch = useDispatch();

  const handlerNavigate = (page) => {
    dispatch(productActions.hideProductDetailPopup());
  };

  return (
    <Row className="modal-inner">
      <Col>
        <img src={product.images[0]} alt={product.name} />
      </Col>
      <Col>
        <div className="product-detail">
          <h3>{product.name}</h3>
          <h4> {(+product.price).toLocaleString("vi-VI")} VND</h4>
          <p dangerouslySetInnerHTML={{ __html: product.long_desc }}></p>
        </div>
        <Button variant="secondary">
          <Link
            style={{ color: "inherit" }}
            onClick={handlerNavigate}
            to={`/detail/${product._id}`}
          >
            View Detail
          </Link>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductModal;
