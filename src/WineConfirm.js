import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const WineConfirm = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Your Wine Purchase -" price="$20"/>
      <div className="btn-toolbar">
        <p>
          <Link to={"thankyou"}>
            <button type="button" className="btn btn-primary btn-sm btn">
              Confirm
            </button>
          </Link>
        </p>
        <span style={{width:30}}></span>
        <p>
          <Link to={"/"}>
            <button type="button" className="btn btn-primary btn-sm btn">
              Cancel
            </button>
          </Link>
        </p>
      </div>
    </div>
  </Route>
);


export default WineConfirm
