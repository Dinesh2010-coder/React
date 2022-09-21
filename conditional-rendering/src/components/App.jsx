import React from "react";
import Login from "./Login";

var isLoggedIn = false;
/*
function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}
*/

const currentTime = new Date().getHours();
// const currentTime = new Date(2022, 9, 14, 9).getHours();
console.log(currentTime);

function App() {
  // return <div className="heading">{renderConditionally()}</div>;

  return (
    <div className="heading">
      {/* Ternary Operator */}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* {currentTime > 12 ? <h1>Why are you working?</h1> : null} */}
      {/* AND Operator */}
      {currentTime > 12 && <h1>Why are you working?</h1>}
    </div>
  );
}

export default App;
