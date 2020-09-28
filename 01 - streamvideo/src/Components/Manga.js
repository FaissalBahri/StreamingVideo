import React, { Component } from 'react'


export default class Manga extends Component {
  
        constructor(props) {
            super(props);
        
            this.state = {
              manga: [],
            };
          }
          componentDidMount() {

            let url = "http://localhost:3000/read/allmanga";
        
            fetch(url)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                this.setState({ manga: data })
              });
          }
        
          render = () => {
            const LeManga = this.state.manga;
        
            return LeManga.map((data, i) => {
              return (
                <div className="Conteneur-Card">
                  <img src={data.Image} alt="image_film"/>
        
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
            });
          };
}

