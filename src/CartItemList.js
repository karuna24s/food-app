import React from 'react';
import CartItem from './CartItem';
import Header from './Header';
import Footer from './Footer';

class CartItemList extends React.Component{
  render(){
      return(
          <div className="row">
            <CartItem itemTitle="Wine" price="20" />
            <CartItem itemTitle="Chocolate" price="10"/>
            <CartItem itemTitle="Sushi" price="15"/>
            <CartItem itemTitle="Avocado Toast" price="5"/>
          </div>
      );
  }
}

export default CartItemList
