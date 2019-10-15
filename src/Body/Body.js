import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";

class Imagenes extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then(result => result.json())
      .then(items => this.setState({ items }));
  }

  render() {
    return (
      <div  className = 'carousel--container'>
        <h1> Galeria de imagenes </h1>
        <Carousel>
          {this.state.items.map(item => {
            return (
              <Carousel.Item>
                <a className=".img--efect" href={item.url} target="_blank">
                  <img
                    className="img--efect"
                    className="d-block w-100"
                    src={item.download_url}
                    alt="First slide"
                  />
                </a>
                <Carousel.Caption>
                  <h3>Autor: {item.author}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Imagenes;
