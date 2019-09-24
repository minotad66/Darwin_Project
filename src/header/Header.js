import React from "react";
import "../App.css";
import logo from './logo.png';

function Header() {
  return (
    <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div className="d-inline-flex p-2">
          <a class="navbar-brand" href="#">
            <img className='logo' src={logo} alt='logo'></img>
          </a >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          class="d-inline-flex p-2 bd-highlight"
          id="navbarSupportedContent"
        >
          <a href="#" class="badge color">Inicio</a>
          <a href="#" class="badge color">Informacion</a>
          <a href="#" class="badge color">Galeria</a>
          <a href="#" class="badge color">Contactos</a>
        </div>
      </nav>
      </header>
  );
}

export default Header;
