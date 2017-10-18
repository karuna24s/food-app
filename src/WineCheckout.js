import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const Wine = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Add Wine to cart?" price="$20" />
      <p>
        <Link to={"WineConfirm"}>
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
);


export default Wine
