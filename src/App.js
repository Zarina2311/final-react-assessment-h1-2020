import React from "react";
import "./App.css";
import AlgorithmList from "./components/AlgorithmList";
const algorithms = require("./algorithms.json");

function App() {
  return (
    <section>
      <h1>Data Structures & Algorithms</h1>

      <AlgorithmList alogrithms={algorithms} />
    </section>
  );
}

export default App;
