import React from "react";
import { ButtonComp } from "../components/ButtonComp";
import { FormInputComp } from "../components/FormInputComp";
import "./edit-data-page.css";
import blankProfilePic from "../resources/blank-profile-picture.png";
import { Link } from "react-router-dom";
import { getDataSelector } from "../atoms/data-atom";
import { useRecoilValue } from "recoil";

export function EditDataPage(props) {
  const userData = useRecoilValue(getDataSelector);
  return (
    <div className="general-container">
      <h1 className="main-title">Modificar datos</h1>
      <form className="modify-data-form dropzone" action="/target">
        <center>
          <img
            /* action="/target" */
            className="add-profile-pic"
            src={userData.picURL}
            alt="add-profile-pic"
          />
        </center>
        <FormInputComp
          className="nickname-input"
          type="text"
          name="nick"
          value={userData.nickname}
          textContent="NICK"
        />
        <FormInputComp
          className="email-input"
          type="email"
          name="email"
          value={userData.email}
          textContent="EMAIL"
        />
        <FormInputComp
          className="location1-input"
          type="text"
          name="address"
          value={userData.address}
          textContent="DIRECCIÓN"
        />
        <FormInputComp
          className="location2-input"
          type="text"
          name="loc"
          value={userData.location}
          textContent="LOCALIDAD"
        />
        <div className="button-guardar">
          <ButtonComp color="#ff7f87" textContent="Guardar" />
        </div>
      </form>
    </div>
  );
}
