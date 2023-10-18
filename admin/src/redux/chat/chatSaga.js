import { put, takeLatest } from "redux-saga/effects";
import { chatActions } from "./chatSlice";

function* fetchAllChatRooms(action) {
  try {
    yield put(chatActions.fetchAllChatRoomSuccessfully(action.payload));
  } catch (error) {
    console.log(error);
    yield put(chatActions.fetchAllChatRoomFailed());
  }
}

export default function* chatSaga() {
  yield takeLatest(chatActions.fetchAllChatRoomStart, fetchAllChatRooms);
}
