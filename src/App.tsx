import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderComp } from "./components/HeaderComp";
import { HeaderMenuComp } from "./components/HeaderMenuComp";
import { dataSelector } from "./atoms/data-atom";
import { useRecoilValue } from "recoil";
import "./App.css";

export function App() {
  const userData = useRecoilValue(dataSelector);

  return (
    <div className="app-container">
      {userData.userId ? (
        <HeaderMenuComp profilePic={userData.picURL} />
      ) : (
        <HeaderComp />
      )}
      <Outlet />
    </div>
  );
}
