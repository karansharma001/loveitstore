import React, { Component } from "react";

export class Head_row extends Component {
  render() {
    return (
      <div id="headRow">
        <h2>{this.props.headData}</h2>
      </div>
    );
  }
}

export default Head_row;
