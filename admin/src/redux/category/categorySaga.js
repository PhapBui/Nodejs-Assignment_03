import { call, put, takeLatest } from "redux-saga/effects";
import { categoryActions } from "./categorySlice";
import { categoryApi } from "@/api/categoryApi";

function* fetchAllCategory() {
  try {
    const res = yield call(categoryApi.getAllCategory);
    if (res.status === 0) throw new Error(res.message);
    yield put(categoryActions.fetchAllCategorySuccessfully(res.result));
  } catch (error) {
    console.log(error);
    yield put(categoryActions.fetchAllCategoryFailed(error));
  }
}

export default function* categorySaga() {
  yield takeLatest(categoryActions.fetchAllCategoryStart, fetchAllCategory);
}
