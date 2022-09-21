import React from "react";
import ReactDOM from "react-dom";
import * as op from "./calculator";

ReactDOM.render(
  <ul>
    <li>{op.add(1, 2)}</li>
    <li>{op.multiply(2, 3)}</li>
    <li>{op.subtract(7, 2)}</li>
    <li>{op.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
