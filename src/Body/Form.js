import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="body">
      <h1 className='color1'> Para mas informacion </h1>
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>Contactanos</span>
                  <span>Aqui</span>
                </div>
                <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="Nombre"
                    ></input>
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="Correo"></input>
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="Numero de contacto"
                    ></input>
                  </div>
                  <div class="app-form-group message">
                    <input
                      class="app-form-control"
                      placeholder="Mensaje"
                    ></input>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">CANCEL</button>
                    <button class="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
