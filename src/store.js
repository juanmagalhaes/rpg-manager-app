// @flow

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import reducers from "./reducers";

const middlewares = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ["PENDING", "SUCCESS", "FAILURE"]
  })
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default createStore(reducers, applyMiddleware(...middlewares));
