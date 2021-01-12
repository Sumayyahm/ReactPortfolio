import React from "react";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
import About from "./components/About/About.js";
import Footer from "./components/Footer";
import {
    Switch,
    Route
  } from "react-router-dom";






function App() {

    return (
        <div className="body">
        
        <Navbar />
        <br></br><br></br>
        <Switch>
        <Route exact path={["/", "/reactportfolio"]}>
            <About />
          </Route>
        
          <Route  path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
   
        <Footer />
        </div>
    )
}

export default App;