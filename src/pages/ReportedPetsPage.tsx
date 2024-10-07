import React from "react";
import { FoundPetCardComp } from "../components/FoundPetCardComp";
import { ReportedPetCardComp } from "../components/ReportedPetCardComp";
import { Navigate } from "react-router-dom";
import { dataSelector } from "../atoms/data-atom";
import { useRecoilValue } from "recoil";
import "./reported-pets-page.css";

export function ReportedPetsPage() {
  const userData = useRecoilValue(dataSelector);

  return (
    <div className="general-container">
      <h1 className="main-title">Mascotas reportadas</h1>
      <div className="reported-pets-container">
        {userData.myReportedPets.length ? (
          userData.myReportedPets.map((rp, key) =>
            rp.found ? (
              <FoundPetCardComp
                key={key}
                id={rp.id}
                picURL={rp.picURL}
                name={rp.name}
                details={rp.details}
              />
            ) : (
              <ReportedPetCardComp
                key={key}
                id={rp.id}
                picURL={rp.picURL}
                name={rp.name}
                details={rp.details}
              />
            )
          )
        ) : (
          <Navigate to="/no-reported-pets" />
        )}
      </div>
    </div>
  );
}
