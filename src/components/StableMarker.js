import React, { Component } from "react";

class StableMarker extends Component {
  render() {
    if (this.props.stable) {
      return (
        <a href="https://en.wikipedia.org/wiki/Sorting_algorithm#Stability">
          ✅ Stable Sort
        </a>
      );
    }
    return null;
  }
}

export default StableMarker;
