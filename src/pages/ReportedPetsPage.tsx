import React from "react";
import { FoundPetCardComp } from "../components/FoundPetCardComp";
import { ReportedPetCardComp } from "../components/ReportedPetCardComp";
import { useReportedPets } from "../hooks/useReportedPets";
import "./reported-pets-page.css";
import { Navigate } from "react-router-dom";
import { dataSelector } from "../atoms/data-atom";
import { useRecoilValue } from "recoil";

export async function ReportedPetsPage() {
  const reportedPets = useReportedPets();
  const userData = useRecoilValue(dataSelector);

  try {
    await reportedPets(userData.userId);
    console.log("ReportedPetsPage (myReportedPets): ", userData.myReportedPets);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="general-container">
      <h1 className="main-title">Mascotas reportadas</h1>
      <div className="reported-pets-container">
        {userData.myReportedPets.length ? (
          userData.myReportedPets.map((rp) =>
            rp.found ? (
              <FoundPetCardComp
                id={rp.id}
                picURL={rp.picURL}
                name={rp.name}
                details={rp.details}
              />
            ) : (
              <ReportedPetCardComp
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
