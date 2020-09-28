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

            {/* <div className="loader">
              <strong>Loading...</strong>
              <div
                className="spinner-border ml-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div> */}

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
      </Router>
            
    </div>
  );
}

export default App;
