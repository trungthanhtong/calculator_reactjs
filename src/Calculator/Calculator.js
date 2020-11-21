import React, { Component } from "react";
import "./style.css";

export default class Calculator extends Component {
  state = {
    display: 0,
    previousDisplay: 0,
    operator: "=",
  };

  operation = (currentState) => {
    if (currentState.operator === "=") {
      return currentState.display;
    }
    if (currentState.operator === "+") {
      return (
        parseFloat(currentState.previousDisplay) +
        parseFloat(currentState.display)
      );
    }
    if (currentState.operator === "-") {
      return (
        parseFloat(currentState.previousDisplay) -
        parseFloat(currentState.display)
      );
    }
    if (currentState.operator === "*") {
      return (
        parseFloat(currentState.previousDisplay) *
        parseFloat(currentState.display)
      );
    }
    if (currentState.operator === "/") {
      return (
        parseFloat(currentState.previousDisplay) /
        parseFloat(currentState.display)
      );
    }
  };

  calculate = (btn) => {
    if (btn === "C") {
      this.setState({
        display: 0,
        previousDisplay: 0,
        operator: "=",
      });
    } else if (btn === "CE") {
      this.setState({
        display:
          this.state.display.toString().length === 1
            ? 0
            : this.state.display
                .toString()
                .substr(0, this.state.display.toString().length - 1),
      });
    } else if (btn === ".") {
      if (Number.isInteger(parseFloat(this.state.display))) {
        this.setState({
          display: this.state.display + btn,
        });
      } else {
        this.setState({
          display: 0,
          previousDisplay: 0,
          operator: null,
        });
      }
    } else if (typeof btn === "number") {
        this.setState({
          display:
            this.state.display === 0
              ? btn.toString()
              : this.state.display.toString() + btn.toString(),
        });
    //   }
    } else if (btn === "=") {
      this.setState({
        display: this.operation(this.state),
        operator: "=",
      });
    } else {
      if (this.state.operator === "=") {
        this.state.previousDisplay = this.state.display;
        this.state.display = 0;
        this.state.operator = btn;
      } else {
        this.setState({
          display: this.operation(this.state),
          operator: "=",
        });
        
      }
    } 
  };

  render() {
    return (
      <div className="calculator">
        <p id="display">{this.state.display}</p>
        <div className="number">
          <div>
            <button onClick={() => this.calculate(7)}>7</button>
          </div>
          <div>
            <button onClick={() => this.calculate(8)}>8</button>
          </div>
          <div>
            <button onClick={() => this.calculate(9)}>9</button>
          </div>
          <div>
            <button onClick={() => this.calculate("/")}>/</button>
          </div>
          <div>
            <button onClick={() => this.calculate("CE")}>CE</button>
          </div>
          <div>
            <button onClick={() => this.calculate(4)}>4</button>
          </div>
          <div>
            <button onClick={() => this.calculate(5)}>5</button>
          </div>
          <div>
            <button onClick={() => this.calculate(6)}>6</button>
          </div>
          <div>
            <button onClick={() => this.calculate("*")}>*</button>
          </div>
          <div>
            <button onClick={() => this.calculate("C")}>C</button>
          </div>
          <div>
            <button onClick={() => this.calculate(1)}>1</button>
          </div>
          <div>
            <button onClick={() => this.calculate(2)}>2</button>
          </div>
          <div>
            <button onClick={() => this.calculate(3)}>3</button>
          </div>
          <div>
            <button onClick={() => this.calculate("-")}>-</button>
          </div>
          <div style={{ gridColumnStart: "5", gridRow: "3 / span 2" }}>
            <button onClick={() => this.calculate("=")}>=</button>
          </div>
          <div style={{ gridColumn: "1 / span 2" }}>
            <button onClick={() => this.calculate(0)}>0</button>
          </div>
          <div>
            <button onClick={() => this.calculate(".")}>.</button>
          </div>
          <div>
            <button onClick={() => this.calculate("+")}>+</button>
          </div>
        </div>
      </div>
    );
  }
}
