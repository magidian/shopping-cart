import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className='home-text'>
        <h1 className="welcome">Welcome to the shoe shop</h1>

        <Link to="/products" className="shoplink">
          View products here
        </Link>
      </div>
    </div>
  );
}

export default Home;
