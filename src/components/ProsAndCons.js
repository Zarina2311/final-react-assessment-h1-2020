import React, { Component } from "react";

class ProsAndCons extends Component {
  render() {
    return (
      <div>
        <h4>👍 Pros</h4>
        <ul>
          {this.props.pros.map(pro => (
            <li key={pro}>{pro}</li>
          ))}
        </ul>
        <h4>👎 Cons</h4>
        <ul>
          {this.props.cons.map(con => (
            <li key={con}>{con}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProsAndCons;
