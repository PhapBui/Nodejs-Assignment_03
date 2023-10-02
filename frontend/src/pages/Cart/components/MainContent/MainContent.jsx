import React from "react";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js";
import { useSelector } from "react-redux";

import ProductList from "../ProductList/ProductList.jsx";
import CartDetail from "../CartDetail/CartDetail.jsx";
import UserActions from "../UserActions/UserActions.jsx";

const MainContent = () => {
  const cartProductList = useSelector((state) => state.cart.listItem);
  const subTotal = cartProductList.reduce(
    (a, b) => a + +b.price * b.quantity,
    0
  );
  return (
    <Row>
      <Col md="8">
        <ProductList productList={cartProductList} />
        <UserActions />
      </Col>
      <Col md="4">
        <CartDetail subTotal={subTotal} />
      </Col>
    </Row>
  );
};

export default MainContent;
