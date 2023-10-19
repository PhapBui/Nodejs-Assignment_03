import request from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { orderActions } from "./orderSlice";

import { toast } from "react-toastify";
import orderApi from "@/api/orderApi";

function* getAllOrder() {
  try {
    const res = yield call(orderApi.getAllOrder);
    yield put(orderActions.fetchAllOrderSuccessfully(res.result));
    toast.success(res.message);
  } catch (error) {
    let message;
    if (request.isAxiosError(error)) {
      message = error.message;
    } else {
      message = error;
    }
    console.log(error);
    yield put(orderActions.fetchAllOrderFailed(message));
  }
}

function* getOrderById(action) {
  try {
    const res = yield call(orderApi.getOrderById, action.payload);
    if (res.status === 0) throw new Error(res.message);
    yield put(orderActions.getOrderByIdSuccess(res.result));
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
}

export default function* orderSaga() {
  yield takeLatest(orderActions.fetchAllOrderStart, getAllOrder);
  yield takeLatest(orderActions.getOrderById, getOrderById);
}
