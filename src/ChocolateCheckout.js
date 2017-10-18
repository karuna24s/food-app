import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const Chocolate = () => (
    <Route>
      <div className="container">
        <CartItem itemTitle="Add Chocolate to cart?" price="$5" />
        <p>
          <Link to={"ChocolateConfirm"}>
            <button type="button" className="btn btn-primary">
              Add To Cart
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
  )

  export default Chocolate
