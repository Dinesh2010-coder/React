import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img alt="random" src={img + "?grayscale"} />
      <img
        className="food-img"
        alt="pizza"
        src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000"
      ></img>
      <img
        className="food-img"
        alt="noodles"
        src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg"
      ></img>
      <img
        className="food-img"
        alt="dosa"
        src="https://image.shutterstock.com/image-photo/masala-dosa-south-indian-meal-260nw-1008673576.jpg"
      ></img>
    </div>

    {/* 
    <ul>
      <li>Pizza</li>
      <li>Noodles</li>
      <li>Dosa</li>
    </ul>
    */}
  </div>,
  document.getElementById("root")
);
