import React from "react";
import { MapComp } from "../components/MapComp";
import "./map-page.css";

export function MapPage() {
  return (
    <div className="general-container">
      <div className="map-page-container">
        <MapComp></MapComp>
      </div>
    </div>
  );
}
