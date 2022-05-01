// React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { saveToken } from '../redux/reducers/usersReducer';
// Service
import { getToken } from '../service/service';
import { checkCredentials } from '../redux/actions/actions';
// Components
import Loader from '../components/Loader';

/**
 * Render the Login page of the application
 * @function SignIn
 * @returns { ReactElement }
 */

const SignIn = () => {
  const store = useSelector((state) => state);
  //STATE
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(null);

  // TOOLS
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rememberMe = true;

  // OnSubmit
  const handleSignIn = (e) => {
    e.preventDefault();
    // run checkCredentials action
    dispatch(checkCredentials(email, password, rememberMe));
  };

  // State
  if (store.currentState === 'loading') setLoading(false);
  if (store.currentState === 'logged') navigate('/dashboard');

  if (loading) return <Loader />;

  return (
    <HelmetProvider>
      <Helmet>
        <title>Argent Bank - Sign In</title>
      </Helmet>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {error && <span className="err-mes">Something wrong here</span>}
          <form onSubmit={(e) => handleSignIn(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <label htmlFor="remember-me">Remember me</label>
              <input
                type="checkbox"
                id="remember-me"
                value={remember}
                onChange={(e) => setRemember(e.target.value)}
              />
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default SignIn;
