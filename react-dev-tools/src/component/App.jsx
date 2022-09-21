import React from "react";
import ReactDOM from "react-dom";
import Contacts from "../contacts";
import Avatar from "./Avatar";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/78228326?s=400&u=88922e4e95150588cfddf72f16b636c2b4218cbb&v=4" />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        tell={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        tell={Contacts[2].phone}
        email={Contacts[2].email}
      />
      <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        tell={Contacts[0].phone}
        email={Contacts[0].email}
      />
    </div>
  );
}

export default App;
