import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./UserActions.scss";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";

const UserActions = ({ itemsCount }) => {
  return (
    <Row className="user-actions">
      <Col className="action continue-shopping">
        <Link to="/shop">
          <BsArrowLeft />
          <span>Continue Shopping</span>
        </Link>
      </Col>
      {itemsCount && (
        <Col className="action proceed-checkout">
          <Link to="/checkout">
            <span>Proceed to checkout</span>
            <BsArrowRight />
          </Link>
        </Col>
      )}
    </Row>
  );
};

export default UserActions;
