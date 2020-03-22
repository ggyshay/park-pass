import React from "react";
import "./input.css";

export const Input = props => (
  <div className="input-container">
    <p className="input-label">{props.label}</p>
    <input
      className="input-input"
      onChange={e => props.onChange(e.target.value)}
      value={props.value}
    />
  </div>
);
