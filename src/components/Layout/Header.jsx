// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Assets
import logo from './../../assets/img/argentBankLogo.png';
import { userData } from '../../service/service';

const Header = () => {
   const store = useSelector((state) => state);
   const dispatch = useDispatch();

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');

   useEffect(() => {
      if (store.token) {
         const fetchData = async () => {
            const user = await userData(store.token);
            setFirstName(user.firstName);
            setLastName(user.lastName);
         };
         fetchData();
      }
   }, [store]);

   const handleSignOut = () => {
      dispatch({ type: 'LOGOUT_ACTION' });
   };

   return (
      <header>
         <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
               <img
                  className="main-nav-logo-image"
                  src={logo}
                  alt="Argent Bank Logo"
               />
               <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
               {!store.token ? (
                  <Link className="main-nav-item" to="/signIn">
                     <span className="fa fa-user-circle right"></span>
                     &nbsp;Sign In
                  </Link>
               ) : (
                  <div>
                     <Link className="main-nav-item" to="/dashboard">
                        <span className="fa fa-user-circle right"></span>
                        &nbsp;{firstName}&nbsp;{lastName}
                     </Link>
                     <Link
                        className="main-nav-item"
                        to="/"
                        onClick={() => handleSignOut()}
                     >
                        <i className="fa fa-sign-out"></i>
                        &nbsp;Sign Out
                     </Link>
                  </div>
               )}
            </div>
         </nav>
      </header>
   );
};

export default Header;
