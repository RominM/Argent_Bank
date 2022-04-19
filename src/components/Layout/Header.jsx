import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletedToken } from '../../redux/reducers/usersReducer';
import logo from './../../assets/img/argentBankLogo.png';

const Header = () => {
  const dispatch = useDispatch()
  const tokenAccess = useSelector(state => state.token);

  const handleLogout = () => {
    dispatch(deletedToken)
    console.log('Handle Logout');
  }

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
          <Link className="main-nav-item" to="/signIn">
            <span className="fa fa-user-circle right"></span>
            Sign In
          </Link>
          {tokenAccess &&
            <Link className="main-nav-item" to="/" onClick={() => handleLogout()}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
