import React from "react";
import ReactDOM from "react-dom";

const fName = "Dinesh";
const lName = "Khemka";
const num = 20;

ReactDOM.render(
  <div>
    <h1>Hello {fName}!!</h1>
    {/* <h1>Hello {fName + " " + lName}!!</h1> */}
    {/* <h1>Hello {fName} {lName}!!</h1> */}
    <h1>Hello {`${fName} ${lName}`}!!</h1>
    <p>Your lucky number is {num}</p>
    {/* We can add expression in curly braces. We can't add javascript statements in curly braces because here it is not giving an value equal to statement while in expression it returns a value equal to expression*/}
    <p>Your lucky number is {5 + 6}</p>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    {/* <p>Your lucky number is {
      if (name === "Dinesh") {
        return 5;
      }
      else if (name == "Chirag") {
        return "chutiya";
      }
      }</p> 
    */}
  </div>,
  document.getElementById("root")
);
