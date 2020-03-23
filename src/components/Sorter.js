import React, { Component } from "react";

export const NO_SORT_FUNCTION = algorithms => {
  return [].concat(algorithms);
};
NO_SORT_FUNCTION.value = "none";
NO_SORT_FUNCTION.label = "No Sort";

function createSortFunction(value, options = { asc: true }) {
  const func = (a, b) => {
    const valA = a.addedOn;
    const valB = b.addedOn;

    if (valA === valB) {
      return 0;
    }
    const multiplier = options.asc ? 1 : -1;

    if (valA < valB) {
      return multiplier * -1;
    }

    return multiplier;
  };
  func.value = value;
  return func;
}

const sortFunctionsByValue = new Map();
const recentSort = createSortFunction("newest", { asc: false });
const oldestSort = createSortFunction("oldest");
[NO_SORT_FUNCTION, recentSort, oldestSort].forEach(sort =>
  sortFunctionsByValue.set(sort.value, sort)
);

class Sorter extends Component {
  render() {
    const onChange = event => {
      const { value } = event.target;
      const sortFunc = sortFunctionsByValue.get(value);
      this.props.updateSortFunction(sortFunc);
    };
    const buildRadioInput = func => {
      return (
        <label key={func.value}>
          <input
            type="radio"
            name="sorter"
            value={func.value}
            onChange={onChange}
            checked={this.props.current.value === func.value}
          />
          {func.label ? func.label : `${func.value} first`}
        </label>
      );
    };
    return <div>{[...sortFunctionsByValue.values()].map(buildRadioInput)}</div>;
  }
}

export default Sorter;
