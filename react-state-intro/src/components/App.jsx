import React from "react";
import "./App.css";

function App() {
  var isDone = false;

  const strikeThrough = { textDecoration: "line-through" };

  return <p style={isDone ? strikeThrough : null}>Buy Milk</p>;
}

export default App;
