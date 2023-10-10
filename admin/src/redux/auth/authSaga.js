import request from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { authActions } from "./authSlice";
import { authApi } from "../../api/authApi";

function* login(action) {
  try {
    const res = yield call(authApi.login, action.payload);
    if (res.status === 0) throw new Error(res.message);
    yield put(authActions.loginSuccessfully(res.result));
  } catch (error) {
    let message;
    if (request.isAxiosError(error)) {
      message = error.message;
    } else {
      message = error;
    }
    console.log(error);
    yield put(authActions.loginFailed(message));
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.loginStart, login);
}
