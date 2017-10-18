import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const SushiConfirm = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Your Sushi purchase -" price="$10"/>
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


export default SushiConfirm
