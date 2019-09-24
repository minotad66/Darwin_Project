import React, { Component } from "react";
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
      <div className="card1">
        {this.state.items.map(item => {
          return (
            <div className="card">
              <div className="img--efect">
                <a className=".img--efect" href={item.url} target="_blank">
                  <img
                    className="card--img"
                    src={item.download_url}
                    class="card-img-top"
                    alt="..."
                  ></img>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">{item.author}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Imagenes;
