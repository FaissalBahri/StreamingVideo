import React from "react";

export default function Home() {
  return (
    <div>
                    {/* CARDS 1 */}
      <div className="Conteneur-Card">
                     

        <img src="../images/assets/clapperboard-red.png" alt="Logo-Film" />

        <div className="cards-body">
          <h5 className="cards-title">Film</h5>
          <p className="cards-text">
            La Vidéothèque, riche de plus de 2300 films{" "}
          </p>
          <a href="/Film" className="btn-primary">
            Go
          </a>
        </div>
      </div>
                     {/* CARDS 2 */}
      <div className="Conteneur-Card">
        

        <div className="cards-body">
          <h5 className="cards-title">Serie</h5>
          <p className="cards-text">
            La Vidéothèque, riche de plus de 2300 serie{" "}
          </p>
          <a href="/Serie" className="btn-primary">
            Go
          </a>
        </div>
        <img src="../images/assets/clapperboard-yellow.png" alt="Logo-Serie" />
      </div>
    </div>
  );
}
