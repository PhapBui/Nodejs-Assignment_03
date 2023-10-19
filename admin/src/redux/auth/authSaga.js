import request from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { authActions } from "./authSlice";
import { toast } from "react-toastify";
import { authApi } from "@/api/authApi";

function* login(action) {
  try {
    const res = yield call(authApi.login, action.payload);
    if (res.status === 0) throw new Error(res.message);
    yield put(authActions.loginSuccessfully(res.result));
    toast.success(res.message);
  } catch (error) {
    let message;
    if (request.isAxiosError(error)) {
      message = error.message;
    } else {
      message = error;
    }
    console.log(error);
    toast.error(message);
    yield put(authActions.loginFailed(message));
  }
}

function* statistic() {
  try {
    const res = yield call(authApi.getStatistic);
    if (res.status === 0) throw new Error(res.message);
    yield put(authActions.fetchStatisticSuccess(res.result));
  } catch (error) {
    yield put(authActions.fetchStatisticFailed());
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.loginStart, login);
  yield takeLatest(authActions.fetchAllUserStart, statistic);
}
