import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { App } from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_assets/styles/style.css";

//import { store } from "./_helpers";

render(<App />, document.getElementById("root"));
