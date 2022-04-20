// React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Redux
import { useDispatch } from 'react-redux';
import { saveToken } from '../redux/reducers/usersReducer';
// Service
import { getToken } from '../service/service';
// Components
import Loader from '../components/Loader';

/**
 * Render the Login page of the application
 * @function Login
 * @returns { ReactElement }
 */

const SignIn = () => {
   //STATE
   const [loading, setLoading] = useState(false)
   const [email, setEmail] = useState("");
   const [password, setPasseword] = useState("");
   const [remember, setRemember] = useState(false);
   const [error, setError] = useState(null);
   // TOOLS
   const dispatch = useDispatch()
   const navigate = useNavigate();
   // OnSubmit
   const handleSignIn = async (e) => {
      e.preventDefault();
      try {
         setLoading(true)
         // GET TOKEN
         const result = await getToken(email, password)
         const token = result.data.body.token;
         // SEND ACTION TO REDUX
         dispatch(saveToken(token))
         setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
         }, 1500);
      }
      catch (err) {
         setTimeout(() => {
            setLoading(false);
            setError(err)
         }, 500);
      }
   }

   return (
      loading ?
         <Loader /> :
         <HelmetProvider>
            <Helmet>
               <title>Argent Bank - Sign In</title>
            </Helmet>
            <main className="main bg-dark">
               <section className="sign-in-content">
                  <i className="fa fa-user-circle sign-in-icon"></i>
                  <h1>Sign In</h1>
                  {error && <span className='err-mes'>Something wrong here</span>}
                  <form onSubmit={e => handleSignIn(e)}>
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
                           onChange={(e) => setPasseword(e.target.value)}
                        />
                     </div>
                     <div className="input-remember">
                        <label htmlFor="remember-me">Remember me</label>
                        <input type="checkbox" id="remember-me" value={remember} onChange={(e) => setRemember(e.target.value)}
                        />
                     </div>
                     {/* <Link to="/dashboard" className="sign-in-button">Sign In</Link> */}
                     {/* SHOULD BE THE BUTTON BELOW*/}
                     <button className="sign-in-button">Sign In</button>
                  </form>
               </section>

            </main>
         </HelmetProvider>
   );
};

export default SignIn;
