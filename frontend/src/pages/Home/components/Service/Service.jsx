import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Service.scss";
const Service = () => {
  return (
    <Row className="service">
      <Col className="left">
        <h3>Free Shipping</h3>
        <p>Free shipping Worlwide</p>
      </Col>
      <Col className="center">
        <h3>24 x 7 Service</h3>
        <p>Free shipping Worlwide</p>
      </Col>
      <Col className="right">
        <h3>Festival Offer</h3>
        <p>Free shipping Worlwide</p>
      </Col>
    </Row>
  );
};

export default Service;
