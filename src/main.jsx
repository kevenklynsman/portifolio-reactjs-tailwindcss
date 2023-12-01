import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="p-0 m-0 font-sans box-border bg-blue-900">
      <App />
    </div>
  </React.StrictMode>
);
