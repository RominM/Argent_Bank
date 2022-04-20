// React
import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Components
import Profil from '../components/Profil';
import Acount from '../components/Acount';

const Dashboard = () => {
   const tokenAccess = useSelector(state => state.token);

   return (
      tokenAccess &&
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Dashboard</title>
         </Helmet>
         <main className="main bg-dark">
            <Profil />
            <h2 className="sr-only">Accounts</h2>
            <Acount title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescr="Available Balance"
               linkPath="/transactions" transButton="View transactions" />
            <Acount title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescr="Available Balance"
               linkPath="/transactions" transButton="View transactions" />
            <Acount title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescr="Current Balance"
               linkPath="/transactions" transButton="View transactions" />
         </main>
      </HelmetProvider>
   );
};

export default Dashboard;
