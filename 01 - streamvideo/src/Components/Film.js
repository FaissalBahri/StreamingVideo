import React, { Component } from "react";
import "../Media.css";
import Load from "./Load";

export default class Film extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loader: true,
    };
  }


  componentDidMount() {
    let url = "http://localhost:3000/read/allmovies";

    fetch(url)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data)
        this.setState({ movies: data, loader: false });
      })

      //ERREUR 
      .catch((err) => {
        console.log(err)
        document.getElementById('error').innerHTML="<h3>Erreur</h3>";
        this.setState({loader:false})
      })

  }

 // POUR TRIER 

  render = () => {
    const leFilm = this.state.movies;

    return (
      <div>
        <div id="error"> </div>
        {this.state.loader ? 
          <Load /> : (
    
          leFilm.map((data, i) => {
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
