import React from "react";
import "./button.css";

export const Button = props => (
  <div className="button-container" onClick={props.onClick}>
    <p className="button-text">{props.text}</p>
  </div>
);

export const LinkButton = props => <p className="link-button">{props.text}</p>;
