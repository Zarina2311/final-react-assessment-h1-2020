import React, { Component } from "react";
class ConditionallyVisible extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: !!this.props.initiallyVisible };
  }
  render() {
    const toggleVisible = () => this.setState({ visible: !this.state.visible });
    return (
      <div>
        <button onClick={toggleVisible} style={{ display: "block" }}>
          {this.state.visible ? "Hide" : "Show"} {this.props.label}
        </button>

        <div className={this.state.visible ? null : "conditionallyHidden"}>
          {this.props.children}
        </div>
        {this.state.visible ? null : <p>…</p>}
      </div>
    );
  }
}

export default ConditionallyVisible;
