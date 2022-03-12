import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./styles.module.scss";
import Cart1 from "../Cart/Cart1/Cart1"



export default function Header () {
  return (
       /* <nav className={styles.navbar}>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/house">Hogar</NavLink>
            <NavLink to="/person">Personas</NavLink>
        </nav>*/


<div className={styles.contenedor}>
  <ul>
    <li>
      <NavLink to="/">Inicio</NavLink>
    </li>
    <li>
      <NavLink to="/house">Hogar</NavLink>
    </li>
    <li>
      <NavLink to="/person">Personas</NavLink>
    </li>
    <li>
    <Cart1 />
    </li>
  </ul>
</div> 

)
}




