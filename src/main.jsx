import React from "react";
import "./sass/main.scss";
function Main() {
    const resetBtn = document.getElementById("btnReset");

  function minusClick() {
    const showNumber = document.getElementById("showNumber");
    let currentNumber = parseInt(showNumber.innerHTML);
    currentNumber--;
    showNumber.innerHTML = currentNumber;
  }
  function plusClick() {
    let currentNumber = parseInt(showNumber.innerHTML);
    currentNumber++;
    showNumber.innerHTML = currentNumber;
  }
  function resetClick() {
    showNumber.innerHTML = `0`;
  }
  return (
    <main className="main">
      <div className="main__box-clicker box-clicker">
        <button
          className="box-clicker__minus"
          id="clickMinus"
          onClick={minusClick}
        >
          -
        </button>
        <div className="box-clicker__inner">
          <p className="box-clicker__number" id="showNumber">
            0
          </p>
          <button
            className="box-clickerbtn-reset"
            id="btnReset"
            onClick={resetClick}
          >
            Reset
          </button>
        </div>
        <button
          className="box-clicker__plus"
          id="clickPlus"
          onClick={plusClick}
        >
          +
        </button>
      </div>
    </main>
  );
}

export default Main;
