import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const AvocadoToast = () => (
  <Route>
    <div className="container">
      <CartItem itemTitle="Add AvocadoToast to cart?" price="$8"/>
      <div className="btn-toolbar">
        <p>
          <Link to={"AvocadoToastConfirm"}>
            <button type="button" className="btn btn-primary">
              Add To Cart
            </button>
          </Link>
        </p>
        <span style={{width:30}}></span>
        <p>
          <Link to={"/"}>
            <button type="button" className="btn btn-primary">
              Cancel
            </button>
          </Link>
        </p>
      </div>
    </div>
  </Route>
  )

  export default AvocadoToast
