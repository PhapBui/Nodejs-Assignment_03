import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getRelateList,
  productActions,
} from "../../features/product/productSlice.js";
import Description from "./components/Description/Description.jsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.jsx";
import Relate from "./components/Relate/Relate.jsx";
import { isObjectEmpty } from "../../util/checkObjectEmpty.js";
import productApi from "../../app/productApi.js";

const Detail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const relateList = useSelector(getRelateList);

  const { productId } = useParams();

  const { category } = product;

  useEffect(() => {
    if (!productId) return;
    const getProductById = async () => {
      try {
        const res = await productApi.getById(productId);
        dispatch(productActions.fetchProductById(res.result));
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, [dispatch, productId]);

  useEffect(() => {
    if (!category) return;
    const getProductById = async () => {
      try {
        const res = await productApi.getByCategory(category);

        dispatch(productActions.fetchRelatedProduct(res.result));
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, [dispatch, category]);

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
