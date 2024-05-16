import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/menu.css"

export const Menu = () => {
  return (
    <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/search" className="nav__link">
               Buscar
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/rentail"
               className="nav__link"
             >
               Alquiler Libros
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/about"
               className="nav__link"
             >
               Sobre nosotros
             </NavLink>
           </li>
           </ul>
       </div>  
  );
};