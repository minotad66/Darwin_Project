import React from "react";
import "../App.css";

function Cards() {
  return (
    <div className="card--content">
        <div className="text--cards">
          <p class="text-center p">Disfruta de la experincia</p>
          <p class="text-center">
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
            sit amet fermentum. Donec sed odio operae, eu vulputate felis
            rhoncus. 
          </p>
      </div>
      <div class="card1">
        <div class="card">
          <div className="img--efect">
            <img
              className="card--img"
              src="https://www.elmundo.com/images/ediciones/Miercoles_18_3_2015/Miercoles_18_3_2015@@Lunes_23_2_2015@@antioquia.jpg"
              class="card-img-top"
              alt="..."
            ></img>
          </div>
          <div class="card-body">
            <h5 class="card-title">naturaleza</h5>
            <p class="card-text">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T.
            </p>
          </div>
        </div>
        <div class="card">
          <div className="img--efect">
            <img
              className="card--img"
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
              class="card-img-top"
              alt="..."
            ></img>
          </div>
          <div class="card-body">
            <h5 class="card-title">Comida</h5>
            <p class="card-text">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T.
            </p>
          </div>
        </div>
        <div class="card">
          <div className="img--efect">
            <img
              className="card--img"
              src="https://destincolombia.com/wp-content/uploads/2018/11/7-charcos-de-rios-profundos-en-el-valle-del-cauca-para-turismo-gran-piscina-de-pericos.jpg"
              class="card-img-top"
              alt="..."
            ></img>
          </div>
          <div class="card-body">
            <h5 class="card-title">Diversion</h5>
            <p class="card-text">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
