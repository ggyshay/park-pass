import React, { useState } from "react";
import "./entrance.css";
import { Input } from "../Components/input";
import { Button, LinkButton } from "../Components/button";
import { Link } from "react-router-dom";
import { DI } from "../data-interface";

export const Entrance = props => {
  const [plate, setPlate] = useState("");
  const onClick = async () => {
    const res = await DI.registerCar(plate);
    if (res.status === 200) {
      document.location.replace("/home");
    }
  };
  return (
    <div className="entrance-container">
      <div className="entrance-banner">
        <p className="entrance-banner-title">Entrada</p>
        <Input label="Placa" value={plate} onChange={setPlate} />
        <div>
          <LinkButton />
          <Button text="Terminar" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
