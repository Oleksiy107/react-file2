import React from "react";
import ReactDom from "react-dom";
import Header from "./header.jsx";
import Main from "./main.jsx";
import "./sass/header.scss";
import "./sass/main.scss";
const rootEl = document.getElementById("root");
const rootInstance = ReactDom.createRoot(rootEl);

rootInstance.render(
  <div>
    <Header />
    <Main />
  </div>
);
