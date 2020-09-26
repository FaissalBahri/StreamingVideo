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
              </Switch>
      </Router>
            
    </div>
  );
}

export default App;
