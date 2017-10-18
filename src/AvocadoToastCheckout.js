import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const AvocadoToast = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Add AvocadoToast to cart?" price="$8" />
      <p>
        <Link to={"AvocadoToastConfirm"}>
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

  export default AvocadoToast
