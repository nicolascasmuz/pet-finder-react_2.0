import React from "react";
import "./deleted-pet-comp.css";

export function DeletedPetComp(props) {
  return (
    <div className="report-window">
      <label className="report-form__label">
        ¿ESTÁS SEGURO DE ELIMINAR ESTE REPORTE?
      </label>
      <button className="button-yes">SI</button>
      <button className="button-no">NO</button>
    </div>
  );
}
