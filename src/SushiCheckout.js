import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const Sushi = () => (
    <Route>
      <div className="container">
        <CartItem itemTitle="Add Sushi to cart?" price="$10" />
        <p>
          <Link to={"SushiConfirm"}>
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

  export default Sushi
