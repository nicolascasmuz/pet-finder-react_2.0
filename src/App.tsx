import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HeaderComp } from "./components/HeaderComp";
import { HeaderMenuComp } from "./components/HeaderMenuComp";
import "./App.css";

export function App() {
  let loggedIn = true;

  return (
    <div className="app-container">
      {loggedIn ? <HeaderMenuComp /> : <HeaderComp />}
      <Outlet />
    </div>
  );
}
