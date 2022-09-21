import React from "react";
import Input from "./Input";

export default function Login() {
  return (
    <form className="myForm">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
