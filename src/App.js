// React
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
// Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { tokenSelect } from './redux/selectors/selectors';

const App = () => {
   const tokenAccess = useSelector(tokenSelect);

   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/dashboard"
               element={tokenAccess ? <Dashboard /> : <SignIn />}
            />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </>
   );
};

export default App;
