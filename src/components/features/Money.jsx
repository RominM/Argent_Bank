import React from 'react';
import icoMoney from './../../assets/img/icon-money.png';

const Money = () => {
  return (
    <div className="feature-item">
      <img src={icoMoney} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">More savings means higher rates</h3>
      <p>The more you save with us, the higher your interest rate will be!</p>
    </div>
  );
};

export default Money;
