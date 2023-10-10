import { all } from "redux-saga/effects";
import productSaga from "../redux/product/productSaga";
import authSaga from "../redux/auth/authSaga";

export default function* rootSaga() {
  yield all([productSaga(), authSaga()]);
}
