import React from "react";
import ReactDOM from "react-dom";

const customSyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customSyle.color = "darkblue";
ReactDOM.render(
  <h1 style={customSyle}>Hello World !!</h1>,
  document.getElementById("root")
);
