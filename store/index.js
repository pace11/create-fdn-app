import "regenerator-runtime/runtime";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducer";
import rootSaga from "./actions";

const reduxTool = require("redux-devtools-extension");

const bindMiddleware = (middleware) => {

	if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") {

		const { composeWithDevTools } = reduxTool;
		return composeWithDevTools(applyMiddleware(...middleware));

	}

	return applyMiddleware(...middleware);

};

export const makeStore = () => {

	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

	store.sagaTask = sagaMiddleware.run(rootSaga);
	return store;

};

export const wrapper = createWrapper(makeStore, { debug: false });
