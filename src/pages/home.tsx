import React from "react";
import "./home.css";

export const Home = props => (
  <div className="home-container">
    <div className="home-banner-container">
      <p className="home-banner-title">Park Pass</p>
      <div className="home-banner">
        <div className="home-badge">
          <img src={require("../images/car_green.svg")} className="car-icon" />
          <p className="home-badge-text">Entrada</p>
        </div>
        <div className="home-badge">
          <img src={require("../images/car_red.svg")} className="car-icon" />
          <p className="home-badge-text">Saída</p>
        </div>
      </div>
    </div>
  </div>
);
