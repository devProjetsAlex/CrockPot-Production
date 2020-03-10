import React from "react";
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Button from './component/Button/Button'

import Accueil from './container/Accueil/Accueil'
import Menu from './container/Menu/Menu'
import Mixologie from './container/Mixologie/Mixologie'
import Homepage from './container/Homepage/Homepage'
import Reservation from "./container/Reservation/Reservation";

export default function BasicExample() {
  return (
    <Router>
      <div>
      <div className="Header">
        <div className="Button">
            <Button crokpot to="/">Home</Button>
        
            <Button crokpot to="/accueil">Accueil</Button>
       
            <Button crokpot to="/menu">Menu</Button>
        
            <Button crokpot to="/mixologie"> Mixologie </Button>
     
            <Button crokpot to="/reservation"> Reservation </Button>
            </div>
    </div>
   

     
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/accueil">
            <Accueil />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/mixologie">
            <Mixologie />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.


