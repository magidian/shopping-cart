import React, { Component } from "react";
import { DataContext } from "../Context";

class Payment extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.clearCart()
}

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", color: 'whitesmoke' }}>Thanks for the purchase</h2>
      </div>
    );
  }
}

export default Payment;
