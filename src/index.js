import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./store";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: rootReducer });
console.log("store: ", store);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
