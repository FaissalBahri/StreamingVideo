import React, { Component } from 'react'
import "../Media.css";
import Load from "./Load";

export default class Serie extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          serie: [],
          loader: true,
        };
      }
    
      componentDidMount() {
        let url = "http://localhost:3000/read/allserie";
    
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({ serie: data, loader: false });
          })
          //ERREUR 
          .catch((err) => {
            console.log(err)
            document.getElementById('error').innerHTML="<h3>Erreur</h3>";
            this.setState({loader:false})
          });
      }
    

      render = () => {
        const laSerie = this.state.serie;
    
        return (
          <div>
           <div id="error"> </div>
            {this.state.loader ? 
              <Load /> : (
              laSerie.map((data, i) => {
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
