import React, { Children } from "react";
import "./form-input-comp.css";

export function FormInputComp(props) {
  return (
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
  );
}
