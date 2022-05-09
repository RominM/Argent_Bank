// React
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import Error from './pages/Error';
// Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
   const store = useSelector((state) => state);

   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/dashboard"
               element={
                  store.token ? (
                     <Dashboard />
                  ) : (
                     <Navigate to="/signIn" replace />
                  )
               }
            />
            <Route path="/signIn" element={<SignIn />} />
            <Route
               path={store.token && '/transactions'}
               element={<Transaction />}
            />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </>
   );
};

export default App;
