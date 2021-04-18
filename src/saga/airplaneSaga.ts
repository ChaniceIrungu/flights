import { call, put, takeEvery } from "redux-saga/effects";
import * as airplaneActions from "../store/actionName/actionNames";
import * as API from "../api/axiosAPIs";

function* getMainInfo(): Generator<any> {
  try {
    const mainOption: any = yield call(API.getAllFlights);
    yield put({ type: "GET_MAIN_INFO_FETCH", payLoad: mainOption.data });
  } catch (e) {
    yield put({ type: "GET_MAIN_INFO_FETCH_FAILED" });
  }
}
export default function* mySaga() {
  yield takeEvery(airplaneActions.GET_MAIN_INFO, getMainInfo);
}
