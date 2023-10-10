import React from "react";
import Row from "react-bootstrap/esm/Row.js";
import Product from "../../../../components/Product/Product.jsx";
import { Link } from "react-router-dom";

import "./Relate.scss";

const Relate = ({ productList }) => {
  return (
    <Row className="relate">
      <h3>Related Products</h3>
      <div className="relate-list">
        {productList.map((product) => (
          <Link
            to={`/detail/${product._id}`}
            key={product._id}
            className="relate-product"
          >
            <Product productData={product} />
          </Link>
        ))}
      </div>
    </Row>
  );
};

export default Relate;
