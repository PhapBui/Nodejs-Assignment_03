import request from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { productActions } from "./productSlice";

import { toast } from "react-toastify";
import { productApi } from "@/api/productApi";
import router from "@/routes/routes";

// get all Product
function* getAllProduct() {
  try {
    const res = yield call(productApi.getAllProduct);
    yield put(productActions.fetchAllProductSuccessfully(res.result));
    toast.success(res.message);
  } catch (error) {
    let message;
    if (request.isAxiosError(error)) {
      message = error.message;
    } else {
      message = error;
    }
    console.log(error);
    yield put(productActions.fetchAllProductFailed(message));
  }
}
// get product by id
function* getProductById(action) {
  try {
    const res = yield call(productApi.getProductById, action.payload);
    if (res.status === 0) throw new Error(res.message);
    yield put(productActions.fetchProductByIdSuccess(res.result));
  } catch (error) {
    yield put(productActions.fetchProductByIdFailed());
    console.log(error);
  }
}
// create new product
function* createNewProduct(action) {
  try {
    const res = yield call(productApi.createNewProduct, action.payload);
    if (res.status === 0) throw new Error(res.message);
    yield put(productActions.createNewProductSuccess());
    yield router.navigate("/products");
  } catch (error) {
    console.log(error);
    yield put(productActions.createNewProductFailed());
  }
}
// update product
function* updateProduct(action) {
  try {
    const res = yield call(productApi.updateProduct, action.payload);
    if (res.status === 0) throw new Error(res.message);
    yield put(productActions.createNewProductSuccess());
    yield router.navigate("/products");
  } catch (error) {
    console.log(error);
    yield put(productActions.createNewProductFailed());
  }
}

//delete product
function* deleteProduct(action) {
  try {
    const res = yield call(productApi.deleteProductById, action.payload);
    if (res.status === 0) throw new Error(res.message);
    yield put(productActions.removeProductByIdSuccess(action.payload));
    toast.success("Remove product success");
  } catch (err) {
    console.log(err);
    yield put(productActions.removeProductByIdFailed());
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchAllProductStart, getAllProduct);
  yield takeLatest(productActions.createNewProductStart, createNewProduct);
  yield takeLatest(productActions.fetchProductByIdStart, getProductById);
  yield takeLatest(productActions.updateProductStart, updateProduct);
  yield takeLatest(productActions.removeProductByIdStart, deleteProduct);
}
