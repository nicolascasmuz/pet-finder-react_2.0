import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePetsByRadius } from "../hooks/usePetsByRadius";
import { useRecoilValue } from "recoil";
import { dataSelector } from "../atoms/data-atom";
import mapboxgl from "mapbox-gl";
import { SetRadiusFormComp } from "./SetRadiusFormComp";
import "./map-comp.css";

const API_BASE_URL = "http://localhost:3000";

function MapComp() {
  const petsByRadius = usePetsByRadius();
  const userData = useRecoilValue(dataSelector);

  useEffect(() => {
    var map = new mapboxgl.Map({
      container: document.querySelector("#map"),
      style: "mapbox://styles/mapbox/streets-v11",
      center: [userData.lng, userData.lat],
      zoom: 12,
    });

    if (userData.petsByRadius) {
      for (const p of userData.petsByRadius) {
        const { lat, lng } = p._geoloc;

        new mapboxgl.Marker({ color: "#eb6372" })
          .setLngLat([lng, lat])
          .addTo(map);
      }
    } else {
      null;
    }

    /* marker.getElement().addEventListener("click", async () => {
        const { lng, lat } = marker._lngLat;
  
        const selectedPetOnMap = userData.petsByRadius.find((p) => {
            return p.lng == lng && p.lat == lat;
          });
    
          /* cs.selectedPet = selectedPetOnMap;
          state.setState(cs);
    
          this.petId = selectedPetOnMap.id;
          this.picURL = selectedPetOnMap.picURL;
          this.name = selectedPetOnMap.name;
          this.details = selectedPetOnMap.details;
          this.lat = selectedPetOnMap.lat;
          this.lng = selectedPetOnMap.lng;
    
          this.connectedCallbackSelectedPet();
      });  */
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const distanceValue = e.target["distance"].value;

    const searchValues = {
      userID: userData.userId,
      lat: userData.lat,
      lng: userData.lng,
      distance: distanceValue,
    };

    try {
      await petsByRadius(searchValues);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SetRadiusFormComp onSubmit={handleSubmit} />
      <div className="map-comp__map-container">
        <div id="map"></div>
      </div>
    </>
  );
}

export { MapComp };
