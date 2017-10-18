import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Wine from "./WineCheckout";
import Chocolate from "./ChocolateCheckout";
import Sushi from "./SushiCheckout";
import AvocadoToast from "./AvocadoToastCheckout";
import WineConfirm from "./WineConfirm";
import ChocolateConfirm from "./ChocolateConfirm";
import SushiConfirm from "./SushiConfirm";
import AvocadoToastConfirm from "./AvocadoToastConfirm";
import ThankYou from "./ThankYou";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/wine' component={Wine}/>
        <Route path='/chocolate' component={Chocolate}/>
        <Route path='/sushi' component={Sushi}/>
        <Route path='/avocadoToast' component={AvocadoToast}/>
        <Route path='/wineConfirm' component={WineConfirm}/>
        <Route path='/chocolateConfirm' component={ChocolateConfirm}/>
        <Route path='/sushiConfirm' component={SushiConfirm}/>
        <Route path='/avocadoToastConfirm' component={AvocadoToastConfirm}/>
        <Route path='/thankyou' component={ThankYou}/>
      </Switch>
    </Router>
  </main>
)

export default Main
