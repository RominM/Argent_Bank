// React
import React from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Assets
import logo from './../../assets/img/argentBankLogo.png';

const Header = () => {
   const store = useSelector((state) => state);
   const user = store.user;

   const dispatch = useDispatch();

   const title =
      user !== null ? user.firstName + ' ' + user.lastName : 'SignIn';

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
               <Link
                  className="main-nav-item"
                  to={store.loggedIn ? '/dashboard' : '/signIn'}
               >
                  <span className="fa fa-user-circle right"></span>
                  &nbsp;{title}
               </Link>
               {store.loggedIn && (
                  <Link
                     className="main-nav-item"
                     to="/"
                     onClick={() => handleSignOut()}
                  >
                     <i className="fa fa-sign-out"></i>
                     &nbsp;Sign Out
                  </Link>
               )}
            </div>
         </nav>
      </header>
   );
};

export default Header;
