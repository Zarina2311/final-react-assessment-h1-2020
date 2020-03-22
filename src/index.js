import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import moment from "moment";

const algorithms = require("./algorithms.json");
algorithms.forEach(algo => {
  algo.addedOn = moment(algo.addedOn);
});

ReactDOM.render(
  <React.StrictMode>
    <App algorithms={algorithms} />
  </React.StrictMode>,
  document.getElementById("root")
);
