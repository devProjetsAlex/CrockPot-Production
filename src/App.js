import React from "react";
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import Accueil from './container/Accueil/Accueil'
import Menu from './container/Menu/Menu'
import Mixologie from './container/Mixologie/Mixologie'
import Homepage from './container/Homepage/Homepage'

import Users from './component/User/Users'
import UserReservation from './container/NewReservation/UserReservation'

import MainNavigation from "./Navigation/MainNavigation/MainNavigation";

export default function App() {
  return (
    <Router>
        <MainNavigation/>  
           <main>
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
          
          <Route path="/:userId/reservation" exact>
                <UserReservation/>
          </Route>

          <Route path='/users'>
              <Users/>
          </Route>
        </Switch>
        </main>
     </Router>
  );
}
