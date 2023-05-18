import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Sweet Devlivery</h3>
            <h1>Food Funda</h1>
            <p>
              Welcome to our sweet e-commerce website, where sugary dreams come true! Indulge your taste buds and satisfy your cravings as you explore a world of delectable treats and delightful confections. From classic favorites to innovative creations, we offer a wide range of mouthwatering sweets that are sure to delight both young and old..
            </p>
            <div className="banner__btn">
              <a href="/" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
