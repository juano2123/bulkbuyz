import React from "react";
import ReactDOM from "react-dom/client";
import ProductDetail from "./pages/Home/ProductDetail";
import reportWebVitals from "./reportWebVitals";
//import InicioSesion from "./pages/Sign in/InicioSesion";
//import ProductoDetalleMasterPro from "./shared/components/ProductoDetalleMasterPro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductDetail />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
