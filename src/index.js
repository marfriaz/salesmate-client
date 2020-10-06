import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { GymListProvider } from "./contexts/GymListContext";
import { GymProvider } from "./contexts/GymContext";
// import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <GymListProvider>
      <GymProvider>
        <App />
      </GymProvider>
    </GymListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
