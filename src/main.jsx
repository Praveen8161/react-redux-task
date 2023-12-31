import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// cart reducer refers to cartSlice.reducer
import CartReducers from "./Reducers/CartReducers.js";

const store = configureStore({
  reducer: {
    // Same as the slice name
    cartOperation: CartReducers,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
