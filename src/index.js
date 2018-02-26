// @flow

import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";
import invariant from "invariant";

import "normalize.css";
import "~/styles/global.scss";

const rootDomElement = document.getElementById("root");
invariant(rootDomElement, "No root element to bootstrap react applciation");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootDomElement
);

registerServiceWorker();
