import React from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './CartItem'

const Chocolate = () => (
    <Route>
      <div className="container">
        <CartItem itemTitle="Add Chocolate to cart?" price="$5"/>
        <div className="btn-toolbar">
          <p>
            <Link to={"ChocolateConfirm"}>
              <button type="button" className="btn btn-primary btn-sm btn">
                Add To Cart
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
  )

  export default Chocolate
