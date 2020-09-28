import React, { Component } from "react";
import Load from "./Load";

export default class Manga extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manga: [],
      loader: true,
    };
  }
  componentDidMount() {
    let url = "http://localhost:3000/read/allmanga";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ manga: data, loader: false });
      })
      //ERREUR
      .catch((err) => {
        console.log(err);
        document.getElementById("error").innerHTML = "<h3>Erreur</h3>";
        this.setState({ loader: false });
      });
  }

  render = () => {
    const leManga = this.state.manga;

    return (
      <div>
        <div id="error"> </div>
        {this.state.loader ? (
          <Load />
        ) : (
          leManga.map((data, i) => {
            return (
              <div className="Conteneur-Card">
                <img src={data.Image} alt="image_film" />

                <div className="cards-body">
                  <h5 className="cards-title"> {data.Nom} </h5>
                  <p className="cards-text">{data.Description}</p>
                  <p> {data.Date}</p>
                  <p> {data.Type}</p>
                  <a href="/Film" className="btn-primary">
                    Go
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  };
}
