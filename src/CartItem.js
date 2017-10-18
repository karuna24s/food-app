import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      itemTitle : this.props.itemTitle,
      price : this.props.price
    }
  }
  render() {
    return (
      /*<div className="row">*/
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            {/*<img src="..." alt="...">*/}
            <div className="caption">
              <h3>{this.props.itemTitle}</h3>
              <h4>Cost: {this.props.price}</h4>
              {/*<p>
                <a href="#" class="btn btn-primary" role="button">
                  Button
                </a>{" "}
                <a href="#" class="btn btn-default" role="button">
                  Button
                </a>
              </p>*/}
            </div>
          </div>
        </div>
      /*</div>*/
    );
  }
}

export default CartItem;
