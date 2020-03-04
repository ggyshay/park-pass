import React from "react";
import "./entrance.css";
import { Input } from "../Components/input";
import { Button, LinkButton } from "../Components/button";

export const Entrance = props => {
  return (
    <div className="entrance-container">
      <div className="entrance-banner">
        <p className="entrance-banner-title">Entrada</p>
        <Input label="Placa" />
        <div>
          <LinkButton />
          <Button text="Terminar" />
        </div>
      </div>
    </div>
  );
};
