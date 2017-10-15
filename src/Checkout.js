import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Checkout extends React.Component {
  onButton(event) {
    event.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div>
        <button onClick={e => this.onButton(e)}>Check Out</button>
        <button onClick={e => this.onButton(e)}>Cancel</button>
      </div>
    );
  }
}
