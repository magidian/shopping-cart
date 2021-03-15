import React, { Component } from "react";
import { DataContext } from "../Context";
import Colors from "./Colors";
import "../css/Details.css";

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const { increment, decrement, addCart } = this.context;

    return (
      <div>
        {product.map((item) => (
          <div className="details" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <Colors colors={item.colors} />
              {/* <Link to="/cart" className="cart">
                Add to Cart
              </Link> */}
              {/* <div className="amount">
                <button className="count" onClick={() => decrement(item._id)}>
                  -
                </button>
                <span>{item.count}</span>
                <button className="count" onClick={() => increment(item._id)}>
                  +
                </button>
              </div> */}

              <button className="cart-btn" onClick={() => addCart(item._id)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Details;