// React
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
// Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
// Style
import './style/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
