import React from 'react';
import './App.css';

// TODO INSTALL MODULE BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

// TODO IMPORTE Router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// TODO IMPORT COMPONENTS
import Home from "./Components/Home";
import Film from "./Components/Film";
import Serie from "./Components/Serie";
import Manga from "./Components/Manga";


function App() {
  return (

    <div className="App">

      <Router>


              {/* HEADER */}
              <header id="header">
                <Link to="/">
                  <h1>StreamVideo</h1>
                </Link>
              </header>

              {/* SWITCH ROUTE */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Film" component={Film} />
                <Route exact path="/Serie" component={Serie} />
                <Route exact path="/Manga" component={Manga} />
              </Switch>


                            {/* HEADER */}
              <footer id="footer">

                <div id="conteneur-legal">
                  <h5>Home | Terms and condition | Privacy Policy | Collection Statement |  Help | Manage Account</h5>
                  <h6>Copyright © 2016 demo Streaming. All Rights Reserved.</h6>
                </div>

                <div id="conteneur-assets">

                  <div id="conteneur-social">
                    <img src="./images/assets/social/facebook-blue.svg" alt="facebook-logo"/>
                    <img src="./images/assets/social/twitter-blue.svg" alt="twitter-logo"/>
                    <img src="./images/assets/social/instagram-blue.svg" alt="instagram-logo"/>
                  </div>
       

                  <div id="conteneur-store">
                  <img src="./images/assets/store/app-store.svg" alt="appStore-logo"/>
                  <img src="./images/assets/store/play-store.svg" alt="playStore-logo"/>
                  <img src="./images/assets/store/windows-store.svg" alt="windowsStore-logo"/>
                  </div>

                </div>

              </footer>

      </Router>
            
    </div>
  );
}

export default App;
