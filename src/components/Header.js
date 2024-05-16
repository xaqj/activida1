import React from "react";
import Logo from "../assets/UNIR_Logo.png";

export const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="unirLogo"/>      
      <h1 className="header__text">UNIR Biblioteca</h1>
    </div>
  );
};