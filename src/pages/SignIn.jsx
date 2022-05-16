// React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Redux
import { useDispatch, useSelector } from 'react-redux';
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
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [remember, setRemember] = useState(false);
   // TOOLS
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSignIn = (e) => {
      e.preventDefault();
      dispatch(checkCredentials(email, password, remember));
   };

   useEffect(() => {
      if (store.currentState === 'logged') {
         navigate('/dashboard');
      }
      if (store.loader) return <Loader />;
   });

   return (
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Sign In</title>
         </Helmet>
         <main className="main bg-dark">
            <section className="sign-in-content">
               <i className="fa fa-user-circle sign-in-icon"></i>
               <h1>Sign In</h1>
               {store.error && (
                  <span className="err-mes">Something wrong here</span>
               )}
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
                        onChange={(e) => setRemember(!remember)}
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
