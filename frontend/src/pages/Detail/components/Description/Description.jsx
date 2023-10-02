import React from "react";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js";

const Description = ({ text }) => {
  return (
    <Row>
      <Col>
        <h3>Product Description</h3>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Col>
    </Row>
  );
};

export default Description;
