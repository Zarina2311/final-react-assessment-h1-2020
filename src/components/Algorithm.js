import React, { Component } from "react";
import ProsAndCons from "./ProsAndCons";
import StableMarker from "./StableMarker";
import ConditionallyVisible from "./ConditionallyVisible";

class Algorithm extends Component {
  render() {
    return (
      <div className="algorithm" key={this.props.name}>
        <h3>
          <a href={this.props.wikipediaUrl}>{this.props.name}</a>
        </h3>
        <img alt="logo" src={this.props.imageUrl} width={300} />
        <p>Avg. Perf: {this.props.averagePerformance}</p>
        <ConditionallyVisible initiallyVisible={false} label="Pros & Cons">
          <ProsAndCons pros={this.props.pros} cons={this.props.cons} />
        </ConditionallyVisible>
        <div>
          <StableMarker stable={this.props.stable} />
          <p>
            <small>Added {this.props.addedOn.format("MMMM Do YYYY")}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Algorithm;
