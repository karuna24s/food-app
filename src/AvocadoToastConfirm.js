import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const AvocadoToastConfirm = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Your Avocado Toast purchase" price="$8" />
      <p>
        <Link to={"thankyou"}>
          <button type="button" className="btn btn-primary">
            Confirm
          </button>
        </Link>
      </p>
      <p>
        <Link to={"/"}>
          <button type="button" className="btn btn-primary">
            Cancel
          </button>
        </Link>
      </p>
    </div>
  </Route>
);


export default AvocadoToastConfirm
