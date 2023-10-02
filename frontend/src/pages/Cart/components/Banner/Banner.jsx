import React from "react";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js";

import "./Banner.scss";
const Banner = ({ pagename, breadcrumb }) => {
  return (
    <Row className="backdrop">
      <Col className="left">{pagename}</Col>
      <Col className="right">{breadcrumb}</Col>
    </Row>
  );
};

export default Banner;
