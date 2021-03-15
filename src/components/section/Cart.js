import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import Colors from "./Colors";
import "../css/Cart.css";

class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
      this.context.getTotal()
  }

  render() {
    const { cart, increment, decrement, removeProduct, total} = this.context;

    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center", color: 'whitesmoke' }}>The cart is empty</h2>;
    } else {
      return (
        <div>
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />
                <div className="amount">
                  <button className="count-btn" onClick={() => decrement(item._id)}>
                    -
                  </button>
                  <span>{item.count}</span>
                  <button className="count-btn" onClick={() => increment(item._id)}>
                    +
                  </button>
                </div>
                {/* <div className="quantity">Quantity: {item.count}</div> */}
              </div>
              <div className="delete" onClick={() => removeProduct(item._id)}>
                x
              </div>
            </div>
          ))}
          <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: ${total}</h3>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
