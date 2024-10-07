import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { dataSelector } from "../atoms/data-atom";
import mapboxgl from "mapbox-gl";
import { SetRadiusFormComp } from "./SetRadiusFormComp";
import "./map-comp.css";

const API_BASE_URL = "http://localhost:3000";

function MapComp() {
  const userData = useRecoilValue(dataSelector);

  useEffect(() => {
    var map = new mapboxgl.Map({
      container: document.querySelector("#map"),
      style: "mapbox://styles/mapbox/streets-v11",
      center: [userData.lng, userData.lat],
      zoom: 12,
    });
  }, []);

  return (
    <>
      <SetRadiusFormComp></SetRadiusFormComp>
      <div className="map-container">
        <div id="map"></div>
      </div>
    </>
  );
}

export { MapComp };
