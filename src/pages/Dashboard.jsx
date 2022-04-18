import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import Balances from '../components/balances/Balances';
import Hello from '../components/Hello';

const Dashboard = () => {

   const tokenAccess = useSelector(state => state.token);
   console.log('You are logged with this token : ' + tokenAccess);
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
            <Balances />
         </main>
      </HelmetProvider>
   );
};

export default Dashboard;
