import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hello from '../components/Hello';
import Amount from '../components/Layout/Amount';

const Dashboard = () => {
   const tokenAccess = useSelector(state => state.token);

   //const token = useSelector(state => state.token) (accedé au token)
   // private routes / routes protégées avec react-router
   // je peux accéder à la page profil si un token non null existe dans le store

   return (
      tokenAccess &&
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Dashboard</title>
         </Helmet>
         <main className="main bg-dark">
            <Hello />
            <h2 className="sr-only">Accounts</h2>
            <Amount title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescr="Available Balance"
               linkPath="/transactions" transButton="View transactions" />
            <Amount title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescr="Available Balance"
               linkPath="/transactions" transButton="View transactions" />
            <Amount title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescr="Current Balance"
               linkPath="/transactions" transButton="View transactions" />
         </main>
      </HelmetProvider>
   );
};

export default Dashboard;
