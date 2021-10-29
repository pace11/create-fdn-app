import { fork } from "redux-saga/effects";
import { dispatchSelf } from "@fdn/profile_store";

export default function* rootSaga() {

	yield fork(dispatchSelf);

}
