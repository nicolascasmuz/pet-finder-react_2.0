import React, { Children } from "react";
import "./form-input-comp.css";

export function FormInputComp(props) {
  return (
    <>
      <label className="form-input__label">
        {props.textContent}
        <input
          className="form-input__input"
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </label>
      <p className="mismatched-pass">
        Las contraseñas no coinciden, inténtelo otra vez
      </p>
      <p className="new-user">Ya existe un usuario registrado con este email</p>
      <p className="wrong-data">El usuario o la contraseña son incorrectos</p>
      <p className="wrong-pass">Contraseña incorrecta</p>
      <p className="required-field">Campo obligatorio</p>
    </>
  );
}
