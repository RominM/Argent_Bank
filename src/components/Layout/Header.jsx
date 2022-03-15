import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/argentBankLogo.png';

const Header = () => {
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
