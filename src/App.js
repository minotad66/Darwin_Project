import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/Header";
import Slider from "./Imagenes/Imagenes";
import Imagenes from "./Body/Body";
import Cards from "./Body/Informacion";
import Texto from "./header/TextTitle";
import Form from "./Body/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Texto />
      <Cards />
      <Form />
      <Imagenes />
    </div>
  );
}

export default App;
