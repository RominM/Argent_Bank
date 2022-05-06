// React
import React from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { deletedToken } from '../../redux/reducers/usersReducer';
// Assets
import logo from './../../assets/img/argentBankLogo.png';
import { tokenSelect, userSelect } from '../../redux/selectors/selectors';

const Header = () => {
   const dispatch = useDispatch();
   //TODO Need "useEffect" ?
   const tokenAccess = useSelector(tokenSelect);
   const userAccess = useSelector(userSelect);

   const handleSignOut = () => {
      dispatch(deletedToken);
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
               {!tokenAccess ? (
                  <Link className="main-nav-item" to="/signIn">
                     <span className="fa fa-user-circle right"></span>
                     &nbsp;Sign In
                  </Link>
               ) : (
                  <div>
                     <Link className="main-nav-item" to="/signIn">
                        <span className="fa fa-user-circle right"></span>
                        &nbsp;Username
                        {/* &nbsp;{userAccess.firstName}
                        {userAccess.lastName} */}
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
