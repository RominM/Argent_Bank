import React from 'react';
import Balances from '../components/balances/Balances';
import Hello from '../components/Hello';

const Dashboard = () => {
  return (
    <main class="main bg-dark">
      <Hello />
      <h2 class="sr-only">Accounts</h2>
      <Balances />
    </main>
  );
};

export default Dashboard;
