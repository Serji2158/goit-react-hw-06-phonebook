import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../src/index.css";
import AppHook from "./Component/AppHook";
import { store } from "./redux/store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <AppHook />
    </Provider>
  </>,
  document.getElementById("root")
);
