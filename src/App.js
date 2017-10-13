import React from 'react';
import Header from './Header';
import CartItemList from './CartItemList';
import CartItem from './CartItem';
import Footer from './Footer';
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
        <Header />
        <CartItemList />
        <Footer />
      </div>
    );
  }
}

export default App;
