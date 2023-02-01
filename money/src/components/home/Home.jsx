import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <img
          className="navbarImg"
          src="https://neal.fun/spend/billgates.jpg"
          alt="bg"
        />
        <h2>Spend Bill Gates' Money</h2>
        <div className="moneybag">
          <h2>$100,000,000,000</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
