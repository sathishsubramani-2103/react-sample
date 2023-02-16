import React from "react";
import './BikeName.css';
import bike from "../../assets/splendorp.jpeg";

function BikeName(props) {
  const { productName, model, km, fuel, color, url } = props;
  return (
    <div className="container">
      <img className="img" src={url} alt="" />
        <div className="name">
          <span>{productName}</span>
        </div>
      <div className="grid-container">
        <span className="grid-item">
          <strong>Model:</strong>
          {model}
        </span>
        <span className="grid-item">
          <strong>KM:</strong>
          {km}
        </span>
        <span className="grid-item">
          <strong>Fuel:</strong>
          {fuel}
        </span>
        <span className="grid-item">
          <strong>Color:</strong>
          {color}
        </span>
      </div>
      <button className="btn">Click for More Information</button>
    </div>
  );
};

export default BikeName;