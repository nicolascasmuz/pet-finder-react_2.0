import React, { Children } from "react";
import exitCross from "../resources/exit-cross.png";
import "./missing-pet-card-comp.css";

function MissingPetCardComp(props) {
  return (
    <div className="comp-container">
      <button className="exit-button">
        <img className="exit-cross" src={exitCross} alt="exit-cross" />
      </button>
      <div className="card__container">
        <img className="card__img" src={props.picURL} alt="pet-pic" />
        <div className="card__name-button">
          <h3 className="card__name">{props.name}</h3>
          <button className="card__button">Reportar</button>
        </div>
        <p className="card__details">{props.details}</p>
      </div>
    </div>
  );
}

export { MissingPetCardComp };
