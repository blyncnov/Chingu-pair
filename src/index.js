import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import Store from "../src/store/store";

import "./index.css";

import App from "./App";
import Cart from "../src/pages/cart-page";

import reportWebVitals from "./reportWebVitals";
import Navigation from "./layouts/Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
