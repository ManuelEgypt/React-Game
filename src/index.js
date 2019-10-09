import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
// Styling

import "bootstrap/dist/css/bootstrap.min.css";


// Components
import App from "./App";

// Store
import store from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
