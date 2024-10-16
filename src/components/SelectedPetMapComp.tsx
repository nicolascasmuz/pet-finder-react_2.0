import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MissingPetCardComp } from "../components/MissingPetCardComp";
import { useRecoilValue } from "recoil";
import { usePetsByRadius } from "../hooks/usePetsByRadius";
import { dataSelector } from "../atoms/data-atoms";
import mapboxgl from "mapbox-gl";
import "./selected-pet-map-comp.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_KEY;
mapboxgl.accessToken = MAPBOX_TOKEN;

function SelectedPetMapComp() {
  const userData = useRecoilValue(dataSelector);
  const { deletePetsByRadius } = usePetsByRadius();

  useEffect(() => {
    try {
      deletePetsByRadius(true);
    } catch (error) {
      console.error(error);
    }

    new mapboxgl.Map({
      container: document.querySelector("#map"),
      style: "mapbox://styles/mapbox/streets-v11",
      center: [userData.selectedPet[0].lng, userData.selectedPet[0].lat],
      zoom: 16,
    });
  }, []);

  return (
    <div className="selected-pet-map__container">
      <MissingPetCardComp
        className="missing-pet-card-comp"
        id={userData.selectedPet[0].id}
        picURL={userData.selectedPet[0].picURL}
        name={userData.selectedPet[0].name}
        details={userData.selectedPet[0].details}
      />
      <div className="selected-pet-map__map" id="map"></div>
    </div>
  );
}

export { SelectedPetMapComp };
