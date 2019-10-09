import React, { Component } from "react";

class GameRow extends Component {
  render() {
    return (
      <h1 onClick={() => this.props.changeColors(this.props.index)}>
        {this.props.color[this.props.index]} {this.props.validation}
      </h1>
    );
  }
}

export default GameRow;
