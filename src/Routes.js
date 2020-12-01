import React from "react";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
import About from "./components/About/About.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  function Routes() {
      return (
      <Router>
        <Navbar />
        <br></br><br></br>
        <Switch>
        <Route exact path="/">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
      )
  }

  export default Routes;