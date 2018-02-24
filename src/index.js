// @flow

import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

const rootDomElement = document.getElementById("root");
if (rootDomElement === null) {
  throw new Error("No root element to bootstrap react applciation");
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDomElement
);

registerServiceWorker();
