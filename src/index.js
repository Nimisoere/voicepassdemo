import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import "core-js/fn/array/find";
import "core-js/fn/string/ends-with";
import "./_helpers/matchMedia";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { App } from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_assets/styles/style.css";

import { store } from "./_helpers";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
