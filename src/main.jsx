import React, { Component } from "react";
import "./sass/main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: props.initialValue || 0,
    };
  }
  minus = () => {
    this.setState((prevState) => ({
      currentNumber: prevState.currentNumber - 1,
    }));
  };
  plus = () => {
    this.setState((prevState) => ({
      currentNumber: prevState.currentNumber + 1,
    }));
  };
  result = () => {
    this.setState({
      currentNumber: 0,
    });
  };
  render() {
    const { currentNumber } = this.state;
    return (
      <div className="main">
        <div className="main__box-clicker box-clicker">
          <button
            className="box-clicker__minus"
            id="clickMinus"
            onClick={this.minus}
          >
            -
          </button>
          <div className="box-clicker__inner">
            <p className="box-clicker__number" id="showNumber">
              {currentNumber}
            </p>
            <button
              className="box-clickerbtn-reset"
              id="btnReset"
              onClick={this.result}
            >
              Reset
            </button>
          </div>
          <button
            className="box-clicker__plus"
            id="clickPlus"
            onClick={this.plus}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
export default Main;
