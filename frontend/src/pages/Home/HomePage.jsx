import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container.js";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../app/productApi.js";
import Subcribe from "../../components/Form/Subcribe/Subcribe.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import { productActions } from "../../features/product/productSlice.js";
import Banner from "./components/Banner/Banner.jsx";
import Category from "./components/Category/Category.jsx";
import Service from "./components/Service/Service.jsx";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productList);

  useEffect(() => {
    const fetchData = async () => {
      const res = await productApi.getAll();

      dispatch(productActions.getAllProduct(res.result));
    };
    fetchData();
  }, [dispatch]);
  return (
    <Container as="main">
      <Banner />
      <Category />
      <ProductList productList={products} col={4} title={true} modal={true} />
      <Service />
      <Subcribe />
    </Container>
  );
};

export default Home;
