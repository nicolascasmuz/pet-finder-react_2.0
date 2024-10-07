import React from "react";
import "./set-radius-form-comp.css";

const API_BASE_URL = "http://localhost:3000";

function SetRadiusFormComp(props) {
  return (
    <form className="search-form">
      <select name="distance" className="select-distance">
        <option value="1000">1 km</option>
        <option value="2000">2 kms</option>
        <option value="5000">5 kms</option>
        <option value="10000">10 kms</option>
        <option value="20000">20 kms</option>
        <option value="50000">50 kms</option>
      </select>
      <button className="search-button">Buscar</button>
    </form>
  );
}

export { SetRadiusFormComp };
