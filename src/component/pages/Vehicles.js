import React from "react";

function Vehicles() {
  return (
    <div className="vehicles">
      <form className="form-vehicle">
      <span>Vehicles Information</span>
        <label>
          Product Name:
          <input type="text" name="ProductName" />
        </label>
        <label>
          Model:
          <input type="text" name="model" />
        </label>
        <label>
          Km:
          <input type="number" name="number" />
        </label>
        <label>
          Fuel:
          <input type="text" name="fuel" />
        </label>
        <label>
          Color:
          <input type="text" name="color" />
        </label>
      </form>
    </div>
  );
}

export default Vehicles;
