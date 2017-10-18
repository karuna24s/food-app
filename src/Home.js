import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const Home = () => (
  <Route>
  <div className="container">
    <Link to={"wine"}>
      <CartItem itemTitle="Wine" price="$20" />
    </Link>
    <Link to={"chocolate"}>
      <CartItem itemTitle="Chocolate" price="$5" />
    </Link>
    <Link to={"sushi"}>
      <CartItem itemTitle="Sushi" price="$10" />
    </Link>
    <Link to={"avocadoToast"}>
      <CartItem itemTitle="Avocado Toast" price="$8" />
    </Link>
  </div>
  </Route>
)

export default Home
