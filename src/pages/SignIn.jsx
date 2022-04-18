import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../redux_old/usersReducer';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { getToken } from '../service/service';

const SignIn = () => {
   //STATE
   const [loading, setLoading] = useState(false)
   const [email, setEmail] = useState("");
   const [password, setPasseword] = useState("");
   const [remember, setRemember] = useState(false);
   // TOOLS
   const dispatch = useDispatch()
   const navigate = useNavigate();
   // OnSubmit
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         // GET TOKEN
         setLoading(true)
         const result = await getToken(email, password)
         const token = result.data.body.token;
         // setLoading(true)
         // SEND ACTION TO REDUX
         dispatch(saveToken(token))
         navigate('/dashboard');
         setTimeout(() => {
            setLoading(false);
         }, 1500);
      }
      catch (err) {
         alert('Nom d\'utilisateur ou Mot de passe incorrect')
      }
   }


   // if (loading) {
   //    return <Loader />;
   // }
   // if (!loading) {
   //    return <Navigate to="not-found" />;
   // }

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
                  <form onSubmit={e => handleSubmit(e)}>
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
