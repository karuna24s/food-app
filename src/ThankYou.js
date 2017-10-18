import React from 'react'
import { Route, Link } from 'react-router-dom'

const ThankYou = () => (
  <Route>
    <div className="container">
      <p>Thank you for your purchase!</p>
      <p>
        <Link to={"/"}>
          <button type="button" className="btn btn-primary">
            Back to Food App Main page
          </button>
        </Link>
      </p>
    </div>
  </Route>
);


export default ThankYou
