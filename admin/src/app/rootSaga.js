import { all } from "redux-saga/effects";
import productSaga from "../redux/product/productSaga";
import authSaga from "../redux/auth/authSaga";
import orderSaga from "../redux/order/orderSaga";
import categorySaga from "../redux/category/categorySaga";
import chatSaga from "../redux/chat/chatSaga";

export default function* rootSaga() {
  yield all([
    productSaga(),
    authSaga(),
    orderSaga(),
    categorySaga(),
    chatSaga(),
  ]);
}
