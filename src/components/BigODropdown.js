import React, { Component } from "react";

const ALL_LABEL = "Show All";
export const SHOW_ALL_FILTER_FUNCTION = () => true;
SHOW_ALL_FILTER_FUNCTION.bigO = ALL_LABEL;

class BigODropdown extends Component {
  render() {
    const { algorithms, setFilter, selected } = this.props;

    let uniqueBigOs = new Set();
    algorithms.forEach(algo => uniqueBigOs.add(algo.averagePerformance));
    uniqueBigOs = [...uniqueBigOs]; //turn into an array

    const createFilterFunction = bigO => {
      if (bigO === ALL_LABEL) {
        return SHOW_ALL_FILTER_FUNCTION;
      }
      const func = algo => algo.averagePerformance === bigO;
      func.bigO = bigO;
      return func;
    };
    const changeFilter = bigO => {
      setFilter(createFilterFunction(bigO));
    };
    return (
      <select
        value={selected}
        onChange={event => changeFilter(event.target.value)}
      >
        <option key={ALL_LABEL} value={ALL_LABEL}>
          {ALL_LABEL}
        </option>
        {uniqueBigOs.map(bigO => (
          <option key={bigO} value={bigO}>
            {bigO}
          </option>
        ))}
      </select>
    );
  }
}

export default BigODropdown;
