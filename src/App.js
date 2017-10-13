import React from 'react';
import CartItemList from './CartItemList';
import CartItem from './CartItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)

class Home extends React.Component{
  render(){
    return (
      <div className="container">
        <CartItemList />
      </div>
    );
  }
}

export default App;
