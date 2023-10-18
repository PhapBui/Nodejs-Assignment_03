import { useDispatch, useSelector } from "react-redux";
import FormProduct from "../../components/form/product/formProduct";
import {
  productActions,
  selectLoading,
  selectProductList,
} from "../../redux/product/productSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const AddEditProduct = () => {
  const [formMode, setFormMode] = useState("Create");

  const product = useSelector((state) => state.product.product);
  const loading = useSelector(selectLoading);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const productId = searchParams.get("productId");

  const productList = useSelector(selectProductList);

  useEffect(() => {
    if (productId) {
      dispatch(productActions.fetchProductByIdStart(productId));
      setFormMode("Update");
    } else {
      dispatch(productActions.createNewProductSuccess());
      setFormMode("Create");
    }
  }, [productId, dispatch, productList]);

  const handleCreateNewProduct = (product) => {
    if (formMode === "Create") {
      dispatch(productActions.createNewProductStart(product));
    } else {
      dispatch(productActions.updateProductStart({ product, productId }));
    }
    console.log(product);
  };
  return (
    <FormProduct
      initProduct={product}
      handlerFormSubmit={handleCreateNewProduct}
      formMode={formMode}
      loading={loading}
    />
  );
};

export default AddEditProduct;
