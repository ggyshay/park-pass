import React from "react";
import { Input } from "../Components/input";
import { VSeparator } from "../Components/separator";
import { Button } from "../Components/button";
import "./login.css";

export const Login = props => (
  <div className="login-container">
    <div className="login-column">
      <p className="login-title">Login</p>
      <Input label="Email" />
      <VSeparator />
      <Input label="Senha" />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button text="Login" />
      </div>
    </div>
  </div>
);
