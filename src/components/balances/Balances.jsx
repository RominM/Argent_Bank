import React from 'react';
import Checking from './Checking';
import CreditCard from './CreditCard';
import Saving from './Saving';

const Balances = () => {
  return (
    <div>
      <Checking />
      <Saving />
      <CreditCard />
    </div>
  );
};

export default Balances;
