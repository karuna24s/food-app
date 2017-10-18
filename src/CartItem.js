import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      itemTitle : this.props.itemTitle,
      price : this.props.price
    }
  }
  render() {
    return (
        <div className="row">
          <div className="col-sm-4">
            <p>{this.props.itemTitle} Cost: {this.props.price}</p>
          </div>
        </div>
    );
  }
}

export default CartItem;
