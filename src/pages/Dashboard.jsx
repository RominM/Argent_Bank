import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Balances from '../components/balances/Balances';
import Hello from '../components/Hello';

const Dashboard = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Dashboard</title>
         </Helmet>
         <main class="main bg-dark">
            <Hello />
            <h2 class="sr-only">Accounts</h2>
            <Balances />
         </main>
      </HelmetProvider>
   );
};

export default Dashboard;
