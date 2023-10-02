import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Subcribe.scss";
const Subcribe = () => {
  return (
    <Row className="subcribe">
      <Col>
        <div className="left">
          <h3>Let's Be Friends!</h3>
          <p>Nisi nisi tempor consequat laboris nisi</p>
        </div>
      </Col>

      <Col>
        <div className="right">
          <input placeholder="Enter your email address" />
          <button>Subcribe</button>
        </div>
      </Col>
    </Row>
  );
};

export default Subcribe;
