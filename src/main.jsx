import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./component/Navigation.jsx";
// import Navigation from "./component/Navigation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Navigation /> */}
  </React.StrictMode>
);
