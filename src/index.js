import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Correctly mount the React app into the DOM root element.
// ReactDOM.render takes (element, container). The previous code
// placed the container inside the fragment which prevented mounting.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
