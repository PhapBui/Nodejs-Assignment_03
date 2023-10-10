import request from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { productActions } from "./productSlice";

import { toast } from "react-toastify";
import { productApi } from "../../api/productApi";

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

export default function* productSaga() {
  yield takeLatest(productActions.fetchAllProductStart, getAllProduct);
}
