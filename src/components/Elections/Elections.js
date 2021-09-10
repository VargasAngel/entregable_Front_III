import React, { Component } from "react";

export default class Elections extends Component {
  render() {
    return (
      <div className="elections">
        <h3>Selección anterior: {this.props.prevElection}</h3>
        <h4>Registro de elecciones: </h4>
        <ul>{this.props.elections}</ul>
      </div>
    );
  }
}

