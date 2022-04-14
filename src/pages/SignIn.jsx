import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { saveToken } from '../redux_old/usersReducer';
import { getToken } from '../service/service';

const SignIn = () => {
   // const refEmail = useRef();
   // const refPassword = useRef();

   const [email, setEmail] = useState("");
   const [password, setPasseword] = useState("");
   const [remember, setRemember] = useState(false);
   const dispatch = useDispatch()

   const handleSubmit = async (e) => {
      e.preventDefault();
      // GET TOKEN
      const result = await getToken(email, password)
      const token = result.data.body.token
      console.log(token);
      // SEND ACTION TO REDUX
      dispatch(saveToken(token))
      return token
   }

   return (
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
                     // ref={refEmail}
                     />
                  </div>
                  <div className="input-wrapper">
                     <label htmlFor="password">Password</label>
                     <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPasseword(e.target.value)}
                     // ref={refPassword}
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
