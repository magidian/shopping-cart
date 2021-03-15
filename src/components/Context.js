import React, { Component } from "react";

export const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Puma Shoes 01",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROA33wp1hcic4dSaKUEmtsqv7CIKeqqS1A8yiPKwR-ccQAU_E1dCugCiT0cw2riinmxTwGvVk&usqp=CAc",
        price: 23,
        colors: ["red", "black", "yellow", "lightgreen"],
        count: 1,
      },
      {
        _id: "2",
        title: "Nike Shoes 02",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrm72dMvKL4VrsYpL0YdgPcylYOAQQ6FxmSQ&usqp=CAU",
        price: 19,
        colors: ["red", "crimson", "purple"],
        count: 1,
      },
      {
        _id: "3",
        title: "Converse Shoes 03",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8H_HzEcG_sijE4v7n1TqG7JtlNMBY_YgfmA&usqp=CAU",
        price: 50,
        colors: ["lightblue", "white", "crimson", "green"],
        count: 1,
      },
      {
        _id: "4",
        title: "Black Shoes 04",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBGDIE0Q7qxAy5YGSH6Mhyhn28Rjeq1XC3w&usqp=CAU",
        price: 15,
        colors: ["orange", "black", "red", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Brown Shoes 05",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHr27wo0tnM6U9T8WZxqCwS2PWYslNipe_g&usqp=CAU",
        price: 10,
        colors: ["brown", "navy"],
        count: 1,
      },
      {
        _id: "6",
        title: "Leather Shoes 06",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgE_hSBkX_QPxauKE5X7F6eMO6rt3wmPTPgH-tzrzuF952DQtt4v_fUr3MX23Qvqnj7GybvwJM&usqp=CAc",
        price: 17,
        colors: ["brown", "black", "crimson"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => { //to check if an item is already in the cart
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({
        cart: [...cart, ...data],
      });
    } else {
      alert("The product has been added to the cart.");
    }
  };

  decrement = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({
      cart: cart,
    });
    this.getTotal();
  };

  increment = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({
      cart: cart,
    });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to remove this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({
        cart: cart,
      });
    }
    this.getTotal();
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({
      total: res,
    });
  };

  componentDidUpdate() {
      localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
      localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
  }

  componentDidMount() {
      const dataCart = JSON.parse(localStorage.getItem('dataCart'))
      if (dataCart !== null) {
          this.setState({cart: dataCart})
      }
      const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
      if (dataTotal !== null) {
          this.setState({total: dataTotal})
      }
  }

  clearCart = () => {
    this.setState({
      cart: [],
    });
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, increment, decrement, removeProduct, getTotal, clearCart } = this;

    return (
      <DataContext.Provider
        value={{
          products,
          cart,
          addCart,
          increment,
          decrement,
          removeProduct,
          total,
          getTotal,
          clearCart
        }}
      >
        {this.props.children}
        {/* using the parent components' elements */}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
