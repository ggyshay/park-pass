import React from "react";
import { Button, LinkButton } from "../Components/button";
import "./entrance.css";

export const Checkout = () => {
  const onClick = () => {
    window.location.replace("/home");
  };
  const paramString = window.location.search.substr(1).split("=")[1];
  const value = parseFloat(paramString).toFixed(2);
  console.log(value);
  return (
    <div className="entrance-container">
      <div className="entrance-banner">
        <p className="entrance-banner-title">Saída</p>
        <h1
          style={{
            color: "white",
            fontFamily: "Open Sans",
            fontWeight: "lighter"
          }}
        >
          R$ {value}
        </h1>
        <div>
          <LinkButton text="Voltar" />
          <Button text="Recebido" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
