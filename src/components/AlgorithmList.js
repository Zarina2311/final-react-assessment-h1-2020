import React, { Component } from "react";
import Algorithm from "./Algorithm";

class AlgorithmList extends Component {
  render() {
    return (
      <div>
        {this.props.algorithms.map(algo => (
          <Algorithm key={algo.name} {...algo} />
        ))}
      </div>
    );
  }
}

export default AlgorithmList;
