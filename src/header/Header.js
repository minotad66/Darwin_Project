import React from "react";
import "./Header.css";
import "../App.css"
import logo from './logo.png';

function Header() {
  return (
    <div className = "header">
    <input type="checkbox" id="btn-nav" class="checkbox"></input>
    <header>
      <div class="header-container">
        <img className='logo header-logo' src={logo} alt='logo'></img>
        <label for="btn-nav" class="btn-label">
          <div class="header-button"></div>
        </label>
      </div>
    </header>
    
    <nav class="menu">
      <ul
          id="navbarSupportedContent"
        >
          <li><a href="#" class="badge color color1">Inicio</a></li>
          <li><a href="#" class="badge color color1">Informacion</a></li>
          <li><a href="#" class="badge color color1">Galeria</a></li>
          <li><a href="#" class="badge color color1">Contactos</a></li>
      </ul>    
    </nav>
  </div>
  );
}

export default Header;
