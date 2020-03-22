import React, { useState } from "react";
import { Button, LinkButton } from "../Components/button";
import { Input } from "../Components/input";
import { DI } from "../data-interface";
import "./entrance.css";

export const Exit = () => {
  const [plate, setPlate] = useState("");
  const onClick = async () => {
    const resJson = await DI.exitCar(plate);

    window.location.replace("/checkout?price=" + resJson.price);
    console.log(resJson);
  };
  return (
    <div className="entrance-container">
      <div className="entrance-banner">
        <p className="entrance-banner-title">Saída</p>
        <Input label="Placa" value={plate} onChange={setPlate} />
        <div>
          <LinkButton text="Cancelar" />
          <Button text="Cobrança" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
