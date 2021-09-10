import React, { Component } from "react";

export default class Opions extends Component {
  render() {
    return (
      <div className="options">
        <div className="option">
          <button id="A" className="button" onClick={this.props.handleClick}>
            A: {this.props.optionA}
          </button>
        </div>
        <div className="option">
          <button id="B" className="button" onClick={this.props.handleClick}>
            B: {this.props.optionB}
          </button>
        </div>
      </div>
    );
  }
}

