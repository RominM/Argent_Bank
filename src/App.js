// React
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
// Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
// import ProtectedRoute from './components/ProtectedRoute';
// Style
import './style/App.css';

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        {/* <Route element={<ProtectedRoute/>}> */}
          <Route path="/dashboard" element={<Dashboard />} />
        {/* </Route> */}
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
