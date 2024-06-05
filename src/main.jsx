import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/ProductContext";
import BasketProvider from "./context/BasketContext";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);
