
import React from "react";

export default function Home() {
  return (

    <div id="conteneur-body">

      {/* CARDS 1 */}
      <div className="conteneur-Card">
        <img src="../images/assets/clapperboard-red.png" alt="Logo-Film" />

        <div className="cards-body">
          <h5 className="cards-title">Film</h5>
          <p className="cards-text">
            La Vidéothèque, riche de plus de 400 films{" "}
          </p>
          <a href="/Film" className="btn-primary">
            Go
          </a>
        </div>
      </div>

      {/* CARDS 2 */}
      <div className="conteneur-Card">
        <div className="cards-body">
          <h5 className="cards-title">Serie</h5>
          <p className="cards-text">
            La Vidéothèque, riche de plus de 300 serie{" "}
          </p>
          <a href="/Serie" className="btn-primary">
            Go
          </a>
        </div>
        <img src="../images/assets/clapperboard-yellow.png" alt="Logo-Serie" />
      </div>

      {/* CARDS 3 */}
      <div className="conteneur-Card">
        
        <img src="../images/assets/clapperboard-green.png" alt="Logo-Manga" />
        <div className="cards-body">
          <h5 className="cards-title">Manga</h5>
          <p className="cards-text">
            La Vidéothèque, riche de plus de 100 Manga{" "}
          </p>
          <a href="/Manga" className="btn-primary">
            Go
          </a>
        </div>
      </div>
    </div>
  );
}
