import React, { Component } from "react";
import "./App.css";
import AlgorithmList from "./components/AlgorithmList";
import BigODropdown, {
  SHOW_ALL_FILTER_FUNCTION
} from "./components/BigODropdown";

const DEFAULT_STATE = {
  stableIsChecked: false,
  bigOFilter: SHOW_ALL_FILTER_FUNCTION
};

class App extends Component {
  constructor(propz) {
    super(propz);
    this.state = DEFAULT_STATE;
  }
  reset() {
    this.setState(DEFAULT_STATE);
  }
  onStableChecked() {
    this.setState({ stableIsChecked: !this.state.stableIsChecked });
  }
  renderResetLink(hiddenCount) {
    if (hiddenCount > 0) {
      return (
        <p>
          Filters are hiding {hiddenCount} algorithms.{" "}
          <button onClick={this.reset.bind(this)}>Reset</button>
        </p>
      );
    } else {
      return null;
    }
  }

  render() {
    let algorithmsToDisplay = this.props.algorithms.filter(
      this.state.bigOFilter
    );
    if (this.state.stableIsChecked) {
      algorithmsToDisplay = this.props.algorithms.filter(algo => algo.stable);
    }
    const hiddenCount =
      this.props.algorithms.length - algorithmsToDisplay.length;
    return (
      <section>
        <h1>Data Structures & Algorithms ({algorithmsToDisplay.length})</h1>
        <BigODropdown
          selected={this.state.bigOFilter.bigO}
          algorithms={this.props.algorithms}
          setFilter={func => this.setState({ bigOFilter: func })}
        />
        {this.renderResetLink(hiddenCount)}
        <label>
          <input
            type="checkbox"
            checked={this.state.stableIsChecked}
            onChange={this.onStableChecked.bind(this)}
          />
          Only Show Stable Sorts
        </label>
        <AlgorithmList algorithms={algorithmsToDisplay} />
      </section>
    );
  }
}

export default App;
