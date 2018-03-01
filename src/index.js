// @flow

import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import invariant from "invariant";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import App from "./components/App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";
import muiTheme from "~/styles/muiTheme";

import "normalize.css";
import "typeface-roboto";
import "~/styles/global.scss";

const rootDomElement = document.getElementById("root");
invariant(rootDomElement, "No root element to bootstrap react applciation");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  rootDomElement
);

registerServiceWorker();
