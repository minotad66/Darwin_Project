import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Slider from './Imagenes/Imagenes';
import Imagenes from './Body/Body';
import Cards from './Body/Informacion'
import Texto from './header/TextTitle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Texto/>
      <Cards/>
      <Slider/>
      <Imagenes/>
    </div>
  );
}

export default App;
