import React, { useEffect } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col.js";
import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/esm/Row.js";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../app/productApi.js";
import PaginationRoot from "../../components/Pagination/Pagination.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import { productActions } from "../../features/product/productSlice.js";
import Banner from "./components/Banner/Banner.jsx";
import CategoryList from "./components/CategoryList/CategoryList.jsx";

import "./ShopPage.scss";

const Shop = () => {
  const dispatch = useDispatch();
  const getProductsByCategory = useSelector(
    (state) => state.products.filterProduct
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await productApi.getAll();
      dispatch(productActions.getAllProduct(res));
      dispatch(productActions.getProductsByCategory("all"));
    };
    fetchData();
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container as="main">
      <Banner />
      <Row>
        <Col lg={3}>
          <CategoryList />
        </Col>
        <Col lg={9}>
          <Row>
            <Col style={{ marginBottom: 16 }}>
              <input
                type="text"
                placeholder="Enter Search Here!"
                style={{
                  outline: "none",
                  border: "1px solid #9d9d9d",
                  padding: 8,
                }}
              />
            </Col>
            <Col>
              <Form.Select aria-label="Default select example">
                <option>Default sorting</option>
                <option value="1">Asc</option>
                <option value="2">Desc</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <ProductList
              productList={getProductsByCategory}
              col={3}
            />
            <div className="product-footer">
              <PaginationRoot />
              <p>Show 1-9 of 9 results</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
