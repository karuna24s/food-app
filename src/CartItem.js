import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

class CartItem extends React.Component{
    render(){
      let selectItem = this.props.selectItem
      let price = this.props.price
      let itemTitle = this.props.itemTitle
      return(
      <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
              <div className="caption">
                <h4>{itemTitle}</h4>
                <p>{price}</p>
                {/* <p><a href="#" className="btn btn-primary" role="button">{selectItem}</a></p> */}
                <button type="button" onClick={() => this.AddToCart()} className="btn btn-default">{selectItem}</button>
            </div>
            </div>
        </div>
    );
  }

  AddToCart (){
    console.log("entered AddToCart");
    return (
      <div className="container">
        <CartItem itemTitle={this.props.itemTitle}/>
      </div>
    );
  }
}


CartItem.propTypes = {
  addToCart: PropTypes.string,
  price: PropTypes.string,
  item1Title: PropTypes.string,
}

CartItem.defaultProps = {
  selectItem:"Select Item",
  price:"10",
  itemTitle: "ItemTitle",
}

export default CartItem
