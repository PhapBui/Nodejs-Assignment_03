import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductById,
  fetchRelateList,
} from "../../features/product/productSlice.js";
import Description from "./components/Description/Description.jsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.jsx";
import Relate from "./components/Relate/Relate.jsx";
import { isObjectEmpty } from "../../util/checkObjectEmpty.js";

const Detail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.getProductById);
  const relateList = useSelector((state) => state.products.relateList);

  const { productId } = useParams();

  const { category } = product;

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (category) {
      dispatch(fetchRelateList(category));
    }
  }, [dispatch, category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(product);
  return (
    <Container as="main">
      {!isObjectEmpty(product) ? (
        <>
          <ProductInfo productData={product} />
          <Description text={product.long_desc} />
          <Relate productList={relateList} />
        </>
      ) : (
        <h3>This product not exist</h3>
      )}
    </Container>
  );
};

export default Detail;
