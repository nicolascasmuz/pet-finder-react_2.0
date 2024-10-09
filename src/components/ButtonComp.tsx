import React, { Children } from "react";
import "./button-comp.css";

export function ButtonComp(props) {
  return (
    <button
      className="button"
      style={{
        display: props.fpDisplay ? "none" : "block",
        backgroundColor: props.color,
      }}
      onClick={props.onClick}
    >
      {props.textContent}
    </button>
  );
}
