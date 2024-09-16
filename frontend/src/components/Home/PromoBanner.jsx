import React from 'react';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-image">
        <img src="./images/promo.png" alt="Living Room" />
      </div>
      <div className="promo-content">
      <div className='promo-content-container'>
        <p className="sale-tag">SALE UP TO 35% OFF</p>
        <h1>HUNDREDS of New lower prices!</h1>
        <p className='promo-text1'>It's more affordable than ever to give every room in your home a stylish makeover.</p>
      </div>
        <a href="#shopnow" className="shop-now-link">Shop Now →</a>
        </div>
    </div>
  );
};

export default PromoBanner;
