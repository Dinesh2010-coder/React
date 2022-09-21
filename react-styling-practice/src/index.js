import React from "react";
import ReactDOM from "react-dom";

const time = new Date(2022, 8, 22, 15).getHours();
console.log(time);

let str;

const customStyle = {
  color: ""
};

if (time >= "0" && time < "12") {
  str = "Good Morning";
  customStyle.color = "red";
} else if (time >= "12" && time < "18") {
  str = "Good Afternoon";
  customStyle.color = "green";
} else {
  str = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {str}
  </h1>,
  document.getElementById("root")
);
