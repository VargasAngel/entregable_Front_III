import data from "../../assets/data.json";
import React, { Component } from "react";
import Options from "../Options/Options";
import Elections from "../Elections/Elections";

const elections = [];

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      prevElection: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      elections.push(this.state.prevElection);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.counter >= 7) {
      alert("Final.");
    } else if (id === "A" && this.state.prevElection !== "A") {
      this.setState({
        counter: this.state.counter + 1,
        prevElection: "A",
      });
    } else if (id === "A" && this.state.prevElection === "A") {
      this.setState({
        counter: this.state.counter + 2,
      });
    } else if (id === "B" && this.state.prevElection === "A") {
      this.setState({
        counter: this.state.counter + 3,
        prevElection: "B",
      });
    } else if (id === "B") {
      this.setState({
        counter: this.state.counter + 2,
        prevElection: "B",
      });
    }
    console.log(elections);
  };

  render() {
    return (
      <div className="layout">
        <h1 className="elections">{data[this.state.counter].historia}</h1>
        <Options
          handleClick={this.handleClick}
          optionA={data[this.state.counter].opciones.a}
          optionB={data[this.state.counter].opciones.b}
        />
        <Elections
          prevElection={this.state.prevElection}
          elections={elections.map(
            (e, index) => (
              <li className = "item" key={index}>{e}</li>
            ),
            data[this.state.counter].id
          )}
        />
      </div>
    );
  }
}
